import { describe, expect, it } from 'vitest';
import { app } from '../../src/app.js';

describe('GET /', () => {
  it('returns 200 HTML', async () => {
    const res = await app.request('/');
    expect(res.status).toBe(200);
    expect(res.headers.get('content-type')).toMatch(/^text\/html/);
  });

  it('renders a valid document shell', async () => {
    const html = await (await app.request('/')).text();
    expect(html).toMatch(/^<!DOCTYPE html>/i);
    expect(html).toContain('<html lang="en">');
    expect(html).toMatch(/<meta name="viewport"/);
    expect(html).toMatch(/<title>[^<]+<\/title>/);
  });

  it('renders header, nav, main and footer', async () => {
    const html = await (await app.request('/')).text();
    for (const tag of ['header', 'nav', 'main', 'footer']) {
      expect(html).toContain(`<${tag}`);
    }
  });

  it('links Home and shows unbuilt sections as "coming soon" without links', async () => {
    const html = await (await app.request('/')).text();
    const nav = html.match(/<nav[\s\S]*?<\/nav>/)?.[0] ?? '';
    expect(nav).toMatch(/<a [^>]*href="\/"/);
    for (const section of ['Agents', 'Ailments', 'Therapies', 'Appointments']) {
      expect(nav).toContain(section);
      expect(nav).not.toMatch(new RegExp(`<a [^>]*>[^<]*${section}`));
    }
    expect(nav.match(/coming soon/gi)?.length).toBeGreaterThanOrEqual(4);
  });

  it('links both stylesheets', async () => {
    const html = await (await app.request('/')).text();
    expect(html).toContain('href="/styles.css"');
    expect(html).toContain('href="/layout.css"');
  });
});

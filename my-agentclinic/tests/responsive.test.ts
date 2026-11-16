import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import { app } from '../src/app.js';

const STYLESHEETS = ['public/styles.css', 'public/layout.css'];
const BREAKPOINTS = ['40rem', '64rem'];
const css = (path: string) => readFileSync(path, 'utf8');

describe('responsive design', () => {
  it('sets a viewport that scales with the device and allows zoom', async () => {
    const html = await (await app.request('/')).text();
    const viewport = html.match(/<meta name="viewport" content="([^"]+)"/)?.[1];
    expect(viewport).toBe('width=device-width, initial-scale=1');
  });

  for (const path of STYLESHEETS) {
    describe(path, () => {
      it('is mobile-first: media queries only use min-width', () => {
        expect(css(path)).not.toMatch(/@media[^{]*max-width/);
      });

      it('only uses the shared breakpoints', () => {
        const used = [...css(path).matchAll(/@media[^{]*min-width:\s*([^)]+)\)/g)].map((m) => m[1].trim());
        for (const bp of used) expect(BREAKPOINTS).toContain(bp);
      });

      it('does not set fixed pixel widths that could overflow a 320px screen', () => {
        for (const [, px] of css(path).matchAll(/(?<![-\w])(?:min-)?width:\s*(\d+)px/g)) {
          expect(Number(px)).toBeLessThanOrEqual(320);
        }
      });
    });
  }

  it('keeps media from overflowing its container', () => {
    expect(css('public/styles.css')).toMatch(/img,\s*svg,\s*video\s*\{[^}]*max-width:\s*100%/);
  });

  it('gives nav items a minimum touch target', () => {
    expect(css('public/styles.css')).toMatch(/--tap-target:\s*2\.75rem/);
    expect(css('public/layout.css')).toMatch(/\.site-nav a\s*\{[^}]*min-height:\s*var\(--tap-target\)/);
  });
});

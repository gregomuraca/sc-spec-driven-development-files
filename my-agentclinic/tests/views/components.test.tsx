import { describe, expect, it } from 'vitest';
import { Nav } from '../../src/views/Nav.js';
import { Header } from '../../src/views/Header.js';
import { Main } from '../../src/views/Main.js';
import { Footer } from '../../src/views/Footer.js';
import { Layout } from '../../src/views/Layout.js';
import { HomePage } from '../../src/views/HomePage.js';
import { render } from './render.js';

const SECTIONS = ['Agents', 'Ailments', 'Therapies', 'Appointments'];

describe('Nav', () => {
  it('links Home and marks it current', async () => {
    const html = await render(<Nav current="home" />);
    expect(html).toMatch(/<a href="\/" aria-current="page">\s*Home\s*<\/a>/);
    expect(html).toContain('aria-label="Main"');
  });

  it('shows each unbuilt section as "coming soon" and never as a link', async () => {
    const html = await render(<Nav current="home" />);
    expect(html.match(/<a /g)).toHaveLength(1);
    for (const section of SECTIONS) {
      expect(html).toMatch(new RegExp(`<span>${section}</span>\\s*<small>coming soon</small>`));
    }
  });
});

describe('Header', () => {
  it('renders the brand, tagline and nav', async () => {
    const html = await render(<Header current="home" />);
    expect(html).toMatch(/^<header/);
    expect(html).toContain('AgentClinic');
    expect(html).toContain('Relief for hardworking AI agents');
    expect(html).toContain('<nav');
  });
});

describe('Main', () => {
  it('wraps its children in <main>', async () => {
    const html = await render(
      <Main>
        <p>hello</p>
      </Main>,
    );
    expect(html).toBe('<main class="container"><p>hello</p></main>');
  });
});

describe('Footer', () => {
  it('shows the current year and a playful line', async () => {
    const html = await render(<Footer />);
    expect(html).toMatch(/^<footer/);
    expect(html).toContain(String(new Date().getFullYear()));
    expect(html).toContain('No context windows were harmed');
  });
});

describe('Layout', () => {
  const page = () =>
    render(
      <Layout title="Test page" current="home">
        <p id="content">body</p>
      </Layout>,
    );

  it('renders a complete document with the given title', async () => {
    const html = await page();
    expect(html).toMatch(/^<!DOCTYPE html><html lang="en">/);
    expect(html).toContain('<meta charset="utf-8"/>');
    expect(html).toContain('name="viewport"');
    expect(html).toContain('<title>Test page</title>');
  });

  it('links styles.css before layout.css', async () => {
    const html = await page();
    const styles = html.indexOf('href="/styles.css"');
    const layout = html.indexOf('href="/layout.css"');
    expect(styles).toBeGreaterThan(-1);
    expect(layout).toBeGreaterThan(styles);
  });

  it('composes header, main (with children) and footer in order', async () => {
    const html = await page();
    const header = html.indexOf('<header');
    const main = html.indexOf('<main');
    const content = html.indexOf('<p id="content">');
    const footer = html.indexOf('<footer');
    expect(header).toBeGreaterThan(-1);
    expect(main).toBeGreaterThan(header);
    expect(content).toBeGreaterThan(main);
    expect(footer).toBeGreaterThan(content);
  });
});

describe('HomePage', () => {
  it('renders the welcome hero', async () => {
    const html = await render(<HomePage />);
    expect(html).toContain('<h1 class="hero__title">Welcome to AgentClinic</h1>');
  });

  it('describes all four offerings as cards', async () => {
    const html = await render(<HomePage />);
    expect(html.match(/<li class="card">/g)).toHaveLength(4);
    for (const section of SECTIONS) {
      expect(html).toContain(`<h3>${section}</h3>`);
    }
  });
});

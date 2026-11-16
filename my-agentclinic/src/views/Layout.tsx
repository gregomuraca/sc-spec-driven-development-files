import type { Child } from 'hono/jsx';
import { raw } from 'hono/html';
import { Nav, type NavKey } from './Nav.js';

type LayoutProps = {
  title: string;
  current: NavKey;
  children?: Child;
};

export const Layout = ({ title, current, children }: LayoutProps) => (
  <>
    {raw('<!DOCTYPE html>')}
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{title}</title>
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body>
        <header class="site-header">
          <div class="container site-header__inner">
            <a href="/" class="brand">
              <span class="brand__mark" aria-hidden="true">+</span>
              <span class="brand__name">AgentClinic</span>
            </a>
            <p class="brand__tagline">Relief for hardworking AI agents</p>
          </div>
          <Nav current={current} />
        </header>
        <main class="container">{children}</main>
        <footer class="site-footer">
          <div class="container">
            <p>
              © {new Date().getFullYear()} AgentClinic · No context windows were harmed in the
              making of this site.
            </p>
          </div>
        </footer>
      </body>
    </html>
  </>
);

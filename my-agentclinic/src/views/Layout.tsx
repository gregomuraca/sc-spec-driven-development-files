import type { Child } from 'hono/jsx';
import { raw } from 'hono/html';
import type { NavKey } from './Nav.js';
import { Header } from './Header.js';
import { Main } from './Main.js';
import { Footer } from './Footer.js';

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
        <link rel="stylesheet" href="/layout.css" />
      </head>
      <body>
        <Header current={current} />
        <Main>{children}</Main>
        <Footer />
      </body>
    </html>
  </>
);

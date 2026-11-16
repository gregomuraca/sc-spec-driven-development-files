import { Nav, type NavKey } from './Nav.js';

type HeaderProps = {
  current: NavKey;
};

export const Header = ({ current }: HeaderProps) => (
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
);

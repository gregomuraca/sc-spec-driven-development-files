export type NavKey = 'home';

type NavProps = {
  current: NavKey;
};

const comingSoon = ['Agents', 'Ailments', 'Therapies', 'Appointments'];

export const Nav = ({ current }: NavProps) => (
  <nav class="site-nav" aria-label="Main">
    <ul class="container site-nav__list">
      <li>
        <a href="/" aria-current={current === 'home' ? 'page' : undefined}>
          Home
        </a>
      </li>
      {comingSoon.map((label) => (
        <li class="site-nav__soon">
          <span>{label}</span> <small>coming soon</small>
        </li>
      ))}
    </ul>
  </nav>
);

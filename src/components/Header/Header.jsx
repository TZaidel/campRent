import clsx from 'clsx'
import { NavLink } from 'react-router-dom'

import css from './Header.module.scss'
export default function Header() {

  const linkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.active)
  }

  return (
    <section className={css.section}>
      <nav className={css.nav}>
        <NavLink to="/" className={linkClass}>
          Home
        </NavLink>
        <NavLink to="/catalog" className={linkClass}>
          Rent a camp
        </NavLink>
        <NavLink to="/favorite" className={linkClass}>
          Favorite
        </NavLink>
      </nav>
    </section>
  );
}
import cx from 'classnames';

import styles from './Header.module.css';

export default function Header () {
  return (
    <nav className={cx("navbar", styles.navbar)}>
      <div className="container-fluid">
        <a className="navbar-brand" href="@/components/common/header/Header#">Employee Manager</a>
      </div>
    </nav>
  )
}
import cx from 'classnames';

import styles from './Header.module.css';

export default function Header () {
  return (
    <nav className={cx("navbar", styles.navbar)}>
      <div className="container-fluid">
        <h3 className={styles.heading}>Employee Manager</h3>
      </div>
    </nav>
  )
}
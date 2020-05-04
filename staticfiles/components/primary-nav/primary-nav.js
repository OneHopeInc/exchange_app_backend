import React, { useState } from 'react'
import styles from './primary-nav.module.scss'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import logo from '../../assets/images/indigitous.svg'
import menu from '../../assets/images/icons/menu.svg'

export default function PrimaryNav() {
  let [selected, setSelected] = useState(false, 0)
  return (
    <nav>
      <div className={styles.logoContainer}>
        <img src={logo} className={styles.logo} />
      </div>
      <ul className={styles.nav}>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/">Indigitous</Link>
        </li>
        <li>
          EN <i className="fa fa-angle-down large-icon"></i>
        </li>
      </ul>
      <div
        className={styles.menuContainer}
        onClick={() => setSelected((selected = true))}
      >
        <img src={menu} className={styles.menu} />
      </div>
      {selected ? (
        <div className={styles.dropDown}>
          <p
            clasName={styles.close}
            onClick={() => setSelected((selected = false))}
          >
            Close
          </p>
          <ul className={styles.dropDown_nav}>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/">Indigitous</Link>
            </li>
          </ul>
        </div>
      ) : null}
    </nav>
  )
}

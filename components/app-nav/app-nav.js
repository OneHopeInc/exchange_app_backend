import React from 'react'
import styles from './app-nav.module.scss'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import logo from '../../assets/images/indigitous.svg'

export default function AppNav(props) {
  return (
    <nav className={styles.container}>
      <ul className={styles.nav}>
        {props.activeNav == 'Connections' ? (
          <li className={styles.activeNav}>
            <Link to="/connections">Connections</Link>
          </li>
        ) : (
          <li className={styles.inactiveNav}>
            <Link to="/connections">Connections</Link>
          </li>
        )}
        {props.activeNav == 'Calendar' ? (
          <li className={styles.activeNav}>
            <Link to="/calendar">Calender</Link>
          </li>
        ) : (
          <li className={styles.inactiveNav}>
            <Link to="/calendar">Calender</Link>
          </li>
        )}
        {props.activeNav == 'Exchange' ? (
          <li className={styles.activeNav}>
            <Link to="/exchange">Exchange</Link>
          </li>
        ) : (
          <li className={styles.inactiveNav}>
            <Link to="/exchange">Exchange</Link>
          </li>
        )}
        <li>
          EN <i className="fa fa-angle-down large-icon"></i>
        </li>
      </ul>
    </nav>
  )
}

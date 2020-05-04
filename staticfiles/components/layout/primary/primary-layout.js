import React from 'react'
import styles from './primary.module.scss'
import PrimaryNav from '../../../components/primary-nav'
import Button from '../../../components/button'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import logo from '../../../assets/images/indigitous.svg'

export default function PrimaryLayout(props) {
  return <div className={styles.flex}>{props.children}</div>
}

export function LeftAlign(props) {
  return (
    <div className={styles.colLeft}>
      <div className={styles.layer}></div>
      <div className={styles.logoContainer}>
        <img src={logo} className={styles.logo} />
      </div>
      <div className={styles.textContainer}>{props.children}</div>
    </div>
  )
}

export function RightAlign(props) {
  function handleBack(props) {}
  return (
    <div className={styles.colRight}>
      {props.children}
      <div className={styles.backBtn} onClick={() => handleBack(props)}>
        <i className="fa fa-arrow-circle-left large-icon"></i>
        <p>Go Back</p>
      </div>
    </div>
  )
}

import React from 'react'
import styles from './appLayout.module.scss'
import AppNav from '../../../components/app-nav'
import Button from '../../../components/button'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import logo from '../../../assets/images/indigitous.svg'

export default function AppLayout(props) {
  return (
    <div className={styles.flex}>
      <AppNav activeNav={props.activeNav} />
      {props.children}
    </div>
  )
}

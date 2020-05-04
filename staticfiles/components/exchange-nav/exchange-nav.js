import React, { useState } from 'react'
import styles from './exchange-nav.module.scss'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

export default function ExchangeNav(props) {
  let [show, setShow] = useState(false, 0)

  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <p className={styles.menuOption}>Edit my frequency</p>
      </div>
    </div>
  )
}

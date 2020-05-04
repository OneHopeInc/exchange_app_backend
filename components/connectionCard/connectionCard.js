import React from 'react'
import { BrowserRouter as Router, Routes, Link } from 'react-router-dom'
import Pills from '../pills'
import styles from './connectionCard.module.scss'

export default function ConnectionCard() {
  return (
    <div className={styles.cardBorder}>
      <div className={styles.row}>
        <div className={styles.photoContainer}>
          <div className={styles.photoHolder}></div>
        </div>
        <div className={styles.textHolder}>
          <h4 className={styles.title}>Liam Savage</h4>
          <h5 className={styles.smallText}>56 connections</h5>
          <div className={styles.footerRow}>
            <Pills btn_style="btnxSmall" text="UX/UI" />
            <Pills btn_style="btnxSmall" text="Evangelism" />
            <Pills btn_style="btnxSmall" text="Design" />
          </div>
        </div>
      </div>
    </div>
  )
}

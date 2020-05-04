import React from 'react'
import { BrowserRouter as Router, Routes, Link } from 'react-router-dom'
import Pills from '../pills'
import styles from './profileBreadcrumb.module.scss'
import ProfileNav from '../profile-nav'

export default function ProfileBreadcrumb() {
  return (
    <div className={styles.container}>
      <div className={styles.breadcrumb}>
        <i className="fa fa-arrow-left large-icon"></i>
        <h3>Liam's Profile</h3>
      </div>
      <ProfileNav screen="Profile" />
    </div>
  )
}

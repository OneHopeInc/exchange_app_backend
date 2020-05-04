import React from 'react'
import { BrowserRouter as Router, Routes, Link } from 'react-router-dom'
import ConnectionCard from '../connectionCard'
import styles from './userConnections.module.scss'
import ProfileNav from '../profile-nav'

export default function UserConnections() {
  return (
    <div className={styles.container}>
      <ProfileNav screen="User" />
      <h2 className={styles.sectionHeader}>Recent Connections (3)</h2>
      <div className={styles.row}>
        <Link to="/profile">
          <ConnectionCard />
        </Link>
        <Link to="/profile">
          <ConnectionCard />
        </Link>
        <Link to="/profile">
          <ConnectionCard />
        </Link>
      </div>
      <h2 className={styles.sectionHeader}>All Connections</h2>
      <div className={styles.row}>
        <Link to="/profile">
          <ConnectionCard />
        </Link>
        <Link to="/profile">
          <ConnectionCard />
        </Link>
        <Link to="/profile">
          <ConnectionCard />
        </Link>
        <Link to="/profile">
          <ConnectionCard />
        </Link>
        <Link to="/profile">
          <ConnectionCard />
        </Link>
      </div>
    </div>
  )
}

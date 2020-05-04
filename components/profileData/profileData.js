import React from 'react'
import { BrowserRouter as Router, Routes, Link } from 'react-router-dom'
import ConnectionCard from '../connectionCard'
import styles from './profileData.module.scss'
import SearchBar from '../searchBar'

export default function ProfileData() {
  return (
    <div className={styles.container}>
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

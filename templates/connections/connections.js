import React from 'react'
import styles from './connections.module.scss'
import AppLayout from '../../components/layout/app'
import Button from '../../components/button'
import { BrowserRouter as Router, Routes, Link } from 'react-router-dom'
import LeftProfile from '../../components/left-profile'
import UserConnections from '../../components/userConnections'

export default function Connections(props) {
  return (
    <AppLayout activeNav="Connections">
      <div className={styles.container}>
        <LeftProfile />
        <UserConnections />
      </div>
    </AppLayout>
  )
}

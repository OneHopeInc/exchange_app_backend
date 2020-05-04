import React from 'react'
import { BrowserRouter as Router, Routes, Link } from 'react-router-dom'
import LeftProfile from '../../../components/left-profile'
import styles from './setup.module.scss'
import AppLayout from '../../../components/layout/app'
import Modal from '../../../components/modal'

export default function Setup() {
  return (
    <AppLayout activeNav="Connections">
      <div className={styles.container}>
        <LeftProfile />
        <Modal />
      </div>
    </AppLayout>
  )
}

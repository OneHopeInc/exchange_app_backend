import React from 'react'
import styles from './calendar.module.scss'
import AppLayout from '../../components/layout/app'
import LeftProfile from '../../components/left-profile'
import UserCalendar from '../../components/userCalendar'

export default function Calendar() {
  return (
    <AppLayout activeNav="Calendar">
      <div className={styles.container}>
        <LeftProfile />
        <UserCalendar />
      </div>
    </AppLayout>
  )
}

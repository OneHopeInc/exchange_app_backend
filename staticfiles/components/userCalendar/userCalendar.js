import React from 'react'
import CalendarItem from '../calendarItem'
import styles from './userCalendar.module.scss'

export default function UserCalendar() {
  return (
    <div className={styles.container}>
      <h2 className={styles.sectionHeader}> October 2019</h2>
      <div className={styles.row}>
        <div className={styles.calendarColumn}>
          <p>Monday 21st</p>
          <CalendarItem type="Exchange" past={true} />
          <CalendarItem type="Meeting" />
        </div>
        <div className={styles.calendarColumn}>
          <p>Thursday 24th</p>

          <CalendarItem type="Exchange" />
        </div>
        <div className={styles.calendarColumn}>
          <p>Monday 28th</p>

          <CalendarItem type="Exchange" />
          <CalendarItem type="Meeting" />
        </div>
        <div className={styles.calendarColumn_next}>
          <p>Thursday 8th</p>

          <CalendarItem type="Exchange" />
          <CalendarItem type="Meeting" />
        </div>
      </div>
    </div>
  )
}

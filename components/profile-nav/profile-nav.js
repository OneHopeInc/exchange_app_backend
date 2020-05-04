import React, { useState } from 'react'
import styles from './profile-nav.module.scss'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import SearchBar from '../searchBar'
import MeetingModal from '../meeting-modal'

export default function ProfileNav(props) {
  let [show, setShow] = useState(false, 0)

  function closeMeetingModal() {
    setShow((show = false))
  }
  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <p
          className={styles.menuOption}
          onClick={() => {
            setShow((show = true))
          }}
        >
          Setup a Meeting
        </p>
        {props.screen === 'Profile' ? (
          <p className={styles.menuOption}>Remove Connection</p>
        ) : null}
      </div>
      <div className={styles.searchContainer}>
        <SearchBar />
      </div>
      {show ? <MeetingModal close={() => closeMeetingModal()} /> : null}
    </div>
  )
}

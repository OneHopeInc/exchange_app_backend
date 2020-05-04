import React, { Component, useState } from 'react'
import styles from './meeting-modal.module.scss'
import ModalContainer from '../modalContainer'
import SearchBar from '../searchBar'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import ParticipantPill from '../participant-pill'
import Button from '../button'
import CheckedIcon from '../../assets/images/icons/checked.png'

export default function MeetingModal(props) {
  let [completed, setCompleted] = useState(false, 0)

  return (
    <ModalContainer>
      {completed ? (
        <div className={styles.container}>
          <img src={CheckedIcon} className={styles.icon} />
          <h1>The Meeting Has been Set!</h1>
          <h4>
            We've sent a meeting invitation to participants with the following
            details:
          </h4>
          <div className={styles.meetingDetails}>
            <p>Date: Friday 5th November, 2019.</p>
            <p>Time: 3.00 PM EST</p>
            <p>
              Participants: Liam Savage, Ariel Wolffe, Brian James, Francis
              Foundry
            </p>
          </div>
          <div className={styles.btnContainer}>
            <Button
              text="Close"
              btn_style="medium"
              onClick={() => {
                props.close()
              }}
            />
          </div>
        </div>
      ) : (
        <div className={styles.container}>
          <div className={styles.menu}>
            <p
              className={styles.menuOption}
              onClick={() => {
                props.close()
              }}
            >
              Cancel
            </p>
          </div>
          <h1>New Meeting</h1>
          <div className={styles.row}>
            <div className={styles.row}>
              <p className={styles.label}>Date:</p>
            </div>
            <div className={styles.row}>
              <p className={styles.label}>Time:</p>
            </div>
            <div className={styles.row}>
              <p className={styles.label}>Search to add Connection: </p>
              <SearchBar />
            </div>
          </div>
          <p className={styles.label}>Participants:</p>
          <div className={styles.participantContainer}>
            <ParticipantPill />
          </div>
          <div className={styles.btnContainer}>
            <Button
              text="Setup"
              btn_style="medium"
              onClick={() => {
                setCompleted((completed = true))
              }}
            />
          </div>
        </div>
      )}
    </ModalContainer>
  )
}

{
  /* <div className={styles.scrollRow}>
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
          </div> */
}

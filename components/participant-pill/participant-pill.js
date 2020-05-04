import React from 'react'
import styles from './participant-pill.module.scss'
import Pill from '../pills'

export default function ParticipantPill(props) {
  return (
    <div className={styles.container}>
      <Pill text="Liam Savage" />
    </div>
  )
}

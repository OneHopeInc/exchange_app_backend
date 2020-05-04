import React from 'react'
import ProfileCard from '../profileCard'
import Button from '../button'
import styles from './exchangeReview.module.scss'
import ExchangeIcon from '../../assets/images/icons/exchange-arrows.svg'
import ExchangeNav from '../exchange-nav'

export default function ExchangeReview() {
  return (
    <div className={styles.reviewContainer}>
      <div className={styles.row}>
        <div className={styles.column}>
          <h2 className={styles.exchangeNotification}>Leave a Review!</h2>
          <h3 className={styles.exchangeText}>
            How did the meeting with James go last week? Let us know.
          </h3>
        </div>
        <div className={styles.icon}>
          <i className="fa fa-times-circle medium-icon"></i>
        </div>
      </div>
    </div>
  )
}

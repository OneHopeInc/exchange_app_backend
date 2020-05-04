import React from 'react'
import ProfileCard from '../profileCard'
import Button from '../button'
import styles from './userExchange.module.scss'
import ExchangeIcon from '../../assets/images/icons/exchange-arrows.svg'
import ExchangeNav from '../exchange-nav'

export default function UserExchange() {
  return (
    <div className={styles.exchangeContainer}>
      <div className={styles.row}>
        <div className={styles.column}>
          <h2 className={styles.exchangeNotification}>New Match!</h2>
          <h3 className={styles.exchangeText}>
            We think you'd Love meeting Ben Carson next week!
          </h3>
        </div>
        <div className={styles.row_left}>
          <Button text="Schedule" className={styles.btn} type="approve" />
          <Button text="Cancel" className={styles.btn} type="cancel" />
        </div>
      </div>
      <div className={styles.row}>
        <ProfileCard />
        <img src={ExchangeIcon} className={styles.exchangeIcon} />
        <ProfileCard size="small" />
      </div>
    </div>
  )
}

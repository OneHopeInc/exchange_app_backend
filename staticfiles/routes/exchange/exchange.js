import React from 'react'
import styles from './exchange.module.scss'
import AppLayout from '../../components/layout/app'
import LeftProfile from '../../components/left-profile'
import UserExchange from '../../components/userExchange'
import ExchangeReview from '../../components/exchangeReview'
import ExchangeNav from '../../components/exchange-nav'

export default function Exchange() {
  return (
    <AppLayout activeNav="Exchange">
      <div className={styles.container}>
        <LeftProfile />
        <div className={styles.container_right}>
          <ExchangeNav />
          <h2 className={styles.sectionHeader}> Exchange</h2>
          <ExchangeReview />
          <UserExchange />
        </div>
      </div>
    </AppLayout>
  )
}

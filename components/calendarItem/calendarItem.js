import React from 'react'
import styles from './calendarItem.module.scss'
import ExchangeIcon from '../../assets/images/icons/exchange-arrows.svg'

export default function CalendarItem(props) {
  const type = props.type
  const past = props.past
  return (
    <div className={styles.container}>
      {type == 'Exchange' ? (
        <div>
          <div className={styles.row}>
            <div className={styles.photoHolder}></div>
            <img src={ExchangeIcon} className={styles.exchangeIcon} />
            <div className={styles.photoHolder}></div>
          </div>
          <div className={styles.time}>
            Your Time: <span>7.15am</span>
            <br />
            <br />
            Their Time: <span>11.15am</span>
          </div>
          <h3 className={styles.type}>{type}</h3>
          {past ? <h3 className={styles.review}>Review Meeting</h3> : null}
        </div>
      ) : type == 'Meeting' ? (
        <div>
          <h4 className={styles.projectTitle}>Christ Shakers App</h4>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nec mi
            ut lectus aliquam consequat. Aenean ullamcorper, enim et condimentum
            mattis, neque augue porttitor lacus, nec efficitur est enim at nisl.
          </p>
          <h6 className={styles.subtext}>Meets Every Monday</h6>
          <div className={styles.time}>
            Your Time: <span>7.15am</span>
          </div>
          <h3 className={styles.type}>{type}</h3>
        </div>
      ) : null}
    </div>
  )
}

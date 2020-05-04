import React, { useState } from 'react'
import styles from './frequencyCalendar.module.scss'

function TimeSlot(props) {
  let [selected, setSelected] = useState(false, 0)

  return selected ? (
    <div
      className={styles.time_selected}
      onClick={() => {
        setSelected((selected = false))
        props.onClick()
      }}
    >
      {props.time}
    </div>
  ) : (
    <div
      className={styles.time}
      onClick={() => {
        setSelected((selected = true))
        props.onClick()
      }}
    >
      {props.time}
    </div>
  )
}

export default function FrequencyCalendar(props) {
  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <div className={styles.column}>
          <div>
            <p className={styles.date}>12</p>
            <h6 className={styles.day}>Mon</h6>
          </div>
          <TimeSlot time="12pm" onClick={() => console.log('clicked')} />
          <TimeSlot time="6pm" onClick={() => console.log('clicked')} />
        </div>
        <div className={styles.column}>
          <div>
            <p className={styles.date}>13</p>
            <h6 className={styles.day}>Tues</h6>
          </div>
          <TimeSlot time="12pm" onClick={() => console.log('clicked')} />
          <TimeSlot time="6pm" onClick={() => console.log('clicked')} />
        </div>
        <div className={styles.column}>
          <div>
            <p className={styles.date}>14</p>
            <h6 className={styles.day}>Wed</h6>
          </div>
          <TimeSlot time="12pm" onClick={() => console.log('clicked')} />
          <TimeSlot time="6pm" onClick={() => console.log('clicked')} />
        </div>
        <div className={styles.column}>
          <div>
            <p className={styles.date}>15</p>
            <h6 className={styles.day}>Thurs</h6>
          </div>
          <TimeSlot time="12pm" onClick={() => console.log('clicked')} />
          <TimeSlot time="6pm" onClick={() => console.log('clicked')} />
        </div>
        <div className={styles.column}>
          <div>
            <p className={styles.date}>16</p>
            <h6 className={styles.day}>Fri</h6>
          </div>
          <TimeSlot time="12pm" onClick={() => console.log('clicked')} />
          <TimeSlot time="6pm" onClick={() => console.log('clicked')} />
        </div>
        <div className={styles.column}>
          <div>
            <p className={styles.date}>17</p>
            <h6 className={styles.day}>Sat</h6>
          </div>
          <TimeSlot time="12pm" onClick={() => console.log('clicked')} />
          <TimeSlot time="6pm" onClick={() => console.log('clicked')} />
        </div>
        <div className={styles.column}>
          <div>
            <p className={styles.date}>18</p>
            <h6 className={styles.day}>Sun</h6>
          </div>
          <TimeSlot time="12pm" onClick={() => console.log('clicked')} />
          <TimeSlot time="6pm" onClick={() => console.log('clicked')} />
        </div>
      </div>
    </div>
  )
}

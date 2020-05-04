import React, { useState } from 'react'
import styles from './frequencyButtons.module.scss'

export default function FrequencyButton(props) {
  let [selected, setSelected] = useState(false, 0)
  return selected ? (
    <div
      className={styles.iconBtn_selected}
      onClick={() => {
        setSelected((selected = false))
        props.onClick()
      }}
    >
      <img src={props.image} className={styles.icon} alt={props.alt} />
      <p>{props.label}</p>
    </div>
  ) : (
    <div
      className={styles.iconBtn}
      onClick={() => {
        setSelected((selected = true))
        props.onClick()
      }}
    >
      <img src={props.image} className={styles.icon} alt={props.alt} />
      <p>{props.label}</p>
    </div>
  )
}

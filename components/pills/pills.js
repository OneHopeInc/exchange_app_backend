import React, { useState } from 'react'
import styles from './pills.module.scss'

//initial selected state
let initialSelected = false

export default function Pills(props) {
  let [selected, setSelected] = useState(false, 0)

  let style = props.btn_style
  if (style === 'xlarge') {
    return selected ? (
      <button
        type={props.type}
        className={styles.btnxLarge_selected}
        onClick={() => {
          setSelected((selected = false))
          props.onClick()
        }}
      >
        <span>{props.text}</span>
      </button>
    ) : (
      <button
        type={props.type}
        className={styles.btnxLarge}
        onClick={() => {
          setSelected((selected = true))
          props.onClick()
        }}
      >
        {props.text}
      </button>
    )
  }
  if (style === 'large') {
    return selected ? (
      <button
        type={props.type}
        className={styles.btnLarge_selected}
        onClick={() => {
          setSelected((selected = false))
          props.onClick()
        }}
      >
        {props.text}
      </button>
    ) : (
      <button
        type={props.type}
        className={styles.btnLarge}
        onClick={() => {
          setSelected((selected = true))
          props.onClick()
        }}
      >
        {props.text}
      </button>
    )
  } else if (style === 'icon') {
    return <button className={styles.btnIcon}>{props.icon}</button>
  } else if (style === 'btnxSmall') {
    return (
      <button type={props.type} className={styles.btnxSmall}>
        {props.text}
      </button>
    )
  } else {
    return <button className={styles.btnRegular}>{props.text}</button>
  }
}

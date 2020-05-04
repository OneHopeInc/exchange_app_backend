import React from 'react'
import styles from './button.module.scss'

export default function Button(props) {
  console.log(props)
  let style = props.btn_style || null
  let inverse = props.inverse || null
  let type = props.type || null

  if (style === 'large' && inverse === 'inverse') {
    return (
      <button type={props.type} className={styles.btnLarge_inverse}>
        <span>{props.text}</span>
      </button>
    )
  }
  if (style === 'xlarge') {
    return (
      <button type={props.type} className={styles.btnxLarge}>
        <span>{props.text}</span>
      </button>
    )
  }
  if (style === 'xlarge' && inverse === 'inverse') {
    return (
      <button type={props.type} className={styles.btnxLarge_inverse}>
        <span>{props.text}</span>
      </button>
    )
  }

  if (style === 'large') {
    return (
      <button type={props.type} className={styles.btnLarge}>
        {props.text}
      </button>
    )
  }
  if (style === 'small') {
    return (
      <button type={props.type} className={styles.btnSmall}>
        {props.text}
      </button>
    )
  }
  if (style === 'medium') {
    return (
      <button
        type={props.type}
        className={styles.btnMedium}
        onClick={props.onClick}
      >
        {props.text}
      </button>
    )
  }
  if (style === 'icon') {
    return <button className={styles.btnIcon}>{props.icon}</button>
  }
  if (type === 'cancel') {
    return (
      <button type={props.type} className={styles.btnCancel}>
        {props.text}
      </button>
    )
  }
  if (type === 'approve') {
    return (
      <button type={props.type} className={styles.btnApprove}>
        {props.text}
      </button>
    )
  } else {
    return (
      <button type={props.type} className={props.className}>
        {props.text}
      </button>
    )
  }
}

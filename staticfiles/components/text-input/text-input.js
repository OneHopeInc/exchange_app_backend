import React from 'react'
import styles from './text-input.module.scss'

export default function TextInput(props) {
  let size = props.size
  if (size === 'large') {
    return (
      <div className={styles.largeInput}>
        <p className={styles.inputText}>{props.text}</p>
        <input
          type={props.type}
          name={props.name}
          value={props.value}
          className={styles.inputField}
          required={props.required}
          onChange={props.onChange}
        />
      </div>
    )
  } else if (size === 'small') {
    return (
      <div className={styles.smallInput}>
        <p className={styles.inputText}>{props.text}</p>
        <input
          type={props.type}
          name={props.name}
          value={props.value}
          className={styles.inputField}
          required={props.required}
          onChange={props.onChange}
        />
      </div>
    )
  } else if (size === 'search') {
    return (
      <div className={styles.searchInput}>
        <p className={styles.inputText}>{props.text}</p>
        <input
          type={props.type}
          name={props.name}
          value={props.value}
          className={styles.searchInputField}
          required={props.required}
          onChange={props.onChange}
        />
      </div>
    )
  } else {
    return (
      <div>
        <p>TextInput:</p>
        <input
          type={props.type}
          name={props.name}
          value={props.value}
          className={styles.inputField}
          required={props.required}
          onChange={props.onChange}
        />
      </div>
    )
  }
}

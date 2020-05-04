import React from 'react'
import styles from './modalContainer.module.scss'

export default function ModalContainer(props) {
  return (
    <div className={styles.container}>
      {props.children}
    </div>
  )
}

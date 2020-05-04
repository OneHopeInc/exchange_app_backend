import React from 'react'
import styles from './searchBar.module.scss'
import TextInput from '../text-input'
import SearchIcon from '../../assets/images/icons/search.svg'

export default function SearchBar(props) {
  return (
    <div>
      <div className={styles.searchInput}>
        <img src={SearchIcon} className={styles.searchIcon} />
        <input
          type={props.type}
          name={props.name}
          value={props.value}
          className={styles.searchInputField}
          required={props.required}
          onChange={props.onChange}
        />
      </div>
    </div>
  )
}

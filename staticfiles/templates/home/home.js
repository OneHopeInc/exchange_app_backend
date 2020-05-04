import React from 'react'
import styles from './home.module.scss'
import PrimaryNav from '../../components/primary-nav'
import Button from '../../components/button'
import { BrowserRouter as Router, Routes, Link } from 'react-router-dom'
import homeImg from '../../assets/images/stories.png'
import homeImg_Mobile from '../../assets/images/stories_mobile.png'

export default function Home() {
  return (
    <div className={styles.bkg}>
      <PrimaryNav />
      <div className={styles.imageContainer}>
        <img src={homeImg} className={styles.image} />
      </div>
      <div className={styles.imageContainer_mobile}>
        <img src={homeImg_Mobile} className={styles.image} />
      </div>
      <div className={styles.btnMain}>
        <Link to="/signup">
          <Button text="Sign Up" btn_style="xlarge" className={styles.btn} />
        </Link>
      </div>
    </div>
  )
}

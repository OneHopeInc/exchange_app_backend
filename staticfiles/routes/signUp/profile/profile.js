import React from 'react'
import { BrowserRouter as Router, Routes, Link } from 'react-router-dom'

import styles from './profile.module.scss'
import Button from '../../../components/button'
import PrimaryLayout, {
  LeftAlign,
  RightAlign
} from '../../../components/layout/primary/primary-layout'
import ProfileCard from '../../../components/profileCard'

export default function ProfileConfirmation() {
  return (
    <PrimaryLayout>
      <LeftAlign>
        <h2>
          And he gave some, apostles; and some, prophets; and some, evangelists;
          and some, pastors and teachers;
          <br /> Eph 4:11
        </h2>
      </LeftAlign>
      <RightAlign>
        <h1>Looking Good!</h1>
        <h5>Checkout your profile</h5>

        <div className={styles.profileContainer}>
          <ProfileCard />
          <h6>
            <Link to="/login">Edit</Link>
          </h6>
        </div>

        <div className={styles.btnMain}>
          <Link to="/setup-intro">
            <Button text="Let Me In!" btn_style="large" />
          </Link>
        </div>
      </RightAlign>
    </PrimaryLayout>
  )
}

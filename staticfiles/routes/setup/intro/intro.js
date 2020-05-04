import React from 'react'
import { BrowserRouter as Router, Routes, Link } from 'react-router-dom'

import styles from './intro.module.scss'
import Button from '../../../components/button'
import PrimaryLayout, {
  LeftAlign,
  RightAlign
} from '../../../components/layout/primary/primary-layout'

export default function Intro() {
  return (
    <PrimaryLayout>
      <LeftAlign></LeftAlign>
      <RightAlign>
        <div className={styles.container}>
          <h5>We're so excited you're here!</h5>

          <h1>Ready for your first meeting?</h1>

          <div className={styles.btnMain}>
            <Link to="/setup">
              <Button text="Let's Go!" btn_style="large" inverse="inverse" />
            </Link>
          </div>
          <Link to="/login">
            <h5>Maybe Later</h5>
          </Link>
        </div>
      </RightAlign>
    </PrimaryLayout>
  )
}

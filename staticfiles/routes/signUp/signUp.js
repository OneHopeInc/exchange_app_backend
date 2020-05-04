import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import styles from './signUp.module.scss'
import PrimaryNav from '../../components/primary-nav'
import Button from '../../components/button'
import PrimaryLayout, {
  LeftAlign,
  RightAlign
} from '../../components/layout/primary/primary-layout'
import TextInput from '../../components/text-input'
import {
  GOOGLE_AUTH_URL,
  FACEBOOK_AUTH_URL,
  GITHUB_AUTH_URL,
  ACCESS_TOKEN
} from '../../utils/constants'
import { signup } from '../../utils/APIutils'

export default function SignUp() {
  return (
    <PrimaryLayout>
      <LeftAlign>
        <h2>
          Beacuse you care about Jesus, technology, design, evangelism and
          discipleship and we think that's awesome.
        </h2>
      </LeftAlign>
      <RightAlign>
        <h1>Sign Up for Exchange</h1>
        <div className={styles.socialForm}>
          <a href={FACEBOOK_AUTH_URL}>
            <Button
              icon={<i className="fa fa-facebook"></i>}
              btn_style="icon"
            />
          </a>
          <a href={GITHUB_AUTH_URL}>
            <Button icon={<i className="fa fa-github"></i>} btn_style="icon" />
          </a>
          <a href={GOOGLE_AUTH_URL}>
            <Button icon={<i className="fa fa-google"></i>} btn_style="icon" />
          </a>
        </div>
        <h5>Or Use Your Email Address</h5>

        <div className={styles.form}>
          <p className={styles.inputText}>Language:</p>
          <div className={styles.selectContainer}>
            <select className={styles.selectList}>
              <option default value="grapefruit" className={styles.selectItem}>
                English
              </option>
              <option value="lime" className={styles.selectItem}>
                Español
              </option>
              <option value="coconut" className={styles.selectItem}>
                Deutsch
              </option>
              <option value="mango" className={styles.selectItem}>
                Français
              </option>
            </select>
          </div>
          <TextInput text="Email" name="email" size="large" type="email" />
          <TextInput
            text="Password"
            name="password"
            type="password"
            size="large"
          />
        </div>

        <div className={styles.btnMain}>
          <Link to="/identity/">
            <Button text="Sign Up" btn_style="large" />
          </Link>
        </div>
        <h6>
          Aready have an account? <Link to="/login">Log In</Link>
        </h6>
      </RightAlign>
    </PrimaryLayout>
  )
}

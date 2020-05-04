import React from 'react'
import { BrowserRouter as Router, Routes, Link } from 'react-router-dom'

import styles from './stepOne.module.scss'
import PrimaryNav from '../../../components/primary-nav'
import Button from '../../../components/button'
import PrimaryLayout, {
  LeftAlign,
  RightAlign
} from '../../../components/layout/primary/primary-layout'
import TextInput from '../../../components/text-input'

export default function StepOne() {
  return (
    <PrimaryLayout>
      <LeftAlign>
        <h2>
          There are more people who care about the same things you do. You want
          to meet them, trust me.
        </h2>
      </LeftAlign>
      <RightAlign>
        <h1>Let's do this!</h1>
        <h5>We'd love to know you by name.</h5>

        <div className={styles.form}>
          <TextInput
            text="First Name"
            name="firstName"
            size="large"
            type="firstName"
          />
          <TextInput
            text="Last Name"
            name="lastName"
            type="lastName"
            size="large"
          />
          <TextInput
            text="Username"
            name="Username"
            type="Username"
            size="large"
          />
        </div>

        <div className={styles.btnMain}>
          <Link to="/skills">
            <Button text="Next" btn_style="large" />
          </Link>
        </div>
      </RightAlign>
    </PrimaryLayout>
  )
}

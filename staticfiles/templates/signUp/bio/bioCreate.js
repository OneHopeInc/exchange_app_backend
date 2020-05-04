import React from 'react'
import { BrowserRouter as Router, Routes, Link } from 'react-router-dom'

import styles from './bio.module.scss'
import PrimaryNav from '../../../components/primary-nav'
import Button from '../../../components/button'
import PrimaryLayout, {
  LeftAlign,
  RightAlign
} from '../../../components/layout/primary/primary-layout'
import TextInput from '../../../components/text-input'
import Pill from '../../../components/pills'

import Skills from '../../../utils/data/skills.json'

export default function Bio() {
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
        <h1>Words of Hello</h1>
        <h5>Setup your profile</h5>

        <div className={styles.container}>
          <div className={styles.photoContainer}>
            <div className={styles.photoHolder}></div>
            <Button text="Upload Photo" btn_style="small" />
          </div>

          <div className={styles.bioContainer}>
            <textarea
              value=""
              onChange=""
              placeholder="Introduce yourself in a few sentences. Personally, Spiritually and professionally"
              cols={40}
              rows={10}
              className={styles.bioArea}
            />
          </div>
        </div>

        <div className={styles.btnMain}>
          <Link to="/profileConfirmation">
            <Button text="Next" btn_style="large" />
          </Link>
        </div>
        <h6>
          <Link to="/connections">Skip</Link>
        </h6>
      </RightAlign>
    </PrimaryLayout>
  )
}

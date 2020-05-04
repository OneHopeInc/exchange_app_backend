import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Link } from 'react-router-dom'

import styles from './stepTwo.module.scss'
import Button from '../../../components/button'
import PrimaryLayout, {
  LeftAlign,
  RightAlign
} from '../../../components/layout/primary/primary-layout'
import TextInput from '../../../components/text-input'
import Pill from '../../../components/pills'

import Skills from '../../../utils/data/skills.json'

export default function StepTwo() {
  let [selectedList] = useState([])

  //add or remove Skill from selected List
  function handlePillSelect(skill) {
    //find Skill in current list
    let skillAlreadySelected = selectedList.find(s => s == skill)
    //if skill found, remove from list
    if (skillAlreadySelected) {
      selectedList = selectedList.filter(
        skill => skill !== skillAlreadySelected
      )
      console.log(selectedList)
    } else {
      // skill not found, add to list
      selectedList.push(skill)
    }
    console.log(selectedList)
  }

  return (
    <PrimaryLayout>
      <LeftAlign>
        <h2>
          We'll introduce you, because we think that{' '}
          <u>together, nothing is impossible.</u>
        </h2>
      </LeftAlign>
      <RightAlign>
        <h1>What are you good at?</h1>
        <h5>Select all that apply</h5>

        <div className={styles.scrollRow}>
          {Skills.map((skill, key) => {
            return (
              <Pill
                btn_style="large"
                text={skill}
                key={key}
                onClick={() => handlePillSelect(skill)}
              />
            )
          })}
        </div>

        <div className={styles.btnMain}>
          <Link to="/involvement">
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

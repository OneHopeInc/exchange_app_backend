import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Link } from 'react-router-dom'

import styles from './stepThree.module.scss'
import PrimaryNav from '../../../components/primary-nav'
import Button from '../../../components/button'
import PrimaryLayout, {
  LeftAlign,
  RightAlign
} from '../../../components/layout/primary/primary-layout'
import TextInput from '../../../components/text-input'
import Pill from '../../../components/pills'

const textList = [
  "I'm a project owner and want to collaborate",
  'I want to contribute to an amazing project',
  'I like to mentor and disciple people',
  'I want to learn from people with experience',
  'I want to meet new friends and network'
]

export default function StepThree() {
  let [selectedList] = useState([])

  //add or remove Item from selected List
  function handlePillSelect(item) {
    //find item in current list
    let pillAlreadySelected = selectedList.find(i => i == item)
    if (pillAlreadySelected) {
      selectedList = selectedList.filter(item => item !== pillAlreadySelected)
      console.log(selectedList)
    } else {
      // item not found, add to list
      selectedList.push(item)
    }
  }

  return (
    <PrimaryLayout>
      <LeftAlign>
        {/* prettier-ignore */}
        <h2 style={{textAlign:"right"}}>"For the body is not one member, but many." <br/>
        1 Corinthians 12:14</h2>
      </LeftAlign>
      <RightAlign>
        <h1>Why are you here?</h1>
        <h5>Select all that apply</h5>

        <div className={styles.column}>
          {textList.map((text, key) => {
            return (
              <Pill
                key={key}
                btn_style="xlarge"
                text={text}
                onClick={() => handlePillSelect(text)}
              />
            )
          })}
        </div>

        <div className={styles.btnMain}>
          <Link to="/ministry">
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

import React, { Component, useState } from 'react'
import styles from './modal.module.scss'
import ModalContainer from '../modalContainer'
import Button from '../button'
import FrequencyCalendar from '../frequencyCalendar'
import Sun from '../../assets/images/icons/sun.png'
import SunSet from '../../assets/images/icons/sunset.png'
import Moonrise from '../../assets/images/icons/moonrise.png'
import Moon from '../../assets/images/icons/moon.png'
import Monthly from '../../assets/images/icons/monthly.png'
import BiWeekly from '../../assets/images/icons/bi-weekly.png'
import FrequencyButton from '../frequencyButton/frequencyButtons'
import ProfileCard from '../profileCard'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

function Time(props) {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}> A Fine Time</h1>
      <h3 className={styles.subtitle}>When might you typically be free?</h3>
      <p className={styles.subtext}>Select ALL that apply</p>
      <div className={styles.row}>
        <FrequencyButton
          label="Early Morning"
          image={SunSet}
          alt="Early Morning"
          onClick={() => console.log('EarlyMorning')}
        />
        <FrequencyButton
          label="Midday"
          image={Sun}
          alt="Midday"
          onClick={() => console.log('Midday')}
        />
        <FrequencyButton
          label="Early Evening"
          image={Moonrise}
          alt="Early Evening"
          onClick={() => console.log('EarlyEvening')}
        />
        <FrequencyButton
          label="Late Evening"
          image={Moon}
          alt="late Evening"
          onClick={() => console.log('LateEvening')}
        />
      </div>
      <div className={styles.btn}>
        <Button text="Next" btn_style="medium" onClick={props.handleNext} />
      </div>
    </div>
  )
}

function Date(props) {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}> A Fine Time</h1>
      <h3 className={styles.subtitle}>
        Looking at the next couple weeks, what days/times work for you?
      </h3>
      <p className={styles.subtext}>Select ALL that apply</p>
      <div className={styles.row}>
        <FrequencyCalendar />
      </div>
      <div className={styles.btn}>
        <Button text="Next" btn_style="medium" onClick={props.handleNext} />
      </div>
    </div>
  )
}

function Frequency(props) {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}> A Fine Time</h1>
      <h3 className={styles.subtitle}>
        How often would you like to connect to someone new?
      </h3>
      <p className={styles.subtext}>Select one.</p>
      <div className={styles.row}>
        <FrequencyButton
          label="Monthly"
          image={Monthly}
          alt="Monthly"
          onClick={() => console.log('monthly')}
        />
        <FrequencyButton
          label="Bi-Weekly"
          image={BiWeekly}
          alt="Bi-Weekly"
          onClick={() => console.log('bi-weekly')}
        />
      </div>
      <div className={styles.btn}>
        <Button text="Next" btn_style="medium" onClick={props.handleNext} />
      </div>
    </div>
  )
}

function Match(props) {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}> How about...</h1>
      <h3 className={styles.subtitle}>
        We're 95% positive you'll enjoy meeting
      </h3>
      <div className={styles.row}>
        <ProfileCard />
      </div>
      <div className={styles.btn_connect}>
        <Link to="/exchange">
          <Button
            text="Connect With Liam"
            className={styles.btn_custom}
            onClick={props.handleNext}
          />
        </Link>
      </div>
    </div>
  )
}

export default class Modal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      stage: 'time'
    }

    // this.loadCurrentlyLoggedInUser = this.loadCurrentlyLoggedInUser.bind(this)
    // this.handleLogout = this.handleLogout.bind(this)
  }

  handleNext(value) {
    this.setState({ stage: value })
  }

  render() {
    return (
      <ModalContainer>
        {this.state.stage === 'time' ? (
          <Time handleNext={() => this.handleNext('date')} />
        ) : this.state.stage === 'date' ? (
          <Date handleNext={() => this.handleNext('frequency')} />
        ) : this.state.stage === 'frequency' ? (
          <Frequency handleNext={() => this.handleNext('match')} />
        ) : this.state.stage === 'match' ? (
          <Match handleNext={() => this.handleNext('match')} />
        ) : null}
      </ModalContainer>
    )
  }
}

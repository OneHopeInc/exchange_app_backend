import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Link,
  Redirect
} from 'react-router-dom'
import {
  GOOGLE_AUTH_URL,
  FACEBOOK_AUTH_URL,
  GITHUB_AUTH_URL,
  ACCESS_TOKEN
} from '../../utils/constants'
import { login } from '../../utils/APIutils'

import styles from './login.module.scss'
import PrimaryNav from '../../components/primary-nav'
import Button from '../../components/button'
import PrimaryLayout, {
  LeftAlign,
  RightAlign
} from '../../components/layout/primary/primary-layout'
import TextInput from '../../components/text-input'

export default class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    // If the OAuth2 login encounters an error, the user is redirected to the /login page with an error.
    // Here we display the error and then remove the error query parameter from the location.
    if (this.props.location.state && this.props.location.state.error) {
      setTimeout(() => {
        alert(this.props.location.state.error, {
          timeout: 5000
        })
        this.props.history.replace({
          pathname: this.props.location.pathname,
          state: {}
        })
      }, 100)
    }
  }

  handleInputChange(event) {
    const target = event.target
    const inputName = target.name
    const inputValue = target.value

    this.setState({
      [inputName]: inputValue
    })
  }

  handleSubmit(event) {
    event.preventDefault()

    const loginRequest = Object.assign({}, this.state)

    login(loginRequest)
      .then(response => {
        localStorage.setItem(ACCESS_TOKEN, response.accessToken)
        alert.success("You're successfully logged in!")
        this.props.history.push('/')
      })
      .catch(error => {
        alert(
          (error && error.message) ||
            'Oops! Something went wrong. Please try again!'
        )
      })
  }

  render() {
    if (this.props.authenticated) {
      return (
        <Redirect
          to={{
            pathname: '/',
            state: { from: this.props.location }
          }}
        />
      )
    }
    return (
      <PrimaryLayout>
        <LeftAlign></LeftAlign>
        <RightAlign>
          <h1>Log in to Exchange</h1>
          <div className={styles.socialForm}>
            <a href={FACEBOOK_AUTH_URL}>
              <Button
                icon={<i className="fa fa-facebook"></i>}
                btn_style="icon"
              />
            </a>
            <a href={GITHUB_AUTH_URL}>
              <Button
                icon={<i className="fa fa-github"></i>}
                btn_style="icon"
              />
            </a>
            <a href={GOOGLE_AUTH_URL}>
              <Button
                icon={<i className="fa fa-google"></i>}
                btn_style="icon"
              />
            </a>
          </div>
          <h5>Or Use Your Email Address</h5>

          <form onSubmit={this.handleSubmit}>
            <div className={styles.form}>
              <TextInput
                text="Email"
                name="email"
                size="large"
                type="email"
                required="required"
                onChange={this.handleInputChange}
                value={this.state.email}
              />
              <TextInput
                text="Password"
                name="password"
                type="password"
                size="large"
                required="required"
                onChange={this.handleInputChange}
                value={this.state.password}
              />
            </div>

            <div className={styles.btnMain}>
              <Button text="Log In" btn_style="large" type="submit" />
            </div>
          </form>
          <h6>
            New to exchange? <Link to="/signup">Sign Up</Link>
          </h6>
        </RightAlign>
      </PrimaryLayout>
    )
  }
}

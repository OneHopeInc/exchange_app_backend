import React, { Component } from 'react'
import './App.scss'
import Router from './router'

import { getCurrentUser } from '../../utils/APIutils'
import { ACCESS_TOKEN } from '../../utils/constants'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      authenticated: false,
      currentUser: null,
      loading: false
    }

    this.loadCurrentlyLoggedInUser = this.loadCurrentlyLoggedInUser.bind(this)
    this.handleLogout = this.handleLogout.bind(this)
  }

  loadCurrentlyLoggedInUser() {
    this.setState({
      loading: true
    })

    getCurrentUser()
      .then(response => {
        console.log(response)
        this.setState({
          currentUser: response,
          authenticated: true,
          loading: false
        })
      })
      .catch(error => {
        this.setState({
          loading: false
        })
      })
  }

  handleLogout() {
    localStorage.removeItem(ACCESS_TOKEN)
    this.setState({
      authenticated: false,
      currentUser: null
    })
    alert("You're safely logged out!")
  }

  componentDidMount() {
    this.loadCurrentlyLoggedInUser()
  }

  render() {
    return (
      <div className="App">
        <Router />
      </div>
    )
  }
}

export default App

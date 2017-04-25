import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import HomePage from '../pages/home/HomePage'
import RevokeTokenPage from '../pages/revoke-token/RevokeTokenPage'
import SettingsPage from '../pages/settings/SettingsPage'

import './App.css'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/revoke-token">Revoke Token</Link></li>
            <li><Link to="/settings">Settings</Link></li>
          </ul>
          <hr />
          <Route exact path="/" component={HomePage} />
          <Route path="/revoke-token" component={RevokeTokenPage} />
          <Route path="/settings" component={SettingsPage} />
        </div>
      </Router>
    )
  }
}

export default App

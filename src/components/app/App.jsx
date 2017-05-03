import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import { Home, RevokeToken, Settings } from '../Views'
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
          <Route exact path="/" component={Home} />
          <Route path="/revoke-token" component={RevokeToken} />
          <Route path="/settings" component={Settings} />
        </div>
      </Router>
    )
  }
}

export default App

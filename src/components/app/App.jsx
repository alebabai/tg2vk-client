import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()

import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';

import { Home, RevokeToken, Settings } from '../Views'
import './App.css'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
            <AppBar
              title="TG2VK"
              iconClassNameRight="muidocs-icon-navigation-expand-more"
            />
          </MuiThemeProvider>
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

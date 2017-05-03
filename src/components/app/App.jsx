import React, { Component } from 'react'

import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'

import createHistory from 'history/createBrowserHistory'
import { Route } from 'react-router'

import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux'

import Header from '../Header'
import { Home, RevokeToken, Settings } from '../Views'
import './App.css'

const history = createHistory()

const middleware = routerMiddleware(history)

const store = createStore(
  combineReducers({
    router: routerReducer
  }),
  applyMiddleware(middleware)
)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <div>
            <Header />
            <Route exact path="/" component={Home} />
            <Route path="/revoke-token" component={RevokeToken} />
            <Route path="/settings" component={Settings} />
          </div>
        </ConnectedRouter>
      </Provider>
    )
  }
}

export default App

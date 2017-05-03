import React from 'react'
import ReactDOM from 'react-dom'

import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { createLogger } from 'redux-logger'

import createHistory from 'history/createBrowserHistory'
import { Route } from 'react-router'

import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux'

import App from './components/App'
import { Home, RevokeToken, Settings } from './components/Views'

import './index.css';

const history = createHistory()

const logger = createLogger()
const reduxRouterMiddleware = routerMiddleware(history)

const store = createStore(
  combineReducers({
    router: routerReducer
  }),
  applyMiddleware(logger, reduxRouterMiddleware)
)

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App>
        <Route exact path="/" component={Home} />
        <Route path="/revoke-token" component={RevokeToken} />
        <Route path="/settings" component={Settings} />
      </App>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);

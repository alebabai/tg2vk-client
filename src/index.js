import React from 'react'
import ReactDOM from 'react-dom'

import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { createLogger } from 'redux-logger'

import createHistory from 'history/createBrowserHistory'
import { Route, Switch } from 'react-router'

import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux'

import App from './components/App'
import { SignIn, RevokeToken, ErrorBox } from './containers'
import * as reducers from './reducers'
import { auth } from './middlewares'
import { ROUTES } from './constants'

const history = createHistory()

const logger = createLogger()
const reduxRouterMiddleware = routerMiddleware(history)

const store = createStore(
  combineReducers({
    ...reducers,
    router: routerReducer
  }),
  applyMiddleware(logger, reduxRouterMiddleware, auth.protectedRoutesMiddleware, auth.tokenStorageMiddleware)
)

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App>
        <Switch>
          <Route path={ROUTES.REVOKE_TOKEN} component={RevokeToken} />
          <Route path={ROUTES.SING_IN} component={SignIn} />
          <Route component={ErrorBox} />
        </Switch>
      </App>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)

import React from 'react'
import ReactDOM from 'react-dom'

import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { createLogger } from 'redux-logger'

import createHistory from 'history/createBrowserHistory'
import { Route, Switch } from 'react-router'

import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux'

import App from './components/App'
// import { Home, Settings } from './components/Views'
import { SignIn, RevokeToken, ErrorBox } from './containers'
import * as reducers from './reducers'
import { auth } from './middlewares'
import { OTHER } from './constants'

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
          {/*<Route path={OTHER.ROUTES.ROOT}  component={Home} />
          <Route path={OTHER.ROUTES.SETTINGS}  component={Settings} />*/}
          <Route path={OTHER.ROUTES.REVOKE_TOKEN} component={RevokeToken} />
          <Route path={OTHER.ROUTES.SING_IN} component={SignIn} />
          <Route component={ErrorBox} />
        </Switch>
      </App>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)

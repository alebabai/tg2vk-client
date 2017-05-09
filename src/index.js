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
import { ErrorMessage } from './components/Views'
import { SignIn, RevokeToken } from './containers'
import reducers from './reducers'
import { tokenStorageMiddleware } from './middlewares'

const history = createHistory()

const logger = createLogger()
const reduxRouterMiddleware = routerMiddleware(history)

const store = createStore(
  combineReducers({
    app: reducers,
    router: routerReducer
  }),
  applyMiddleware(tokenStorageMiddleware, logger, reduxRouterMiddleware)
)

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App>
        <Switch>
          {/*<Route path="/" component={Home} />
          <Route path="/settings" component={Settings} />*/}
          <Route path="/revoke-token" component={RevokeToken} />
          <Route path="/sign-in" component={SignIn} />
          <Route component={ErrorMessage({ title: 'Error', message: 'Page not found' })} />
        </Switch>
      </App>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)

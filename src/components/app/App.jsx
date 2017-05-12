import React from 'react'
import PropTypes from 'prop-types'

import { Header, Confirmation, Notification, Spinner } from '../../containers'
import './App.css'

export class App extends React.Component {

  static propTypes = {
    children: PropTypes.object
  }

  static defaultProps = {
    children: []
  }

  render() {
    return (
      <div className='app'>
        <Header />
        {this.props.children}
        <Spinner />
        <Confirmation />
        <Notification />
      </div>
    )
  }
}

export default App

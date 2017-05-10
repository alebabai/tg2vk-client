import React from 'react'

import { Header, Confirmation, Notification, Spinner } from '../../containers'

const App = (props) => (
  <div className='app'>
    <Header />
    {props.children}
    <Spinner />
    <Confirmation />
    <Notification />
  </div>
)

export default App

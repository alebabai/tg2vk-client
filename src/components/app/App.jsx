import React from 'react'

import { Header, Confirmation, Notification } from '../../containers'

const App = (props) => (
  <div className='app'>
    <Header />
    {props.children}
    <Confirmation />
    <Notification />
  </div>
)

export default App

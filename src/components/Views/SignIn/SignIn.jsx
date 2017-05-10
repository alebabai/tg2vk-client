import React from 'react'
import ErrorMessage from '../ErrorMessage'

export const SignIn = (props) => (
    props.implicitFlow 
    ? <div className='empty'/> 
    : ErrorMessage({title: 'Sorry...', message: 'Not supported'})()
)

export default SignIn

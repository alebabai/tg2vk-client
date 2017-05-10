import React from 'react'
import ErrorBox from '../ErrorBox'

export const SignIn = props => (
    props.implicitFlow 
    ? <div className='empty'/> 
    : ErrorBox({title: 'Sorry...', message: 'Not supported yet'})
)

export default SignIn

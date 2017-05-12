import React from 'react'
import { bool } from 'prop-types'
import ErrorBox from '../ErrorBox'

export const SignIn = props => (
    props.implicitFlow 
    ? <div className='empty'/> 
    : ErrorBox({title: 'Sorry...', message: 'Not supported yet'})
)

SignIn.propTypes = {
    implicitFlow: bool
}

SignIn.defaultProps = {
    implicitFlow: false
}

export default SignIn

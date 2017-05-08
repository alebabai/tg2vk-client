import React from 'react'
import Spinner from '../../Spinner'

const SignIn = (props) => (
    props.implicitFlow
     ? <Spinner /> 
     : <div className='container-fluid'><h1>NOT AVAILABLE NOW</h1></div>
)

export default SignIn

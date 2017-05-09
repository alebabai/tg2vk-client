import React from 'react'
import { Well } from 'react-bootstrap'
import Spinner from '../../Spinner'

const SignIn = (props) => (
    props.implicitFlow
        ? <Spinner />
        : <div className='container'><Well bsSize="large"><h3>NOT AVAILABLE NOW</h3></Well></div>
)

export default SignIn

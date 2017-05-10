import React from 'react'
import { Jumbotron } from 'react-bootstrap'

export const ErrorBox = props => (
    <div className='container'>
        <Jumbotron>
            <h1>{props.title}</h1>
            <p>{props.message}</p>
        </Jumbotron>
    </div>
)

export default ErrorBox

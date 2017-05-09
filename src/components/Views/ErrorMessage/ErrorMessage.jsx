import React from 'react'
import { Jumbotron } from 'react-bootstrap'

const ErrorMessage = (props = { title: 'Error', message: "Unknown error" }) => () => (
    <div className='container'>
        <Jumbotron>
            <h1>{props.title}</h1>
            <p>{props.message}</p>
        </Jumbotron>
    </div>
)

export default ErrorMessage

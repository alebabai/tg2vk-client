import React from 'react'
import { string } from 'prop-types'
import { Jumbotron } from 'react-bootstrap'

export const ErrorBox = props => (
    <div className='container'>
        <Jumbotron>
            <h1>{props.title}</h1>
            <p>{props.message}</p>
        </Jumbotron>
    </div>
)

ErrorBox.propTypes = {
    title: string,
    message: string
}

ErrorBox.defaultProps = {
    title: 'Error',
    message: 'Unknown error happened...'
}

export default ErrorBox

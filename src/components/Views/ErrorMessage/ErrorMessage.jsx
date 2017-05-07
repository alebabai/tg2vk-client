import React from 'react'

const ErrorMessage = (props = { message: "Unknown error" }) => () => (
    <div>
        <h2>{props.message}</h2>
    </div>
)

export default ErrorMessage

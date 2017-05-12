import React from 'react'
import { string, bool, func, shape } from 'prop-types'
import { Modal, Button } from 'react-bootstrap'

import { confirmation } from '../../actions'

export const Confirmation = (props) => {
    const closeHandler = props.getActionDispatcher(props.buttons.close.action)
    const confirmHandler = () => {
        props.getActionDispatcher(props.buttons.confirm.action)()
        closeHandler()
    }
    return (
        <Modal show={props.visible} onHide={closeHandler}>
            <Modal.Header closeButton>
                <Modal.Title>{props.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>{props.question}</h4>
                <p>{props.message}</p>
            </Modal.Body>
            <Modal.Footer>
                <Button bsStyle='primary' onClick={confirmHandler}>{props.buttons.confirm.text}</Button>
                <Button onClick={closeHandler}>{props.buttons.close.text}</Button>
            </Modal.Footer>
        </Modal>
    )
}

Confirmation.propTypes = {
    visible: bool.isRequired,
    getActionDispatcher: func.isRequired,
    title: string,
    question: string,
    message: string,
    buttons: shape({
        confirm: shape({
            text: string,
            action: shape({
                type: string.isRequired
            })
        }),
        close: shape({
            text: string,
            action: shape({
                type: string.isRequired
            }).isRequired
        }).isRequired
    }).isRequired
}

Confirmation.defaultProps = {
    visible: false,
    buttons: {
        confirm: {
            text: 'OK'
        },
        close: {
            text: 'Cancel',
            action: confirmation.hide()
        }
    }
}

export default Confirmation

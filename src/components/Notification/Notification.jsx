import React from 'react'
import { string, bool, func, shape } from 'prop-types'
import { Modal, Button } from 'react-bootstrap'

import { notification } from '../../actions'

const Notification = (props) => {
    const closeHandler = props.getActionDispatcher(props.buttons.close.action)
    return (
        <Modal show={props.visible} onHide={closeHandler}>
            <Modal.Header closeButton>
                <Modal.Title>{props.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>{props.header}</h4>
                <p>{props.text}</p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={closeHandler}>{props.buttons.close.text}</Button>
            </Modal.Footer>
        </Modal>
    )
}

Notification.propTypes = {
    visible: bool.isRequired,
    getActionDispatcher: func.isRequired,
    title: string,
    header: string,
    message: string,
    buttons: shape({
        close: shape({
            text: string,
            action: shape({
                type: string.isRequired
            }).isRequired
        }).isRequired
    }).isRequired
}

Notification.defaultProps = {
    visible: false,
    buttons: {
        close: {
            text: 'Close',
            action: notification.hide()
        }
    }
}

export default Notification

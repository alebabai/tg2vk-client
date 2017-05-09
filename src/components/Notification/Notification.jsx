import React from 'react'
import { Modal, Button } from 'react-bootstrap'

const Notification = (props) => (
    <Modal show={props.visible} onHide={props.buttons.close.handler}>
        <Modal.Header closeButton>
            <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <h4>{props.header}</h4>
            <p>{props.text}</p>
        </Modal.Body>
        <Modal.Footer>
            <Button onClick={props.buttons.close.handler}>{props.buttons.close.text || 'Close'}</Button>
        </Modal.Footer>
    </Modal>
)

export default Notification

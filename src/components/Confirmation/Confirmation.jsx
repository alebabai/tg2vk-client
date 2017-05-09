import React from 'react'
import { Modal, Button } from 'react-bootstrap'

const Confirmation = (props) => (
    <Modal show={props.visible} onHide={props.buttons.close.handler}>
        <Modal.Header closeButton>
            <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <h4>{props.question}</h4>
            <p>{props.message}</p>
        </Modal.Body>
        <Modal.Footer>
            <Button onClick={props.buttons.close.handler}>{props.buttons.close.text || 'Cancel'}</Button>
            <Button bsStyle='primary' onClick={props.buttons.confirm.handler}>{props.buttons.confirm.text || 'OK'}</Button>
        </Modal.Footer>
    </Modal>
)

export default Confirmation

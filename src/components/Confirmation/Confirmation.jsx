import React from 'react'
import { Modal, Button } from 'react-bootstrap'

const Confirmation = (props) => {
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
                <Button bsStyle='primary' onClick={confirmHandler}>{props.buttons.confirm.text || 'OK'}</Button>
                <Button onClick={closeHandler}>{props.buttons.close.text || 'Cancel'}</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default Confirmation

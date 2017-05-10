import React from 'react'
import { Modal, ProgressBar } from 'react-bootstrap'

export const Spinner = (props) => (
    <Modal show={props.visible}>
        <Modal.Header>
            <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <ProgressBar active now={100} />
        </Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
    </Modal>
)

export default Spinner

import React from 'react'
import { Modal, ProgressBar } from 'react-bootstrap'

export const Spinner = props => (
    <Modal show={props.visible}>
        <Modal.Header>
            <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <ProgressBar active now={props.progress} />
        </Modal.Body>
    </Modal>
)

export default Spinner

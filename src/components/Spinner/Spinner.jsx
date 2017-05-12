import React from 'react'
import { string, bool, number } from 'prop-types'
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

Spinner.propTypes = {
    visible: bool.isRequired,
    title: string,
    progress: number
}

Spinner.defaultProps = {
    visible: false,
    title: 'Loading...',
    progress: 100
}

export default Spinner

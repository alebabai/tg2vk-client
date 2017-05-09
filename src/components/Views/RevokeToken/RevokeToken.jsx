import React, { Component } from 'react'
import { Panel, FormGroup, FormControl, HelpBlock, Button, ButtonToolbar, Modal } from 'react-bootstrap'

class RevokeToken extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: '',
            showModal: false,
            result: {
                showModal: props.showModal
            }
        }
    }

    showDialog = () => {
        const code = this.state.code
        code && this.setState({ showModal: true })
    }

    closeDialog = () => {
        this.setState({ showModal: false })
    }

    closeResultDialog = () => {
        this.setState({
            result: {
                showModal: false
            }
        });
    }

    getValidationState = () => {
        const url = this.state.value
        if (url.length > 0 && !url.includes('#code=')) return 'error'
    }

    handleChange = (e) => {
        const value = e.target.value
        const result = /#code?=(.+)/.exec(value)
        const code = result && result[1]
        this.setState({ value, code })
    }

    sendToken = () => {
        const code = this.state.code
        code && this.props.revokeToken(this.state.code)
        this.closeDialog()
    }

    render() {
        return (
            <div className='container'>
                <Panel header={<h1>Revoke Token</h1>}>
                    <form>
                        <FormGroup
                            validationState={this.getValidationState()}>
                            <FormControl
                                type='text'
                                value={this.state.value}
                                placeholder='Enter url'
                                onChange={this.handleChange}
                            />
                            <FormControl.Feedback />
                            <HelpBlock>Please, provide full url from <a href='https://oauth.vk.com/'>https://oauth.vk.com/</a></HelpBlock>
                            <ButtonToolbar>
                                <Button onClick={this.showDialog} bsSize='large' block>Send code</Button>
                            </ButtonToolbar>
                        </FormGroup>
                    </form>
                </Panel>
                <Modal show={this.state.showModal} onHide={this.closeDialog}>
                    <Modal.Header closeButton>
                        <Modal.Title>Warning!</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <h4>Are you sure?</h4>
                        <p>It will reset all your TG2VK setting.</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.sendToken}>OK</Button>
                        <Button onClick={this.closeDialog}>Cancel</Button>
                    </Modal.Footer>
                </Modal>
                <Modal show={this.state.result.showModal} onHide={this.closeResultDialog}>
                    <Modal.Header closeButton>
                        <Modal.Title>{this.props.title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>{this.props.message}</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.closeResultDialog}>OK</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}

export default RevokeToken

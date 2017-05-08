import React, { Component } from 'react'
import { Panel, FormGroup, FormControl, HelpBlock, Button, ButtonToolbar } from 'react-bootstrap'

class RevokeToken extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: ''
        }
    }

    getValidationState = () => {
        const url = this.state.value
        if (url.length > 0 && !url.includes('#code=')) return 'error'
    }

    handleChange = (e) => {
        const value = e.target.value
        const result = /#code?=(.*)/.exec(value)
        const code = result && result[1]
        this.setState({ value, code })
    }

    sendToken = () => {
        const code = this.state.code
        code && this.props.revokeToken(this.state.code)
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
                                <Button onClick={this.sendToken} bsSize='large' block>Send token</Button>
                            </ButtonToolbar>
                        </FormGroup>
                    </form>
                </Panel>
            </div>
        )
    }
}

export default RevokeToken

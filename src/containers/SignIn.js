import React, { Component } from 'react'
import { connect } from 'react-redux'
import { userActions } from '../actions'
import { SignIn } from '../components/Views'

const mapDispatchToProps = (dispatch, ownProps) => {
    const token = ownProps.location.hash.substr(1);
    return {
        implicitFlow: !!token,
        triggerSingInFlow: (tokenParam = token) => {
            if(!!tokenParam) {
                dispatch(userActions.signIn(tokenParam))
            }
        }
    }
}

class SingInContainer extends Component {

    componentDidMount() {
        if (this.props.implicitFlow) {
            this.props.triggerSingInFlow()
        }
    }

    render() {
        return <SignIn props={this.props} />
    }
}

export default connect(
    null,
    mapDispatchToProps
)(SingInContainer)
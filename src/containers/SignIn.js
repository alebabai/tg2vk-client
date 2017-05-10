import React, { Component } from 'react'
import { connect } from 'react-redux'
import { user } from '../actions'
import { SignIn } from '../components/Views'
import queryString from 'query-string'

const mapDispatchToProps = (dispatch, ownProps) => {
    const query = queryString.parse(ownProps.location.search)
    return {
        implicitFlow: !!query.token,
        triggerSingInFlow: (payload = query) => {
            if(!!payload.token) {
                dispatch(user.signIn(payload))
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
        return <SignIn {...this.props} />
    }
}

export default connect(
    null,
    mapDispatchToProps
)(SingInContainer)
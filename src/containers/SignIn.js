import React, { Component } from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import { userActions } from '../actions'
import { SignIn } from '../components/Views'
import queryString from 'query-string'

const mapDispatchToProps = (dispatch, ownProps) => {
    const query = queryString.parse(ownProps.location.search)
    return {
        implicitFlow: !!query.token,
        triggerSingInFlow: (options = query) => {
            if(!!options.token) {
                dispatch(userActions.signIn(options.token))
                setTimeout(() => dispatch(push(options.redirect || '/')), 1000)
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
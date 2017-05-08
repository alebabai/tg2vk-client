import { connect } from 'react-redux'
import { userActions } from '../actions'
import { RevokeToken } from '../components/Views'

const mapDispatchToProps = (dispatch) => {
    return {
        revokeToken: (code) => {
            dispatch(userActions.revokeToken(code))
        }
    }
}

export default connect(
    null,
    mapDispatchToProps
)(RevokeToken)
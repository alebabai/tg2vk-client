import { connect } from 'react-redux'
import { user } from '../actions'
import { RevokeToken } from '../components/Views'

const mapDispatchToProps = (dispatch) => {
    return {
        revokeToken: (code) => {
            dispatch(user.revokeToken(code))
        }
    }
}

export default connect(
    null,
    mapDispatchToProps
)(RevokeToken)
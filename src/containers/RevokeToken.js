import { connect } from 'react-redux'
import { user, confirmation } from '../actions'
import { RevokeToken } from '../components/Views'

const mapDispatchToProps = (dispatch) => {
    return {
        revokeTokenWithConfirm: (code) => {
            dispatch(confirmation.show({
                title: 'Warning!',
                question: 'Are you sure?',
                message: 'It will reset all your TG2VK setting!',
                buttons: {
                    confirm: {
                        text: 'OK',
                        action: user.revokeToken({code})
                    },
                    close: {
                        text: 'Cancel',
                        action: confirmation.hide()
                    }
                }
            }))
        }
    }
}

export default connect(
    null,
    mapDispatchToProps
)(RevokeToken)
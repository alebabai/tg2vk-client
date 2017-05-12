import { connect } from 'react-redux'
import { user, confirmation } from '../actions'
import { RevokeToken } from '../components/Views'

const mapDispatchToProps = dispatch => ({
    revokeTokenWithConfirm: code => {
        dispatch(confirmation.show({
            title: 'Warning!',
            question: 'Are you sure?',
            message: 'It will reset all your TG2VK setting!',
            buttons: {
                confirm: {
                    title: 'OK',
                    action: user.revokeToken({ code })
                },
                close: {
                    title: 'Cancel',
                    action: confirmation.hide()
                }
            }
        }))
    }
})

export default connect(
    null,
    mapDispatchToProps
)(RevokeToken)
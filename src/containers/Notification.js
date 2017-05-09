import { connect } from 'react-redux'
import { notification } from '../actions'
import Notification from '../components/Notification'

const mapStateToProps = (state) => {
    return {
        buttons: {
            close: {
                text: 'Close',
                action: notification.hide()
            }
        },
        ...state.notification
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getActionDispatcher: (action) => () => dispatch(action)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Notification)
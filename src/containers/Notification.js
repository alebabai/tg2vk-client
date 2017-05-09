import { connect } from 'react-redux'
import { notification } from '../actions'
import Notification from '../components/Notification'

const mapStateToProps = (state) => {
    return { ...state.notification }
}

const mapDispatchToProps = (dispatch) => {
    return {}
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Notification)
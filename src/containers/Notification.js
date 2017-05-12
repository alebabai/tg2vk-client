import { connect } from 'react-redux'
import Notification from '../components/Notification'

const mapStateToProps = state => ({
    ...state.notification
})

const mapDispatchToProps = (dispatch) => ({
    getActionDispatcher: (action) => () => dispatch(action)
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Notification)
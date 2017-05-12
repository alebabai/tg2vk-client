import { connect } from 'react-redux'
import Notification from '../components/Notification'

const mapStateToProps = state => ({
    ...state.confirmation
})

const mapDispatchToProps = (dispatch) => ({
    getActionDispatcher: (action) => () => dispatch(action)
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Notification)
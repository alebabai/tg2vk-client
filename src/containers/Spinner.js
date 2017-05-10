import { connect } from 'react-redux'
import { notification } from '../actions'
import Spinner from '../components/Spinner'

const mapStateToProps = (state) => ({
    ...state.notification
})

export default connect(
    mapStateToProps,
    null
)(Spinner)
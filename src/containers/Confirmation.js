import { connect } from 'react-redux'
import Confirmation from '../components/Confirmation'

const mapStateToProps = state => ({
    ...state.confirmation
})

const mapDispatchToProps = (dispatch) => ({
    getActionDispatcher: action => () => dispatch(action)
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Confirmation)
import { connect } from 'react-redux'
import { confirmation } from '../actions'
import Confirmation from '../components/Confirmation'


const mapStateToProps = (state) => {
    return { ...state.confirmation }
}

const mapDispatchToProps = (dispatch) => {
    return {}
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Confirmation)
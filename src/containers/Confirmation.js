import { connect } from 'react-redux'
import { confirmation } from '../actions'
import Confirmation from '../components/Confirmation'


const mapStateToProps = (state) => {
    return {
        buttons: {
            confirm: {
                text: 'OK',
            },
            close: {
                text: 'Cancel',
                action: confirmation.hide()
            }
        },
        ...state.confirmation
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
)(Confirmation)
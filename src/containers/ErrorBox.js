import { connect } from 'react-redux'
import ErrorBox from '../components/Views/ErrorBox'

const mapStateToProps = (state) => {
    return {
        ...state.error
    }
}

export default connect(
    mapStateToProps,
    null
)(ErrorBox)

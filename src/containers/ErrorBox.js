import { connect } from 'react-redux'
import ErrorBox from '../components/Views/ErrorBox'

const mapStateToProps = (state) => ({
    ...state.error
})

export default connect(
    mapStateToProps,
    null
)(ErrorBox)

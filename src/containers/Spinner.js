import { connect } from 'react-redux'
import Spinner from '../components/Spinner'

const mapStateToProps = (state) => ({
    ...state.spinner
})

export default connect(
    mapStateToProps,
    null
)(Spinner)
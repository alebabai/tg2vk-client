import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import Header from '../components/Header'

const mapDispatchToProps = (dispatch) => ({
    changeView: (path) => {
        dispatch(push(path))
    }
})

export default connect(
    null,
    mapDispatchToProps
)(Header)

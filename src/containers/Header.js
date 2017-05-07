import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import Header from '../components/Header'

const mapStateToProps = (state) => ({
    userData: state.user
})

const mapDispatchToProps = (dispatch) => ({
    changeView: (path) => {
        dispatch(push(path))
    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header)
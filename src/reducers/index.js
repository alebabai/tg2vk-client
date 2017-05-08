import { combineReducers } from 'redux'
import { singIn } from './user'

export default combineReducers({
    user: singIn
})
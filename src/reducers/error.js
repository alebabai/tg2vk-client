import { ACTION_TYPES } from '../constants'

const defaultState = {
    title: 'Error',
    message: 'Page not found'
}

export const error = (state = defaultState, action) => {
    switch (action.type) {
        case ACTION_TYPES.ERROR.THROW_UP:
            return {
                ...defaultState, ...action.payload
            }
        default:
            return state
    }
}

export default error

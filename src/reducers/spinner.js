import { ACTION_TYPES } from '../constants'

const defaultState = {
    visible: false,
    progress: 0
}

export const spinner = (state = defaultState, action) => {
    switch (action.type) {
        case ACTION_TYPES.SPINNER.SHOW:
            return {
                ...defaultState, ...action.payload, visible: true, progress: 100
            }
        case ACTION_TYPES.SPINNER.HIDE:
            return defaultState
        default:
            return state

    }
}

export default spinner

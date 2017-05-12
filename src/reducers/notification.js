import { ACTION_TYPES } from '../constants'

const defaultState = {
    visible: false
}

export const notification = (state = defaultState, action) => {
    switch (action.type) {
        case ACTION_TYPES.NOTIFICATION.SHOW:
            return {
                ...defaultState, ...action.payload, visible: true
            }
        case ACTION_TYPES.NOTIFICATION.HIDE:
            return defaultState
        default:
            return state

    }
}

export default notification

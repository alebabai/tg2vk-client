import { ACTION_TYPES } from '../constants'

const defaultState = {
    visible: false,
    buttons: {
        confirm: {},
        close: {}
    }
}

const confirmation = (state = defaultState, action) => {
    switch (action.type) {
        case ACTION_TYPES.CONFIRMATION.SHOW:
            return {
                ...defaultState, ...action.payload, visible: true
            }
        case ACTION_TYPES.CONFIRMATION.HIDE:
            return defaultState
        default:
            return state
    }
}

export default confirmation

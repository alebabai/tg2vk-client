import { ACTION_TYPES } from '../constants'

export const hide = () => {
    return {
        type: ACTION_TYPES.CONFIRMATION.HIDE
    }
}

export const show = payload => {
    return {
        type: ACTION_TYPES.CONFIRMATION.SHOW,
        payload
    }
}

export default {
    hide,
    show
}

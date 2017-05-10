import { ACTION_TYPES } from '../constants'

export const hide = () => {
    return {
        type: ACTION_TYPES.NOTIFICATION.HIDE
    }
}

export const show = payload => {
    return {
        type: ACTION_TYPES.NOTIFICATION.SHOW,
        payload
    }
}

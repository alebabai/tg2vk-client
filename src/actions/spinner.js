import { ACTION_TYPES } from '../constants'

export const hide = () => {
    return {
        type: ACTION_TYPES.SPINNER.HIDE
    }
}

export const show = payload => {
    return {
        type: ACTION_TYPES.SPINNER.SHOW,
        payload
    }
}

export default {
    hide,
    show
}

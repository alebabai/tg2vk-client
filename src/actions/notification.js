import { ACTION_TYPES } from '../constants'

export const hide = () => ({
    type: ACTION_TYPES.NOTIFICATION.HIDE
})

export const show = payload => ({
    type: ACTION_TYPES.NOTIFICATION.SHOW,
    payload
})

export default {
    hide,
    show
}

import { ACTION_TYPES } from '../constants'

export const hide = () => ({
    type: ACTION_TYPES.CONFIRMATION.HIDE
})

export const show = payload => ({
    type: ACTION_TYPES.CONFIRMATION.SHOW,
    payload
})

export default {
    hide,
    show
}

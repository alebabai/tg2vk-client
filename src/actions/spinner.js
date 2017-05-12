import { ACTION_TYPES } from '../constants'

export const hide = () => ({
    type: ACTION_TYPES.SPINNER.HIDE
})

export const show = payload => ({
    type: ACTION_TYPES.SPINNER.SHOW,
    payload
})

export default {
    hide,
    show
}

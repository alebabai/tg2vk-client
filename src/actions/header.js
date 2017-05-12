import { ACTION_TYPES } from '../constants'

export const change = payload => ({
    type: ACTION_TYPES.HEADER.CHANGE,
    payload
})

export default {
    change
}

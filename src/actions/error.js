import { ACTION_TYPES } from '../constants'

export const throwUp = payload => {
    return {
        type: ACTION_TYPES.ERROR.THROW_UP,
        payload
    }
}

export default {
    throwUp
}

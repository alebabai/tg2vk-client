import { ACTION_TYPES, OTHER } from '../constants'

const token = sessionStorage.getItem(OTHER.KEYS.TOKEN)
const defaultState = {
    token
}

export const user = (state = defaultState, action) => {
    switch (action.type) {
        case ACTION_TYPES.USER.SIGN_IN:
            return { ...state, ...action.payload }
        default:
            return state;
    }
}

export default user


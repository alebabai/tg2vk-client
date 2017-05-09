import { ACTION_TYPES, OTHER } from '../constants'

export const tokenStorageMiddleware = store => next => action => {
    switch (action.type) {
        case ACTION_TYPES.USER.SIGN_IN:
            sessionStorage.setItem(OTHER.SESSION_STORAGE.TOKEN_KEY, action.payload.token)
            break;
        default:
            break;
    }
    return next(action)
}

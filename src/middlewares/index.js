import { push } from 'react-router-redux'
import { ACTION_TYPES, OTHER } from '../constants'
import { spinner } from '../actions'

export const tokenStorageMiddleware = store => next => action => {
    switch (action.type) {
        case ACTION_TYPES.USER.SIGN_IN:
            store.dispatch(spinner.show({ visible: true, title: 'Processing authorization...', progress: 100 }))
            sessionStorage.setItem(OTHER.SESSION_STORAGE.TOKEN_KEY, action.payload.token)
            setTimeout(() => {
                store.dispatch(push(action.payload.redirect || '/'))
                store.dispatch(spinner.hide())
            }, 1000)
            break;
        default:
            break;
    }
    return next(action)
}

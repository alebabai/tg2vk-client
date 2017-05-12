import { push } from 'react-router-redux'
import { ACTION_TYPES, OTHER, ROUTES } from '../constants'
import { spinner, notification, error } from '../actions'
import { USER } from '../api'

export const protectedRoutesMiddleware = store => next => action => {
    const { token } = store.getState().user
    const allRoutes = Object.values(ROUTES.PATHS)
    const allowedRoutes = ROUTES.ALLOWED_ROUTES
    switch (action.type) {
        case '@@router/LOCATION_CHANGE':
            const { pathname } = action.payload
            if (!token && allRoutes.includes(pathname) && !allowedRoutes.includes(pathname)) {
                store.dispatch(error.throwUp({
                    title: 'Access denied', message: 'NOT AUTHORIZED'
                }))
                store.dispatch(push(ROUTES.PATHS.ERROR))
            }
            break
        default:
            break
    }
    return next(action)
}

export const tokenStorageMiddleware = store => next => action => {
    switch (action.type) {
        case ACTION_TYPES.USER.SIGN_IN:
            store.dispatch(spinner.show({ visible: true, title: 'Processing authorization...', progress: 100 }))
            sessionStorage.setItem(OTHER.KEYS.TOKEN, action.payload.token)
            setTimeout(() => {
                store.dispatch(push(action.payload.redirect || '/'))
                store.dispatch(spinner.hide())
            }, 1000)
            break
        default:
            break
    }
    return next(action)
}

export const revokeToken = store => next => action => {
    switch (action.type) {
        case ACTION_TYPES.USER.REVOKE_TOKEN:
            const { code } = action.payload
            const { token } = store.getState().user
            store.dispatch(spinner.show({ visible: true, title: 'Sending data...', progress: 100 }))
            USER.authorize(code, token).then(res => {
                store.dispatch(spinner.hide())
                store.dispatch(notification.show({
                    title: 'Success!',
                    header: 'VK token has been successfully revoked.'
                }))
            }).catch(e => {
                store.dispatch(spinner.hide())
                store.dispatch(notification.show({
                    title: 'Error...',
                    header: 'Something goes wrong',
                    text: e.message
                }))
            })
            break
        default:
            break
    }
    return next(action)
}

export default {
    protectedRoutesMiddleware,
    tokenStorageMiddleware,
    revokeToken
}

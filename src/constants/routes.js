export const PATHS = {
    ROOT: '/',
    ERROR: '/error',
    SING_IN: '/sign-in',
    SETTINGS: '/settings',
    REVOKE_TOKEN: '/revoke-token'
}

export const ALLOWED_ROUTES = [PATHS.SING_IN, PATHS.ERROR]

export default {
    PATHS,
    ALLOWED_ROUTES
}
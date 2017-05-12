import { ACTION_TYPES } from '../constants'

const defaultState = {
    title: 'TG2VK',
    links: {
        left: [],
        right: [{
            eventKey: 1,
            href: '/revoke-token',
            title: 'Revoke Token'
        }]
    }
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

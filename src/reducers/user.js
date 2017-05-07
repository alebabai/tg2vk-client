import * as constants from '../constants'

const initialState = {
    signedIn: false,
    token: null
}

export const singIn = (state = initialState, action) => {
    switch (action.type) {
        case constants.SING_IN:
            return {
                ...state, ...action.payload, signedIn: true
            }
        default:
            return initialState
    }
}

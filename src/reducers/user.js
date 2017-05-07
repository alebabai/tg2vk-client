import { USER as userActionTypes} from '../constants/actionTypes'

const initialState = {
    signedIn: false,
    token: null
}

export const singIn = (state = initialState, action) => {
    switch (action.type) {
        case userActionTypes.SING_IN:
            return {
                ...state, ...action.payload, signedIn: true
            }
        default:
            return initialState
    }
}

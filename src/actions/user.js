import { ACTION_TYPES } from '../constants'

export const signIn = payload => ({
   type: ACTION_TYPES.USER.SIGN_IN,
   payload
})

export const revokeToken = payload => ({
   type: ACTION_TYPES.USER.REVOKE_TOKEN,
   payload
})

export default {
    signIn,
    revokeToken
}
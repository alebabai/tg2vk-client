import { ACTION_TYPES } from '../constants'

export const signIn = (token) => ({
   type: ACTION_TYPES.USER.SIGN_IN,
   payload: {
       token
   }
})

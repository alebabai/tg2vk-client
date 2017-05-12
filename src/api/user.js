import API from './config'

export const authorize = (code, token) => (
    API.post('api/users/authorize/code', { code }, {
        headers: {
            'X-TG2VK-TOKEN': token
        }
    })
)

export default {
    authorize
}
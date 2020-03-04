export function loginReduce(state = {}, action: any) {
    switch (action.type) {
        case 'LOGIN_FETCH_DATA_SUCCESS':
            return action.loginUserInfo
        default:
            return state
    }
}
import { userToken } from '../../components/User'

export function loginFetchDataSuccess(loginUserInfo: object) {
    return {
        type: 'LOGIN_FETCH_DATA_SUCCESS',
        loginUserInfo
    }
}

export function loginFetchData(url: string, loginUserData: object) {
    return (dispatch: any) => {
        fetch(url, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': userToken
            },
            body: JSON.stringify(loginUserData),
        })
            .then(response => {
                if (!response.ok) {
                    alert('Error. Status code: ' + response.status)
                }
                return response
            })
            .then(response => {
                response.json()
                return response
            })
            .then(response => {
                let token: any = response.headers.get('x-auth-token')
                localStorage.setItem('userToken', token)
                return response
            })
            .then(loginUserInfo => dispatch(loginFetchDataSuccess(loginUserInfo)))
    }
}
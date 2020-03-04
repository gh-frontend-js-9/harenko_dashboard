import { userToken } from '../../components/User'

export function modalFetchDataSuccess(newProjectInfo: object) {
    return {
        type: 'MODAL_FETCH_DATA_SUCCESS',
        newProjectInfo
    }
}

export function modalFetchData(url: string, newProjectData: object) {
    return (dispatch: any) => {
        fetch(url, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': userToken
            },
            body: JSON.stringify(newProjectData),
        })
            .then(response => {
                if (!response.ok) {
                    alert('Error. Status code: ' + response.status)
                }
                return response
            })
            .then(response => response.json())
            .then(newProjectInfo => dispatch(modalFetchDataSuccess(newProjectInfo)))
    }
}
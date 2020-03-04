import { userToken } from '../../components/User'

/* export let projectsResponse: any */

export function projectsFetchDataSuccess(newProjectInfo: object) {
    return {
        type: 'PROJECTS_FETCH_DATA_SUCCESS',
        newProjectInfo
    }
}

export function projectsFetchData(url: string) {
    return (dispatch: any) => {
        fetch(url, {
            method: 'GET',
            mode: 'cors',
            headers: {
                'x-access-token': userToken
            },
        })
            .then(response => {
                if (!response.ok) {
                    alert('Error. Status code: ' + response.status)
                }
                return response
            })
            .then(response => response.json())
            .then((getAllProjects: any) => dispatch(projectsFetchDataSuccess(getAllProjects)))
    }
}
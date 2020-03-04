export function getAllProjectsReduce(state = [], action: any) {
    switch (action.type) {
        case 'PROJECTS_FETCH_DATA_SUCCESS':
            return action.newProjectInfo
        default:
            return state
    }
}
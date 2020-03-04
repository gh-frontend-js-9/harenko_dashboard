export function modalWindowReduce(state = [], action: any) {
    switch (action.type) {
        case 'MODAL_FETCH_DATA_SUCCESS':
            return action.newProjectInfo
        default:
            return state
    }
}
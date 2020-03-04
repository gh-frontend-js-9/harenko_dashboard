import { combineReducers } from 'redux'
import { loginReduce } from './loginReduce'
import { modalWindowReduce } from './modalWindowReduce'
import { getAllProjectsReduce } from './getAllProjectsReduce'

const rootReducer = combineReducers({
    loginReduce,
    modalWindowReduce,
    getAllProjectsReduce
})

export default rootReducer;
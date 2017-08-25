//BUNDLING
//agrupar cada archivo con reducers

import { combineReducers } from 'redux'
import tareas from './tareas'
import filtroVisibilidad from './filtroVisibilidad'

const tareasApp = combineReducers({
    tareas,
    filtroVisibilidad
})

export default tareasApp;
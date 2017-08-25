// REDUCERS
// funciones que cambian el estado de la aplicacion a traves de acciones

const tareas = (state = [], action) => {
    switch (action.type) {
        case 'AGREGAR_TAREA':
            const nuevoEstado = {
                tareaID: action.tareaID,
                textoTarea: action.textoTarea,
                completada: false
            }
            //concatena lista de estados con nuevo estado
            return [...state, nuevoEstado];

        case 'ALTERNAR_TAREA':
            //buscamos la tarea seleccionada en la lista de tareas
            return state.map(tarea => {
                    
                    if (tarea.tareaID === action.tareaID)
                        //si la tarea seleccionada fue encontrada, 
                        //retornamos la misma tarea con el estado "completada"
                        return {...tarea, completada: !tarea.completada}
                    else 
                        //si no es la misma tarea, la retornamos sin cambiar el estado
                        return tarea;
                }
            );

        default:
            // retorna el mismo estado actual
            return state
    }
}

export default tareas;
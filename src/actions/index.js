// ACTION CREATORS
// definimos acciones que reciben uno más argumentos
// y retornan un nuevo objeto JSON

//contador de tareas, modificado por agregarTarea
let tareaID = 0;

// accion agregarTarea(textoTarea)
export const agregarTarea = textoTarea => {
        return {
            //debemos poner type: para evitar el error:
            //Error: Actions may not have an undefined "type" property. Have you misspelled a constant?
            type: 'AGREGAR_TAREA',
            tareaID: tareaID++,
            textoTarea /*lo mismo q textoTarea: textoTarea*/
        }
    }

// accion cambiarVisibilidadFiltro(filtro)
export const cambiarVisibilidadFiltro = filtro => {
        return {
            type: 'CAMBIAR_VISIBILIDAD_FILTRO',
            filtro /*lo mismo q filtro: filtro*/
        }
    }

// accion alternarTarea(tareaID)
export const alternarTarea = tareaID => {
        return {
            type: 'ALTERNAR_TAREA',
            tareaID /*lo mismo q tareaID: tareaID*/
        }
    }
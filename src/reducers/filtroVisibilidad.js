// REDUCERS
// funciones que cambian el estado de la aplicacion a traves de acciones

const filtroVisibilidad = (state = 'MOSTRAR_TODAS', action) => {
    //debemos usar type para evitar el error
    //Error: Actions may not have an undefined "type" property. Have you misspelled a constant?
    switch (action.type) {
        case 'CAMBIAR_VISIBILIDAD_FILTRO':
            return action.filtro;

        default:
            return state;
    }
};

export default filtroVisibilidad;
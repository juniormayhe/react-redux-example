//PRESENTATION COMPONENTS
import React from 'react'
import PropTypes from 'prop-types'

//definir componente visual react para pagina
const Tarea = ({onClick, textoTarea, completada}) => (
    //del props tarea enviado por ListaTareas, 
    //cogemos solamente textoArea, completada y onClick
    <li style={{ textDecoration: completada ? 'line-through': 'none'}}
        onClick={onClick}>
        {textoTarea}
    </li>
)

// configurar tipos de las propriedades del componente
Tarea.propTypes = {
    onClick: PropTypes.func.isRequired,
    textoTarea: PropTypes.string.isRequired,
    completada: PropTypes.bool.isRequired
}

export default Tarea;
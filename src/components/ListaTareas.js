//PRESENTATION COMPONENTS
import React from 'react'
import PropTypes from 'prop-types'

//importar componente visual hijo Tarea
import Tarea from './Tarea'

//definir componente visual ListaTareas
const ListaTareas = ({ tareas, onClickTarea }) => (
  <ul>
    { 
      //montamos lista de tareas
      tareas.map(tarea => (
          //pasamos el objeto tarea como props
          //con campos tareaID, textoTarea, completada, onClick
          <Tarea key={tarea.tareaID} {...tarea} 
            onClick={() => onClickTarea(tarea.tareaID)} />
      ))
    }
  </ul>
)

ListaTareas.propTypes = {
  tareas: PropTypes.arrayOf(
    PropTypes.shape({
      tareaID: PropTypes.number.isRequired,
      textoTarea: PropTypes.string.isRequired,
      completada: PropTypes.bool.isRequired      
    }).isRequired
  ).isRequired,
  onClickTarea: PropTypes.func.isRequired
}

export default ListaTareas
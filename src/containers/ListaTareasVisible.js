//CONTAINER COMPONENTS
import { connect } from 'react-redux'
import { alternarTarea } from '../actions'

import ListaTareas from '../components/ListaTareas'

const leerTareasVisibles = (tareas, filtro) => {
  switch (filtro) {
    case 'MOSTRAR_TODAS':
      return tareas
    case 'MOSTRAR_COMPLETADAS':
      return tareas.filter(t => t.completada)
    case 'MOSTRAR_ACTIVAS':
      return tareas.filter(t => !t.completada)
    default:
      return tareas;
  }
}

const mapStateToProps = state => {
  return {
    tareas: leerTareasVisibles(state.tareas, state.filtroVisibilidad)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onClickTarea: tareaID => {
      dispatch(alternarTarea(tareaID))
    }
  }
}
//pasa el estado y props para component ListaTareas
const ListaTareasVisible = connect(
  mapStateToProps,
  mapDispatchToProps
)(ListaTareas)

export default ListaTareasVisible
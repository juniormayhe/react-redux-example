import React from 'react'
import { connect } from 'react-redux'
import { agregarTarea } from '../actions'


let AgregarTarea = ({ dispatch }) => {
  //recibe referencia del input text para one way binding
  //que permitira ejecutar una action con .value del input
  let txtTarea
  
  return (
    <div>
      <form onSubmit={evento => {
          evento.preventDefault()

          //valida entrada de usuario
          if (!txtTarea.value.trim()) {
            return;
          }
          
          //ejecuta action creator con la tarea ingresada por el usuario
          dispatch(agregarTarea(txtTarea.value))

          //resetea el formulario
          txtTarea.value = ''
        }}
      >
        Tarea: <input id="txtTarea" ref={(nodo) => {txtTarea = nodo}}/>

        <button type="submit">
          Agregar tarea
        </button>
      </form>
    </div>

    
  )
}
AgregarTarea = connect()(AgregarTarea)

export default AgregarTarea
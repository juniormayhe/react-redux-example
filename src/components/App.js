import React from 'react'

import Footer from './Footer'
import AgregarTarea from '../containers/AgregarTarea'
import ListaTareasVisible from '../containers/ListaTareasVisible'

const App=() => (  
      <div>
        <AgregarTarea/>
        <ListaTareasVisible/>
        <Footer/>
      </div>
)

export default App;
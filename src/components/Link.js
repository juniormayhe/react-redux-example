//PRESENTATION COMPONENTS
import React from 'react'
import PropTypes from 'prop-types'

//definir componente visual react para montar Link
const Link = ({onClick, active, children}) => {
    //si link fue seleccionado, mostramos en negrita
    if (active) {        
        return <strong>{children}!</strong>
    }
    
    //si el link del footer no fue seleccionado, 
    //muestra a href para filtrar 
    return (
        <a href="#" 
            onClick={evento => {evento.preventDefault();onClick();}
            }>{children}</a>
    )
}

// configurar tipos de las propriedades del componente
Link.propTypes = {
    onClick: PropTypes.func.isRequired,
    active: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired
}

export default Link;
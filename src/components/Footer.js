//PRESENTATION COMPONENTS
import React from 'react'
import LinkFiltro from '../containers/LinkFiltro'

//definir componente visual react para montar Link
const Footer = () => (
  <p>
    Mostrar: 
    
    {' '}
    <LinkFiltro filtro="MOSTRAR_TODAS">
      Todas
    </LinkFiltro>

    {', '}
    <LinkFiltro filtro="MOSTRAR_ACTIVAS">
      Activa
    </LinkFiltro>
    
    {', '}
    <LinkFiltro filtro="MOSTRAR_COMPLETADAS">
      Completadas
    </LinkFiltro>
  </p>
)

export default Footer;
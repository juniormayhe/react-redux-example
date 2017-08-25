//CONTAINER COMPONENTS
import { connect } from 'react-redux'
import { cambiarVisibilidadFiltro } from '../actions'
import Link from '../components/Link'

//envia estado onClick para Link como props
const mapStateToProps = (state, ownProps) => {
  return {
    active: ownProps.filtro === state.filtroVisibilidad
  }
}
//envia metodo onClick para Link como props
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(cambiarVisibilidadFiltro(ownProps.filtro))
    }
  }
}

const LinkFiltro = connect(mapStateToProps,mapDispatchToProps)(Link)

export default LinkFiltro
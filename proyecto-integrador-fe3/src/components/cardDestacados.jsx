import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import Style from '../styles/cardStyle.module.css'

const CardDestacados = (props) => {

    return(
        <div className={Style.card}>
            <div className={Style.userIcon}></div>
            <p className={Style.name}>{props.user.name}</p>
            <div className={Style.botonDetalles}>Ver Detalles</div>
            <button onClick={() => props.remove(props.user)}><FontAwesomeIcon icon={faTrash}/></button>
        </div>
    )
}

export default CardDestacados;
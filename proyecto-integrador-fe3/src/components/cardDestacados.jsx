import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import Style from '../styles/cardStyle.module.css'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { DataContext } from '../context/dataContext'


const CardDestacados = (props) => {

    const valores = useContext(DataContext)
    const theme = valores.theme
    return(
        <div className={`${Style.card} ${Style[theme]}`}>
            <div className={Style.userIcon}></div>
            <p className={Style.name}>{props.user.name}</p>
            <Link to={`/detalle/dentist/${props.user.id}`} className={Style.enlaceDetalles}><div className={Style.botonDetalles}>Ver Detalles</div></Link>
            <button onClick={() => props.remove(props.user)}><FontAwesomeIcon icon={faTrash}/></button>
        </div>
    )
}

export default CardDestacados;
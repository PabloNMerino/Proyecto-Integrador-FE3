import { DataContext } from '../context/dataContext'
import { useContext, useState } from 'react'
import Style from '../styles/cardStyle.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

const Card = (props) => {

    const [heart, setHeart] = useState('white')

    const toggleHeart = () => {
        heart ==='white' ? setHeart('red') : setHeart('white') 
    }

    return(
        <div className={Style.card}>
            <div className={Style.userIcon}></div>
            <p className={Style.name}>{props.user.name}</p>
            <div className={Style.botonDetalles}>Ver Detalles</div>
            <button onClick={toggleHeart}><FontAwesomeIcon icon={faHeart} id={Style.heart}/></button>
        </div>
    )
}

export default Card;
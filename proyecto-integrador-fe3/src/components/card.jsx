import { DataContext } from '../context/dataContext'
import { useContext, useState } from 'react'
import Style from '../styles/cardStyle.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

const Card = (props) => {

    const [isFavourite, setIsFavourite] = useState(false)
    const [heart, setHeart] = useState('white')

    const toggleHeart = () => {
        if(isFavourite) {
            setIsFavourite(false)
            setHeart('white')
            props.removeUser(props.user)
            
        } else {
            setIsFavourite(true)
            setHeart('red')
            props.addUser(props.user)
            
        }
    }

    return(
        <div className={Style.card}>
            <div className={Style.userIcon}></div>
            <p className={Style.name}>{props.user.name}</p>
            <div className={Style.botonDetalles}>Ver Detalles</div>
            <button onClick={toggleHeart}><FontAwesomeIcon icon={faHeart} className={Style[heart]}/></button>
        </div>
    )
}

export default Card;
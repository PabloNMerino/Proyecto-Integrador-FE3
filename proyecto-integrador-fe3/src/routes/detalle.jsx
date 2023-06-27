import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { DataContext } from '../context/dataContext'
import Style from '../styles/detalleStyle.module.css'
import { faUser, faEnvelope, faPhone, faGlobe } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Detalle = () => {

    const param = useParams()
    const[user, setUser] = useState({})

    useEffect(()=>{
        callUser()
    },[])

    const callUser = async() => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${param.id}`)
        const data = await response.json()
        setUser(data)
    }

    return(
        <div className={Style.detailCard}>
            <div className={Style.img}/>
            <div className={Style.detailData}>
                <div className={Style.dato}>
                    <FontAwesomeIcon icon={faUser} className={Style.icon}/>
                    <p>{user.name}</p>
                </div>
                <div className={Style.dato}>
                    <FontAwesomeIcon icon={faEnvelope} className={Style.icon}/>
                    <p>{user.email}</p>
                </div>
                <div className={Style.dato}>
                    <FontAwesomeIcon icon={faPhone} className={Style.icon} />
                    <p>{user.phone}</p>
                </div>
                <div className={Style.dato}>
                    <FontAwesomeIcon icon={faGlobe} className={Style.icon} />
                    <p>{user.website}</p>
                </div>
            </div>
        </div>
    )
}

export default Detalle;
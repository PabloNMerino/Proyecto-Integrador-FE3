import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { DataContext } from '../context/dataContext'
import Style from '../styles/detalleStyle.module.css'

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
        <div>
            <div className={Style.img}/>
            <div>
                <p>NOMBRE: {user.name}</p>
            </div>
        </div>
    )
}

export default Detalle;
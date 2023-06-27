import { useEffect, useState } from "react";
import CardDestacados from "../components/cardDestacados";
import Style from '../styles/destacadosStyle.module.css'


const Destacados = () => {

    const [destacados, setDestacados] = useState(JSON.parse(localStorage.getItem('favoritos')) || [])

const removeFromFavourites = (user) => {
    setDestacados(destacados.filter(favourite => favourite.id !== user.id))
}

useEffect(()=>{
    let arrayJson = JSON.stringify(destacados)
    localStorage.setItem('favoritos', arrayJson)
},[destacados])

    return(
    <div className={Style.box}>
        {
            destacados.length>0? destacados.map((destacado) => <CardDestacados key={destacado.id} user={destacado} remove={removeFromFavourites}/>)
            : <div><div className={Style.img}/><p>no hay nadie aqui</p></div>
        }
    </div>
    )
}

export default Destacados;
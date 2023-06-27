import { useEffect, useState } from "react";
import CardDestacados from "../components/cardDestacados";


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
    <>
        {
            destacados.length>0? destacados.map((destacado) => <CardDestacados key={destacado.id} user={destacado} remove={removeFromFavourites}/>) : <p>no hay nada aca</p>
        }
    </>
    )
}

export default Destacados;
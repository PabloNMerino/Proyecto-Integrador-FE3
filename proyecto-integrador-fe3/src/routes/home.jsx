import Card from '../components/card'
import { DataContext } from '../context/dataContext'
import { useContext, useEffect, useState } from 'react'
import Style from '../styles/homeStyle.module.css'

const Home = (props) => {

    const valores = useContext(DataContext)
    const [favourites, setFavourites] = useState(JSON.parse(localStorage.getItem('favoritos')) || [])

    const users = valores.dataFetch;

    const addFavourite = (user) => {
        setFavourites([...favourites, user])
    }

    const removeFavourite = (user) => {
        setFavourites(favourites.filter(favourite => favourite.id !== user.id))
    }

    useEffect(()=>{
        let arrayJson = JSON.stringify(favourites)
        localStorage.setItem('favoritos', arrayJson)
    }, [favourites])

    return(
        <div className={Style.box}>
            { users.length>0?  
                users.map((user) => {
                    return(
                        <Card key={user.id} user={user} addUser={addFavourite} removeUser={removeFavourite} />
                    )
                }) : undefined
            } 
        </div>
    )
}

export default Home;
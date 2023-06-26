import Card from '../components/card'
import { DataContext } from '../context/dataContext'
import { useContext, useState } from 'react'
import Style from '../styles/homeStyle.module.css'

const Home = (props) => {

    const valores = useContext(DataContext)
    const [favourites, setFavourites] = useState([])

const users = valores.dataFetch;

// const handleFavourite = (userAccount) => {
//     if(favourites.some(user => user.id === userAccount.id)) {
//         removeFavourite(userAccount)
//     } else {
//         addFavourite(userAccount)
//     }
//     console.log(favourites);
// }

const addFavourite = (user) => {
    setFavourites([...favourites, user])
    console.log(favourites);
}

const removeFavourite = (user) => {
    setFavourites(favourites.filter(favourite => favourite.id !== user.id))
    console.log(favourites);
}

    return(
        <div className={Style.box}>
            { users.length>0?  
                users.map((user) => {
                    return(
                        <Card key={user.id} user={user} addUser={addFavourite} removeUser={removeFavourite}/>
                    )
                }) : undefined
            } 
        </div>
    )
}

export default Home;
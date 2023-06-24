import Card from '../components/card'
import { DataContext } from '../context/dataContext'
import { useContext } from 'react'

const Home = (props) => {

    const valores = useContext(DataContext)

const users = valores.dataFetch;
 console.log(users);

    return(
        <>
            { users.length>0?  
                users.map((user) => {
                    return(
                        <p>{user.name}</p>
                    )
                }) : undefined
            } 
        </>
    )
}

export default Home;
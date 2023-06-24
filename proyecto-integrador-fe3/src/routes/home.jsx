import Card from '../components/card'
import { DataContext } from '../context/dataContext'
import { useContext } from 'react'

const Home = (props) => {

    const valores = useContext(DataContext)

let users = valores.dataFetch;
//console.log(users);

    return(
        <>
            {/*
                users.map((user) => {
                    return(
                        <p>{user.name}</p>
                    )
                })
            */}
        </>
    )
}

export default Home;
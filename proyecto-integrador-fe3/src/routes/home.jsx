import Card from '../components/card'
import { DataContext } from '../context/dataContext'
import { useContext } from 'react'
import Style from '../styles/homeStyle.module.css'

const Home = (props) => {

    const valores = useContext(DataContext)

const users = valores.dataFetch;
 console.log(users);

    return(
        <div className={Style.box}>
            { users.length>0?  
                users.map((user) => {
                    return(
                        <Card key={user.id} user={user} />
                    )
                }) : undefined
            } 
        </div>
    )
}

export default Home;
import Style from './styles/mainClassStyle.module.css'
import Header from './components/header'
import Home from './routes/home'
import Contacto from './routes/contacto'
import Destacados from './routes/destacados'
import Detalle from './routes/detalle'
import Footer from './components/footer'
import { useRoutes } from 'react-router-dom'
import { useContext } from 'react'
import { DataContext } from './context/dataContext'

const MainClass = (props) => {

    const valores = useContext(DataContext)
    const theme = valores.theme

    const router = useRoutes([
        {path: '/', element: <Home />},
        {path: '/contacto', element: <Contacto />},
        {path:'/detalle/dentist/:id', element: <Detalle />},
        {path: '/destacados', element: <Destacados />},
        {path:'*', element: <div>Not Found</div>}
      ])

    return(
        <div className={`${Style.mainClass} ${Style[theme]}`}>
            <Header />
            {router}
            <Footer/>
      </div>
    )
}

export default MainClass
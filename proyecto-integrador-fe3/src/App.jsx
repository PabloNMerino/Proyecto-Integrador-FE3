import './App.css'
import Header from './components/header'
import Home from './routes/home'
import Contacto from './routes/contacto'
import Destacados from './routes/destacados'
import Detalle from './routes/detalle'
import { useRoutes } from 'react-router-dom'
import { DataProvider } from './context/dataContext'
import Footer from './components/footer'

function App() {

  const router = useRoutes([
    {path: '/', element: <Home />},
    {path: '/contacto', element: <Contacto />},
    {path: '/destacados', element: <Destacados />},
    {path:'/detalle/dentist/:id', element: <Detalle />},
    {path:'*', element: <div>Not Found</div>}
  ])

  return (
    <div className='mainClass'>
      <DataProvider>
        <Header />
        {router}
        <Footer/>
      </DataProvider>
    </div>
  )
}

export default App

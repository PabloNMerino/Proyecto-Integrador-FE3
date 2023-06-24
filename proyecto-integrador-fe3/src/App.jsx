import './App.css'
import Header from './components/header'
import Home from './routes/home'
import Contacto from './routes/contacto'
import Destacados from './routes/destacados'
import Detalle from './routes/detalle'

function App() {

  const router = useRoutes([
    {path: '/', element: <Home />},
    {path: '/contacto', element: <Contacto />},
    {path: '/destacados', element: <Destacados />},
    {path:'/detalle', element: <Detalle />},
    {path:'*', element: <div>Not Found</div>}
  ])

  return (
    <>
      <Header />
      {router}
    </>
  )
}

export default App

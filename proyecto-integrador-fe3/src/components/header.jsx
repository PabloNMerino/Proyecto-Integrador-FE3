import { Link } from 'react-router-dom'
import Style from '../styles/headerStyle.module.css'
import ThemeSwitch from 'react-switch'
import { DataContext } from '../context/dataContext'
import { useContext } from 'react'

const Header = () => {

    const valores = useContext(DataContext)

    return(
        <header>
            <p>DentaLink</p>
            <ul className={Style.lista}>
                <li><Link className={Style.enlaces} to='./'>Home</Link></li>
                <li><Link className={Style.enlaces} to='./contacto'>Contacto</Link></li>
                <li><Link className={Style.enlaces} to='./destacados'>Destacados</Link></li>
            </ul>
            <ThemeSwitch offColor='#eef279' onColor='#120f26' offHandleColor='#dbbe00'  onHandleColor='#616063' uncheckedIcon={false} checkedIcon={false} checked={valores.theme==='dark'} onChange={valores.toggleTheme}/>
        </header>
    )
}

export default Header
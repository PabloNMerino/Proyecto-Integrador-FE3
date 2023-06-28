import Style from '../styles/footerStyle.module.css'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useContext } from 'react'
import { DataContext } from '../context/dataContext'

const Footer = () => {

    const valores = useContext(DataContext)
    const theme = valores.theme

    return(
        <footer className={Style[theme]}>
            <p>Hecho Por: Pablo Nicolas Merino</p>
            <a href="https://pablomerinodev.com/" target='blank'><FontAwesomeIcon icon={faGlobe} className={Style.icon}/></a>
        </footer>
    )
}

export default Footer
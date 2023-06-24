import Style from './headerStyle.module.css'
import ThemeSwitch from 'react-switch'

const Header = () => {

    return(
        <header>
            <p>DentaLink</p>
            <ul className={Style.lista}>
                <li>Home</li>
                <li>Contacto</li>
                <li>Destacados</li>
            </ul>
            <ThemeSwitch offColor='#eef279' onColor='#120f26' offHandleColor='#dbbe00'  onHandleColor='#616063' uncheckedIcon={false} checkedIcon={false}/>
        </header>
    )
}

export default Header
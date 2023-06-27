import Style from '../styles/footerStyle.module.css'

const Footer = () => {

    return(
        <footer>
            <p>Hecho Por: Pablo Nicolas Merino</p>
            <div className={Style.icon}>
            <a href="https://www.linkedin.com/in/pablo-nicolas-merino/" target='blank'>a</a>
            </div>
        </footer>
    )
}

export default Footer
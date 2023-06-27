import { useEffect, useState } from 'react';
import Style from '../styles/formStyle.module.css'

const Contacto = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [error, setError] = useState(false)
    const [submitDone, setSubmitDone] = useState(false)

    const handleNameChange = (e) => {
        setSubmitDone(false)
        setName(e.target.value)
    }

    const handleEmailChange = (e) => {
        setSubmitDone(false)
        setEmail(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if(name.trim().length<6 || email==='') {
            setError(true)
        } else {
            setSubmitDone(true)
            setError(false)
        }
    }

    return(
        <div className={Style.mainSpace}>
        <form className={Style.formulario} onSubmit={handleSubmit}>
            <div className={Style.inputDiv}>
                <label htmlFor="name">Nombre</label>
                <input type="text" name="name" id="name" placeholder='minimo 6 caracteres' value={name} onChange={handleNameChange}/>
            </div>
            <div className={Style.inputDiv}>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" placeholder='ejemplo@email.com' value={email} onChange={handleEmailChange}/>
            </div>
            <button type='submit'>Enviar</button>
            {
                error? <div className={Style.error}><p>La informacion es incorrecta</p></div> : undefined
            }
            {
                submitDone? <div className={Style.success}><p>Gracias {name}, te contactaremos a por {email}</p></div> : undefined
            }
        </form>
        </div>
    )
}

export default Contacto;
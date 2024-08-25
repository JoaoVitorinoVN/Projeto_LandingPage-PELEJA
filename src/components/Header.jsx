import React from 'react'
import logo from "../assets/peleja.png";
import Navegacao from './Navegacao'
const Header = () => {
    return (
        <header className='cabecalho'>
            <img src={logo} alt='Logo' />
            <Navegacao />
        </header>
    )
}

export default Header

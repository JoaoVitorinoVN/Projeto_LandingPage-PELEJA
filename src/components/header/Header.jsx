import React from 'react'
import logo from "../../assets/peleja.png";
import Navegacao from './Navegacao'
import './Header.css'

const Header = () => {
    return (
        <header className='header'>
            <div className='cabecalho'>
            <img src={logo} alt='Logo' />
            <Navegacao />
            </div>
        </header>
    )
}

export default Header

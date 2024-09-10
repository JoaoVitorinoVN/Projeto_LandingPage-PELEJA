import React from 'react'
import logo from "../../assets/peleja.png";
import Navegacao from './Navegacao'
import './Header.css'
import DropdownMenu from './DropdownMenu';

const Header = () => {
    return (
        <header className='header'>
            <div className='cabecalho'>
                <img src={logo} alt='Logo' />
                <DropdownMenu />
                <div className='navegacao-desktop'>
                    <Navegacao />
                </div>
            </div>
        </header>
    )
}

export default Header

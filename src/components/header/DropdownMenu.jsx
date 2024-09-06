import React, { useState } from 'react';
import Ancora from '../botoes/Ancora';
const DropdownMenu = ({ nome, conteudo }) => {
    const [openMenu, setOpenMenu] = useState(false);
    return (
        <div className='dropdownMenu' >
            <span onClick={() => setOpenMenu((prev) => !prev)}>{nome}</span>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" /></svg>
            {
                openMenu && <div className='dropdownContent'>
                    {Object.keys(conteudo).map((key, index) => (
                        <Ancora target={conteudo[key].target} key={index}>{conteudo[key].titulo}</Ancora>
                    ))}
                </div>
            }
            
            
        </div>
    )
}

export default DropdownMenu

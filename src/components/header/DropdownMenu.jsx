import React, { useState } from 'react';
import Navegacao from './Navegacao';
const DropdownMenu = () => {
    const [openMenu, setOpenMenu] = useState(false);
    return (
        <div className='dropdown'>
            <div onClick={() => setOpenMenu((prev) => !prev)}>
                <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#e8eaed"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" /></svg>
            </div>
            
            {
                openMenu && <div className='dropdownMenu'>
                    <Navegacao />
                </div>
            }
        </div>
    )
}

export default DropdownMenu

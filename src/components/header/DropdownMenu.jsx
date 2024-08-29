import React from 'react'
const DropdownMenu = ({ nome, conteudo }) => {

    return (
        <div className='dropdownMenu'>
            <a href='#'>{nome}
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/></svg>
            </a>
            <div className='dropdownContent'>
                {Object.keys(conteudo).map((key, index) => (
                    <a href='#pergunta' key={index}>{conteudo[key]}</a>
                ))}
            </div>
            
        </div>
    )
}

export default DropdownMenu

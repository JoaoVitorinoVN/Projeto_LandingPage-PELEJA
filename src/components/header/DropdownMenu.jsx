import React from 'react'

const DropdownMenu = ({ nome, conteudo }) => {

    return (
        <div className='dropdownMenu'>
            <a href='#'>{nome}</a>
            <div className='dropdownContent'>
                {Object.keys(conteudo).map((key, index) => (
                    <a href='#' key={index}>{conteudo[key]}</a>
                ))}
            </div>
        </div>
    )
}

export default DropdownMenu

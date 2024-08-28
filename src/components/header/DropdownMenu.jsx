import React from 'react'
import { FaAngleDown } from "react-icons/fa";
const DropdownMenu = ({ nome, conteudo }) => {

    return (
        <div className='dropdownMenu'>
            <a href='#'>{nome} <FaAngleDown size={20}/></a>
            <div className='dropdownContent'>
                {Object.keys(conteudo).map((key, index) => (
                    <a href='#' key={index}>{conteudo[key]}</a>
                ))}
            </div>
            
        </div>
    )
}

export default DropdownMenu

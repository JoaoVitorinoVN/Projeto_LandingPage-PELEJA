import React from 'react'
import DropdownMenu from './DropdownMenu'
import Ancora from '../botoes/Ancora'

const Navegacao = () => {
    const content = {
        item1: {
            titulo: "Sobre nós",
            target: "#autoridade"
        },
        item2: {
            titulo: "Segmentos",
            target: "#segmentos"
        },
        item3: {
            titulo: "Marcas representadas",
            target: "#marcas"
        },
    }

    return (
        <nav>
            <ul>
                <li><DropdownMenu nome={"Conheça a Peleja!"} conteudo={content} /></li>
                <li><Ancora target="#faq">FAQ</Ancora></li>
            </ul>
        </nav>
    )
}

export default Navegacao

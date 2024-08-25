import React from 'react'
import DropdownMenu from './DropdownMenu'

const Navegacao = () => {
    const FAQ = {
        Pergunta1: "Pergunta1",
        Pergunta2: "Pergunta2",
        Pergunta3: "Pergunta3",
        Pergunta4: "Pergunta4"
    }

    return (
        <nav>
            <ul>
                <li><a href="#">Sobre PELEJA</a></li>
                <li><a href="#">Mais vendidos</a></li>
                <li><DropdownMenu nome={"FAQ"} conteudo={FAQ}/></li>
                <li><a href="#">Mais vendidos</a></li>
            </ul>
        </nav>
    )
}

export default Navegacao

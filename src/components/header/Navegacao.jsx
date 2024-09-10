import React from 'react'
import Ancora from '../botoes/Ancora'

const Navegacao = () => {
    return (
        <nav>
            <ul>
                <li><Ancora target="#autoridade">Sobre nós</Ancora></li>
                <li><Ancora target="#segmentos">Segmentos</Ancora></li>
                <li><Ancora target="#marcas">Marcas representadas</Ancora></li>
                <li><Ancora target="#faq">FAQ</Ancora></li>
            </ul>
        </nav>
    )
}

export default Navegacao

import React from 'react'

import './tituloSubtituloSecao.css'

function TituloSubtituloSecao({titulos}) {
    return (
        <div className='titulos'>
            <h1>{titulos.titulo}</h1>
            <hr />
   
            <h2>{titulos.subtitulo}</h2>
        </div>
    )
}

export default TituloSubtituloSecao
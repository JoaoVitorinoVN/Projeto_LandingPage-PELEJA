import React from 'react'

import './BotaoChamada.css'

const Button = ({ texto }) => {
    return (
        <button className='button'>
            {texto}
        </button>
    )
}

export default Button

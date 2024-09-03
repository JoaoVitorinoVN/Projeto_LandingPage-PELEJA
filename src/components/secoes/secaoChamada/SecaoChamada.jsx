import React from 'react'
import './SecaoChamada.css'
import BotaoChamada from '../../botoes/BotaoChamada';
import WithAnimation from '../../animation/WithAnimation';

const AnimatedButton = WithAnimation(BotaoChamada);

import './SecaoChamada'
const Section = () => {
    return (
        <section className='secao-chamada'>
            <div className='secao'>

            <div>
                <h1>PELEJANDO POR VOCÊ. PODE CONFIAR!</h1>
                <p>Representamos as melhores marcas e produtos de vários segmentos para seu negócio.</p>
            </div>

            <AnimatedButton texto={"Peleje conosco!"}/>

            </div>
        </section>
    )
}

export default Section

import React from 'react'
import WithAnimation from './WithAnimation';
import TituloSubtituloSecao from '../titulos/TituloSubtituloSecao';

const AnimatedTitles = ({titulos}) => {

    const AnimatedTitles = WithAnimation(TituloSubtituloSecao);

  return (
    <div className='box-titulo'>
        <AnimatedTitles titulos={titulos}/>
    </div>
  )
}

export default AnimatedTitles
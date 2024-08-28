import React from 'react'
import './SecaoFormulario.css'
import Button from '../../botoes/BotaoChamada'
import WaveFAQ from '../../ondas/WaveFAQ'


function SecaoFormulario() {
    return (
        <section className='secao-formulario'>

            <div className='conteudo-secao'>
                <div className='titulo-conteudo'>
                    <h2>Deixe-nos PELEJAR por você!</h2>
                    <h3>Somos referência no mercado de representações e oferecemos os melhores produtos para conectar seu empreendimento com os clientes certos.
                        Preencha o fomulário para conhecer mais sobre os nossos produtos!</h3>
                </div>
                
                <form action="" className='formulario'>
                    <div>
                        <input type="text" placeholder='Nome' />
                        <input type="tel" placeholder='Telefone' />
                    </div>
                    <div>
                        <input type="email" placeholder='Email' />
                    </div>

                    <Button texto={'Venha Pelejar!'} />
                </form>
            </div>
        </section>
    )
}

export default SecaoFormulario 
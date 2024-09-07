import React, { useState } from 'react'
import './SecaoFormulario.css'
import Button from '../../botoes/BotaoChamada'
import ReactInputMask from 'react-input-mask'
import emailjs from '@emailjs/browser'


function SecaoFormulario() {

    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const service_id = "service_7kjodx6";
    const template_id = "template_ghhdilw";
    const public_key = "7EzPemUl9dfrNBn0g";

    const templateParams = {
        from_name: formData.name,
        from_tel: formData.phone,
        from_email: formData.email
    }

    function sendEmail(e) {
        e.preventDefault();

        if (formData.name === '' || formData.phone === '' || formData.email === '') {

            alert("É necessario o preenchimento de todos os campos.")
        } else {

            emailjs.send(service_id, template_id, templateParams, public_key).then(() => {

                setFormData({
                    name: '',
                    phone: '',
                    email: ''
                })

                alert("Obrigado pelo interesse, em pouco tempo entraremos em contato!")
                console.log("Email enviado com sucesso!")
            })
                .catch((err) => {
                    console.log("Erro ao enviar email: ", err);
                })
        }
    }


    return (
        <section className='secao-formulario' id='secao-formulario'>
            <div className='conteudo-secao'>
                <div className='titulo-conteudo'>
                    <h2>Deixe-nos PELEJAR por você!</h2>
                    <h3>Somos referência no mercado de representações e oferecemos os melhores produtos para conectar seu empreendimento com os clientes certos.
                        Preencha o fomulário para conhecer mais sobre os nossos produtos!</h3>
                </div>

                <form className='formulario' onSubmit={sendEmail}>
                    <div>
                        <input type="text" placeholder='Nome' name='name' value={formData.name} onChange={handleChange} />

                        <ReactInputMask mask={"(99) 99999-9999"} placeholder='Telefone' onChange={handleChange} value={formData.phone}>
                            {(inputProps) => <input {...inputProps} type="tel" name='phone' />}
                        </ReactInputMask>
                    </div>
                    <div>
                        <input type="email" placeholder='Email' name='email' value={formData.email} onChange={handleChange} />
                    </div>

                    <Button texto={'Venha Pelejar!'} />
                </form>
            </div>
        </section>
    )
}

export default SecaoFormulario 
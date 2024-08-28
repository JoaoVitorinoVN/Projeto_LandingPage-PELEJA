import React from 'react'
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import logo from '../../assets/pelejaIcon.png'

const Whatsapp = () => {
    const whatsappAssets = {
        numero: "03499999999",
        nome: "Peleja",
        status: "Resposta em aproximadamente 1 hora",
        mensagem: "Olá! Como posso ajudar?",
        placeholder: "Mande sua mensagem..."
    }

    return (
        <FloatingWhatsApp
            phoneNumber={whatsappAssets.numero}
            accountName={whatsappAssets.nome}
            avatar={logo}
            statusMessage={whatsappAssets.status}
            chatMessage={whatsappAssets.mensagem}
            placeholder={whatsappAssets.placeholder}
            allowEsc
            allowClickAway
            notification
            notificationSound />
    )
}

export default Whatsapp

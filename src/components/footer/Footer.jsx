import React from 'react' 
import { MdEmail } from "react-icons/md";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import logo from "../../assets/peleja2.png";
import "./Footer.css";

const Footer = () => {
    return (
        <footer>
            <div className='footer'>
                <div className='content'>
                    <img src={logo} alt="PELEJA" />
                    <ul>
                        <li>
                            <MdEmail size={25}/>
                            <a href="mailto:lafernandes2024@outlook.com">lafernandes2024@outlook.com</a>
                        </li>
                        <li>
                            <FaInstagram size={25} /> 
                            <a href="https://www.instagram.com/pele7a?igsh=bnpxZG9ubno5d3U1" target='_blank'>@pele7a</a>
                        </li>
                        <li>
                            <FaWhatsapp size={25} />
                            <span className='telefone'>
                                <a href="https://wa.me/5503499502590?text=Olá%20gostaria%20de%20mais%20informações" target='_blank'>+55 (34) 9 9950-2590</a>
                                <a href="https://wa.me/5503499905190?text=Olá%20gostaria%20de%20mais%20informações" target='_blank'>+55 (34) 9 9990-5190</a>
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer

import React from 'react' 
import { MdEmail } from "react-icons/md";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import logo from "../../assets/peleja2.png";
import "./Footer.css";

const Footer = () => {
    return (
        <footer>
            <div className="footer-wave">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
                </svg>
            </div>
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

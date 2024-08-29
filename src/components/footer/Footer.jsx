import React from 'react' 
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
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#F5F5F5"><path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z"/></svg>
                            <a href="mailto:lafernandes2024@outlook.com">lafernandes2024@outlook.com</a>
                        </li>
                        <li><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#F5F5F5"><path d="M200-120q-33 0-56.5-23.5T120-200v-160h80v160h160v80H200Zm400 0v-80h160v-160h80v160q0 33-23.5 56.5T760-120H600ZM120-600v-160q0-33 23.5-56.5T200-840h160v80H200v160h-80Zm640 0v-160H600v-80h160q33 0 56.5 23.5T840-760v160h-80ZM480-280q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480q0 83-58.5 141.5T480-280Zm0-80q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm0-120Z"/></svg>
                            <a href="https://www.instagram.com/pele7a?igsh=bnpxZG9ubno5d3U1" target='_blank'>@pele7a</a>
                        </li>
                        <li>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#F5F5F5"><path d="M760-480q0-117-81.5-198.5T480-760v-80q75 0 140.5 28.5t114 77q48.5 48.5 77 114T840-480h-80Zm-160 0q0-50-35-85t-85-35v-80q83 0 141.5 58.5T680-480h-80Zm198 360q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z"/></svg>
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

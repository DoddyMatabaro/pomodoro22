import React from 'react';
import './footer.css';
import { FaLinkedinIn, FaGithub, FaDiscord } from 'react-icons/fa';
import  logo  from '../assets/doddy logo.png'


function Footer() {
  return (
    <footer>
        <div>
            <img src={logo} alt="logo" />
        </div>
        <div>
            Ⓒ 2022 GDA e.g 
        </div>
        <div className="socials">
                 <a href="https://linkedin.com"><FaLinkedinIn /></a>
                 <a href="https://github.com"><FaGithub /></a>
                 <a href="https://discord.com"><FaDiscord /></a>
        </div>
    </footer>
  )
}

export default Footer
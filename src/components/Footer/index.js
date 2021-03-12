import React from 'react';
import { 
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaTwitch
} from 'react-icons/fa'

import './styles.css';

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-social-container">
        <span className="footer-social-title">
          Social
        </span>
        <div className="footer-social-icons">
          <ul>
            <li><FaFacebookF size={34} /></li>
            <li><FaInstagram size={34} /></li>
            <li><FaYoutube size={34} /></li>
            <li><FaTwitter size={34} /></li>
            <li><FaTwitch size={34} /></li>
          </ul>
        </div>
      </div>
      <span className="footer-copyright">© Copyright 2020 - iService - Todos os direitos reservados</span>
      <div className="footer-info-container">
        <span>iService</span>
        <div>
          <ul>
            <li>Cadastre</li>
            <li>Fale Conosco</li>
            <li>FAQ</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer

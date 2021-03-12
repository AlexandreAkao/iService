import React from 'react'

import './styles.css';

import logo from '../../assets/images/logo.png';

function Header() {
  return (
    <div className="header-container">
      <img src={logo} alt="logo" />
      <ul className="header-links">
        <li className="header-items">Profissional</li>
        <li className="header-items">Serviços</li>
        <li className="header-items">Sobre</li>
        <li id="login" className="header-items">Entrar</li>
      </ul>
    </div>
  )
}

export default Header

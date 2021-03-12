import React from 'react'

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import CardServices from './components/CardServices';
import { SERVICES, MOCKSERVICES } from './constant';

import heroImg from '../../assets/images/logo.png';

import './styles.css';

function LandingPage() {
  const random = Math.trunc(Math.random() * SERVICES.length)
  const service = SERVICES[random];

  return (
    <>
      <Header />
      <div className="landing-page-container">

        
        <div className="landing-apresentation-container">
          <img src={heroImg} alt="hero" className="hero-container" />
          <div>
            <span>
              Nunca foi tão fácil <span className="blue">{service}</span>
            </span>
            <div className="search-container">
              <input type="text" className="search-service" placeholder="Pesquise seu serviço" />
              <input type="button" value="Buscar" className="search-button" />
            </div>
          </div>
        </div>
        <div className="concav-container"/>
        <div className="landing-services-container">
          <div className="landing-services-content">
            <span className="landing-services-title">Esses são nossos principais serviços: </span>
            <div className="landing-services-list">
              { MOCKSERVICES.map((service, index) => <CardServices key={index} {...service} />) }
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default LandingPage

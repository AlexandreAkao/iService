import React from 'react'

import './styles.css';

function CardServices({
  title,
  name,
  service,
  description,
  image,
  price
}) {
  return (
    <div className="card-container">
      <img src={image} alt="card" />
      <div className="card-info">
        <span className="card-title">{title}</span>
        <span className="card-name">Profissional: {name}</span>
        <span className="card-service">Serviço: {service}</span>
        <span className="card-description">{description}</span>
      </div>
      <div className="card-price-container">
        <span className="card-price">{price}</span>
      </div>
    </div>
  )
}

export default CardServices

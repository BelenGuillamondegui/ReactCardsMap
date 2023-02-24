import React from 'react'
import './Card.css'


const Card = ({producto}) => {
const {id, nombre, imagen, precio} = producto
  return (
        <p key = {id} className = 'card-p' >
            <h2>{nombre} </h2>
            <img src={imagen} className = 'card-img'/>
            <h3>{precio}</h3>
        </p>
  )
}

export default Card
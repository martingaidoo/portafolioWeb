import React from 'react'
import "../styles/styleSkills.css"

export const ComponentHabilidad = (props) => {
    const {imagen, nombre, valor} = props || {};
  return (
    <div className='contenedorHabilidades'>
        <div className="card1">
        <div className="card2">
            <img src={imagen} alt="habilidad"/>

            <div className="skill-box">
    <span className="title1">{nombre}</span>
    <div className="skill-bar">
      <span className="skill-per" style={{  width: valor ,  animationDelay: "0.1s"}}>
        <span className="tooltip1">{valor}</span>
      </span>
    </div>
  </div>
  </div>

            
        </div>
        </div>
  )
}
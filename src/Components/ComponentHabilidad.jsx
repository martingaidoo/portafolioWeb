import React from 'react'
import "../styles/styleSkills.css"

export const ComponentHabilidad = (props) => {
    const {imagen, nombre, valor} = props || {};
  return (
    <div className='contenedorHabilidades'>
        <div className="card">
        <div className="card2">
            <img src={imagen} alt="habilidad"/>

            <div className="skill-box">
    <span className="title">{nombre}</span>
    <div className="skill-bar">
      <span className="skill-per" style={{  width: valor ,  animationDelay: "0.1s"}}>
        <span className="tooltip">{valor}</span>
      </span>
    </div>
  </div>
  </div>

            
        </div>
        </div>
  )
}
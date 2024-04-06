import React from 'react'
import "../styles/styleProyect.css"

export const ComponentHabilidadChico = (props) => {
  const {title, imagen} = props
  return (
    <div className='BoxChico' style={{backgroundColor: "#f5f5f5"}}>
      <img src={imagen} alt='lenguaje' />
      <p>{title}</p>
    </div>)
}
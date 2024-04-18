import React from 'react'
import "../styles/styleProyect.css"

export const ComponentHabilidadChico = (props) => {
  const {title, imagen} = props
  return (
    
    <div className='BoxChico'>
      <img src={imagen} alt='lenguaje' />
      <p>{title}</p>
    </div>)
}
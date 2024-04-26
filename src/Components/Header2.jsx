import React from 'react'
import "../styles/styleSkills.css"

export const Header2 = () => {
  const navigate = (section) => {
    window.location.hash = section;
  }

  return (
    <div className=''>
        
<nav className="navbar navbar-expand-lg bg-body-tertiary" style={{
        position: "fixed",
        width: "100%",
        zIndex: 10,
      }}>
  <div className="container-fluid">
    <button className="navbar-brand button-vacio" onClick={() => navigate('home')}>Martin Gaido</button>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <button className="nav-link active" aria-current="page" onClick={() => navigate('home')}>Inicio</button>
        </li>
        <li className="nav-item">
          <button className="nav-link" onClick={() => navigate('about')}>Sobre Mí</button>
        </li>
        <li className="nav-item">
          <button className="nav-link" onClick={() => navigate('skills')}>Habilidades</button>
        </li>
        <li className="nav-item">
          <button className="nav-link" aria-current="page" onClick={() => navigate('portfolio')}>Proyectos</button>
        </li>
        <li className="nav-item">
          <button className="nav-link" aria-current="page" onClick={() => navigate('contact')}>Contacto</button>
        </li>
      </ul>
    </div>
  </div>
</nav>      

    </div>
  )
}
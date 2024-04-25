import React from 'react'

export const Header2 = () => {
  return (
    <div className=''>
        
<nav className="navbar navbar-expand-lg bg-body-tertiary" style={{
        position: "fixed",
        width: "100%",
        zIndex: 10,
      }}>
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Martin Gaido</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#home">Inicio</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#about">Sobre Mí</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#skills">Habilidades</a>

        </li>
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="#portfolio">Proyectos</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="#contact">Contacto</a>
        </li>
      </ul>
    </div>
  </div>
</nav>      


    </div>
  )
}

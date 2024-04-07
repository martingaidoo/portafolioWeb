
import React from "react";

const Header = () => {
  return (
    <div
      style={{
        position: "fixed",
        display: "flex",
        justifyContent: "center",
        gap: "1.5rem",
        background: "rgba(255,255,255,0.75)",
        padding: "1rem",
        top: 0,
        width: "100%",
        zIndex: 10,
      }}
    >
      <a href="#home">Inicio</a>
      <a href="#about">Sobre Mí</a>
      <a href="#skills">Habilidades</a>
      <a href="#portfolio">Proyectos</a>
      <a href="#contact">Contacto</a>
    </div>
  );
};

export default Header;
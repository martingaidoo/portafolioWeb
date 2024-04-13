import React, { useState, useEffect } from "react";
import image from "../images/motion-background.jpg";

const imageAltText = "purple and blue abstract background";

const description =
  "Soy un joven de 20 años, actualmente estudiando en la Universidad Tecnológica Nacional, Facultad Regional De Villa María, cursando tercer año. Me considero una persona proactiva, con ganas de aprender y crecer en el mundo de la programación. Me gusta trabajar en equipo y soy muy responsable con las tareas que me propongo. Actualmente estoy aprendiendo sobre desarrollo web, utilizando tecnologías como HTML, CSS, JavaScript, React, NodeJs, Express, MongoDB, entre otras.";

const detailOrQuote =
  "Me apasiona resolver problemas de nuevas formas creativas para impulsar la innovación. Busco continuamente aprender sobre las nuevas tecnologías porque considero que el aprendizaje constante es una parte fundamental en esta área.";

const About = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setIsMobile(window.innerWidth < 768);
    });
  }, []);

  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
          style={{
            backgroundColor: "white",
            margin: "0 auto",
            width: isMobile ? "100%" : isMobile ? "80%" : "50%",
            padding: isMobile ? "0rem" : "4rem",
            paddingBottom: isMobile ? "4rem" : "4rem",

            paddingTop: isMobile ? "4rem" : "4rem",
            margin: isMobile ? "0rem" : "3rem auto",
            textAlign: "center",

          }}
      >
        <h2>Acerca de mí</h2>
        <p className="large letrasChicasMedia" id="sobremi">{description} </p>
        <hr />
        <p className="letrasChicasMedia" style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
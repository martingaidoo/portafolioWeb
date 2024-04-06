/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/motion-background.jpg";

const imageAltText = "purple and blue abstract background";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  " Soy un joven de 20 años, actualmente estudiando en la Universidad Tecnologica Nacional, Facultad Regional De Villa Maria. Me considero una persona proactiva, con ganas de aprender y crecer en el mundo de la programacion. Me gusta trabajar en equipo y soy muy responsable con las tareas que me propongo.Actualmente estoy aprendiendo sobre desarrollo web, utilizando tecnologias como HTML, CSS, Javascript, React, NodeJs, Express, MongoDB, entre otras.";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */


/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "Me apasiona resolver problemas de nuevas formas y creativa para impulsar la innovación. Busco continuamente aprender sobre las nuevas tecnologias porque considero que el aprendizaje constante es una parte fundamental en esta area.";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>Acerca de mí</h2>
        <p className="large">{description}</p>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;

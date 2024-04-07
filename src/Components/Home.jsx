/**
 * Home component
 *
 * The section at the top of the page to display image of your
 * choice, name and title that describes your career focus.
 */

import React from "react";
import arrowSvg from "../images/down-arrow.svg";
import PropTypes from "prop-types";

import envelopeIcon from "../images/socials/envelope.svg";
import gitHubIcon from "../images/socials/github.svg";
import instagramIcon from "../images/socials/instagram.svg";
import linkedInIcon from "../images/socials/linkedin.svg";


/**
 * Home background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/fotoPortadaBandW.jpg";


const imageAltText = "Adult female in office setting leaning against a glass wall while holding a platinum Microsoft Surface Pro 7 in tablet mode preparing to write with Microsoft Surface Pen";

const Home = ({ name, title }) => {
  
  return (
    <section id="home" className="min-height">
  <img className="background" src={image} alt="" />
  <div style={{ position: "absolute", top: "5rem", left: "2rem", width: "17rem" }}>
    <h1>{name}</h1>
    <h2>{title}</h2>
  </div>
  
  <div style={{ position: "absolute", bottom: "3rem", left: "50%" }}>
    <a href="#footer">
    <img className="bounce" src={arrowSvg} style={{ height: "3rem", width: "3rem" }} alt={imageAltText} />
    </a>
  </div>


  <div className='container__DescargarCV'     style={{
      display: "flex",
      gap: "2.0rem",
      position: "absolute",
      bottom: "1rem",
      left: "2rem",
    }}>
        <a href="./public/curriculum.pdf" download>
        <button className="buttonCV" type="button">
        <span className="button__text">Download</span>
        <span className="button__icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 35" id="bdd05811-e15d-428c-bb53-8661459f9307" data-name="Layer 2" class="svg"><path d="M17.5,22.131a1.249,1.249,0,0,1-1.25-1.25V2.187a1.25,1.25,0,0,1,2.5,0V20.881A1.25,1.25,0,0,1,17.5,22.131Z"></path><path d="M17.5,22.693a3.189,3.189,0,0,1-2.262-.936L8.487,15.006a1.249,1.249,0,0,1,1.767-1.767l6.751,6.751a.7.7,0,0,0,.99,0l6.751-6.751a1.25,1.25,0,0,1,1.768,1.767l-6.752,6.751A3.191,3.191,0,0,1,17.5,22.693Z"></path><path d="M31.436,34.063H3.564A3.318,3.318,0,0,1,.25,30.749V22.011a1.25,1.25,0,0,1,2.5,0v8.738a.815.815,0,0,0,.814.814H31.436a.815.815,0,0,0,.814-.814V22.011a1.25,1.25,0,1,1,2.5,0v8.738A3.318,3.318,0,0,1,31.436,34.063Z"></path></svg></span>
        </button>
        </a>
    </div>

  <div
    style={{
      display: "flex",
      gap: "2.0rem",
      position: "absolute",
      bottom: "1rem",
      right: "2rem",
    }}
  >

    <a href={`mailto:martingaido00@gmail.com`}>
      <img src={envelopeIcon} alt="email" className="socialIcon" />
    </a>

    <a href={`https://github.com/martingaidoo`} target="_blank" rel="noopener noreferrer">
      <img src={gitHubIcon} alt="GitHub" className="socialIcon" />
    </a>

    <a
      href={`https://www.instagram.com/martingaidoo`}
      target="_blank"
      rel="noopener noreferrer"
    >
    <img src={instagramIcon} alt="Instagram" className="socialIcon" />
    </a>

    <a
      href={`https://www.linkedin.com/in/martin-gaido/`}
      target="_blank"
      rel="noopener noreferrer"
    >
    <img src={linkedInIcon} alt="LinkedIn" className="socialIcon" />
    </a>
  </div>
</section>
  );
};

Home.defaultProps = {
  name: "",
  title: "",
};

Home.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Home;
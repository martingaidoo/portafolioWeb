import React, { useState } from 'react';
import "../styles/styleContact.css";
import image from "../images/fotoAbajo.jpg";

const imageAltText = "desktop with books and laptop";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = `mailto:martingaido00@gmail.com?subject=${encodeURIComponent(formData.name + ' ' + formData.subject)}&body=${encodeURIComponent(formData.message)}`;
  };

  return (
    <div id="contact">
      <div className="container-contact" style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div className="container-contact-img" style={{ maxWidth: "30%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover", animation: "1s ease-out 0s 1 slideInLeft", borderEndEndRadius: "1rem", borderStartEndRadius: "1rem"}}
            alt={imageAltText}
          />
        </div>
        <div className="form-container">
          <div className="form">
            <span className="heading">Contacto</span>
            <form onSubmit={handleSubmit}>
              <input 
                placeholder="Nombre" 
                type="text" 
                name='name'
                className="input" 
                id="name" 
                value={formData.name} 
                onChange={handleChange} 
                required 
              />
              <input 
                placeholder="Correo Electronico" 
                name='email'
                id="email" 
                type="email" 
                className="input" 
                value={formData.email} 
                onChange={handleChange} 
                required 
              />
              <input 
                placeholder="Asunto" 
                id="subject" 
                type="text" 
                className="input" 
                name='subject'
                value={formData.subject} 
                onChange={handleChange} 
                required 
              />
              <textarea 
                placeholder="Mensaje" 
                rows="10" 
                cols="30" 
                id="message" 
                name="message" 
                className="textarea" 
                value={formData.message} 
                onChange={handleChange} 
                required 
              />
              <div className="button-container">
                <button type="submit" className="send-button">Enviar</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

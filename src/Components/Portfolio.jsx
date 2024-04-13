

import React from "react";
import { ComponentHabilidadChico } from "./ComponentHabilidadChico";

import python from '../images/python.png'

import node from '../images/node.png'

import sqlite from '../images/sqlite.png'
import sistemagym from '../images/sistemagym.jpg'

import mongo from '../images/mongo.png'
import javascript from '../images/javascript.png'
import botwhatsapp from '../images/botwhatsapp.png'

import portafolio from '../images/portafolio.png'
import html from '../images/html.png'
import css from '../images/css.png'
import react from '../images/react.png'




const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>PROYECTOS</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div className="container">


            <div className="box">
              <img src={sistemagym} alt="1" style={{height:"9rem", paddingTop: "2rem"}}/>
              <div className="Informacion">
                <h3 style={{ flexBasis: "40px" }}>Sistema de Gym</h3>
              <p className="small">Aplicación de escritorio desarrollada para el manejo de datos, con bases de datos relacionales, además implementando una api, para el envió de mensajes por WhatsApp.</p>
              <div className="tecnologias">
            <ComponentHabilidadChico title="Python" imagen={python} />
            <ComponentHabilidadChico title="Node" imagen={node} />
            <ComponentHabilidadChico title="Sqlite" imagen={sqlite} />
              </div>
              <div className="redes margen1rem">
              <a href="https://github.com/martingaidoo/SistemaGym"
                          target="_blank"
                          rel="noopener noreferrer">
              <button className="btn margen1rem">
              <svg width="40" height="40" fill="#0092E4" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24" id="github">
                <path d="M12,2.2467A10.00042,10.00042,0,0,0,8.83752,21.73419c.5.08752.6875-.21247.6875-.475,0-.23749-.01251-1.025-.01251-1.86249C7,19.85919,6.35,18.78423,6.15,18.22173A3.636,3.636,0,0,0,5.125,16.8092c-.35-.1875-.85-.65-.01251-.66248A2.00117,2.00117,0,0,1,6.65,17.17169a2.13742,2.13742,0,0,0,2.91248.825A2.10376,2.10376,0,0,1,10.2,16.65923c-2.225-.25-4.55-1.11254-4.55-4.9375a3.89187,3.89187,0,0,1,1.025-2.6875,3.59373,3.59373,0,0,1,.1-2.65s.83747-.26251,2.75,1.025a9.42747,9.42747,0,0,1,5,0c1.91248-1.3,2.75-1.025,2.75-1.025a3.59323,3.59323,0,0,1,.1,2.65,3.869,3.869,0,0,1,1.025,2.6875c0,3.83747-2.33752,4.6875-4.5625,4.9375a2.36814,2.36814,0,0,1,.675,1.85c0,1.33752-.01251,2.41248-.01251,2.75,0,.26251.1875.575.6875.475A10.0053,10.0053,0,0,0,12,2.2467Z"></path>
              </svg>
            </button>
              </a>
            <a href={window.location.href} target="_blank" rel="noopener noreferrer">
            <button className="btn margen1rem">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACLklEQVR4nO2WvW4TQRDHT5GSJogiEtyueQM3gRQEujg0REj5QCiPkI7K3nF5JQGqBPIEnP00kfBMrBAMNCE8AMpGSpoYzQlb571Yd3a8IUjzk7a43b3578fszASBIAiCIAiCINwqylF7JgTaVEBNBXSkgawG6qaa5X4e53k8/9ZoKDh4qQ39cIzlNPyua7RRdPF+NKLulAZ6N5rRwaYMvWU7/0RDG3x/HcN9AaDtYev3pqH4SjOT8FwZ3AmrrcWw2ppNz+dv7lcGPyiDFxkRQ+tXuo0PjXLUnnH9UQGdPKgfzAcFKNXaD3n+4DXjt2Brf7o3x6tGCLTpnkpRw32BeuuRe0oK8FX/NH1qKKCms7OdYAy0oY+O8bg35lVDGfqa7gzh8+M8Q0tN+6LSsCfLjbPuZJr9uRzblTzd+4BPHDc84shwmu68F7Xv5BlKBCe2+LOkVWJ7nKfLaxt8yHj6X21g7nXn7mA0wt9ZF6q2FnM3ENuVSW6iEtvjZ037PE+3VKOnGRdShhrOw9gNxkAD7TnX+6k35lUjvCLEcdwdybDBhVHD6MQ0ypxkuFBykkxRgcQw0C/n/04mkfnU0DXayKR5gxecxtnv3IfN33/9cS+b5vGyZHA1swjfGvqaVWJqUW+GnqRXjag7xaXq+IbxMqkSc8pp7xra0DoXSiOdCFBH13FtqNEb19jan+YXzrWGMvjFTXbJt8FDDmNJJEg92MLchIYgCIIgCIIgBD75A6UzYcAAQdYRAAAAAElFTkSuQmCC" alt="link"/>
        </button>
            </a>
              </div>
              </div>
            </div>


            <div className="box">
              <img src={botwhatsapp} alt="1" style={{height:"10rem", paddingTop: "2rem"}}/>
              <div className="Informacion">
                <h3 style={{ flexBasis: "40px" }}>Bot WhatsApp Turnero de peluquería</h3>
              <p className="small">Bot de whatsApp que responde consultas de clientes, registrado un turno para la peluquearía, su desarrollo cuenta con una base de datos no relacional, se utiliza el Framework node.js, y también hace uso de distintas Apis, como la de google calendar, o Google sheets.</p>
              <div className="tecnologias">
            <ComponentHabilidadChico title="JavaScript" imagen={javascript} />
            <ComponentHabilidadChico title="Node" imagen={node} />
            <ComponentHabilidadChico title="Mongo" imagen={mongo} />
              </div>
              <div className="redes margen1rem">
              <a href="https://github.com/martingaidoo/whatsapp-Bot-turnos"
                          target="_blank"
                          rel="noopener noreferrer">
              <button className="btn margen1rem">
              <svg width="40" height="40" fill="#0092E4" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24" id="github">
                <path d="M12,2.2467A10.00042,10.00042,0,0,0,8.83752,21.73419c.5.08752.6875-.21247.6875-.475,0-.23749-.01251-1.025-.01251-1.86249C7,19.85919,6.35,18.78423,6.15,18.22173A3.636,3.636,0,0,0,5.125,16.8092c-.35-.1875-.85-.65-.01251-.66248A2.00117,2.00117,0,0,1,6.65,17.17169a2.13742,2.13742,0,0,0,2.91248.825A2.10376,2.10376,0,0,1,10.2,16.65923c-2.225-.25-4.55-1.11254-4.55-4.9375a3.89187,3.89187,0,0,1,1.025-2.6875,3.59373,3.59373,0,0,1,.1-2.65s.83747-.26251,2.75,1.025a9.42747,9.42747,0,0,1,5,0c1.91248-1.3,2.75-1.025,2.75-1.025a3.59323,3.59323,0,0,1,.1,2.65,3.869,3.869,0,0,1,1.025,2.6875c0,3.83747-2.33752,4.6875-4.5625,4.9375a2.36814,2.36814,0,0,1,.675,1.85c0,1.33752-.01251,2.41248-.01251,2.75,0,.26251.1875.575.6875.475A10.0053,10.0053,0,0,0,12,2.2467Z"></path>
              </svg>
            </button>
              </a>
            <a href={window.location.href}
                        target="_blank"
                        rel="noopener noreferrer">
            <button className="btn margen1rem">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACLklEQVR4nO2WvW4TQRDHT5GSJogiEtyueQM3gRQEujg0REj5QCiPkI7K3nF5JQGqBPIEnP00kfBMrBAMNCE8AMpGSpoYzQlb571Yd3a8IUjzk7a43b3578fszASBIAiCIAiCINwqylF7JgTaVEBNBXSkgawG6qaa5X4e53k8/9ZoKDh4qQ39cIzlNPyua7RRdPF+NKLulAZ6N5rRwaYMvWU7/0RDG3x/HcN9AaDtYev3pqH4SjOT8FwZ3AmrrcWw2ppNz+dv7lcGPyiDFxkRQ+tXuo0PjXLUnnH9UQGdPKgfzAcFKNXaD3n+4DXjt2Brf7o3x6tGCLTpnkpRw32BeuuRe0oK8FX/NH1qKKCms7OdYAy0oY+O8bg35lVDGfqa7gzh8+M8Q0tN+6LSsCfLjbPuZJr9uRzblTzd+4BPHDc84shwmu68F7Xv5BlKBCe2+LOkVWJ7nKfLaxt8yHj6X21g7nXn7mA0wt9ZF6q2FnM3ENuVSW6iEtvjZ037PE+3VKOnGRdShhrOw9gNxkAD7TnX+6k35lUjvCLEcdwdybDBhVHD6MQ0ypxkuFBykkxRgcQw0C/n/04mkfnU0DXayKR5gxecxtnv3IfN33/9cS+b5vGyZHA1swjfGvqaVWJqUW+GnqRXjag7xaXq+IbxMqkSc8pp7xra0DoXSiOdCFBH13FtqNEb19jan+YXzrWGMvjFTXbJt8FDDmNJJEg92MLchIYgCIIgCIIgBD75A6UzYcAAQdYRAAAAAElFTkSuQmCC" alt="link"/>
        </button>
            </a>
              </div>
              </div>
            </div>


            <div className="box">
              <img src={portafolio} alt="1" style={{height:"10rem", paddingTop: "2rem"}}/>
              <div className="Informacion">
                <h3 style={{ flexBasis: "40px" }}>Mí portafolio</h3>
              <p className="small">Mi portafolio, desarrollada para mostrar mis habilidades, proyectos, y poder conectar con otros desarrolladores, se utilzó un template que fue modificada casi en su totalidad.</p>
              <div className="tecnologias">
            <ComponentHabilidadChico title="HTML" imagen={html} />
            <ComponentHabilidadChico title="CSS" imagen={css} />
            <ComponentHabilidadChico title="JavaScript" imagen={javascript} />
            <ComponentHabilidadChico title="React" imagen={react} />

              </div>
  

              <div className="redes margen1rem">
              <a href="https://github.com/martingaidoo/portafolioWeb"
                          target="_blank"
                          rel="noopener noreferrer">
              <button className="btn margen1rem">
              <svg width="40" height="40" fill="#0092E4" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24" id="github">
                <path d="M12,2.2467A10.00042,10.00042,0,0,0,8.83752,21.73419c.5.08752.6875-.21247.6875-.475,0-.23749-.01251-1.025-.01251-1.86249C7,19.85919,6.35,18.78423,6.15,18.22173A3.636,3.636,0,0,0,5.125,16.8092c-.35-.1875-.85-.65-.01251-.66248A2.00117,2.00117,0,0,1,6.65,17.17169a2.13742,2.13742,0,0,0,2.91248.825A2.10376,2.10376,0,0,1,10.2,16.65923c-2.225-.25-4.55-1.11254-4.55-4.9375a3.89187,3.89187,0,0,1,1.025-2.6875,3.59373,3.59373,0,0,1,.1-2.65s.83747-.26251,2.75,1.025a9.42747,9.42747,0,0,1,5,0c1.91248-1.3,2.75-1.025,2.75-1.025a3.59323,3.59323,0,0,1,.1,2.65,3.869,3.869,0,0,1,1.025,2.6875c0,3.83747-2.33752,4.6875-4.5625,4.9375a2.36814,2.36814,0,0,1,.675,1.85c0,1.33752-.01251,2.41248-.01251,2.75,0,.26251.1875.575.6875.475A10.0053,10.0053,0,0,0,12,2.2467Z"></path>
              </svg>
            </button>
              </a>
            <a href={window.location.href}
                        target="_blank"
                        rel="noopener noreferrer">
            <button className="btn margen1rem">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACLklEQVR4nO2WvW4TQRDHT5GSJogiEtyueQM3gRQEujg0REj5QCiPkI7K3nF5JQGqBPIEnP00kfBMrBAMNCE8AMpGSpoYzQlb571Yd3a8IUjzk7a43b3578fszASBIAiCIAiCINwqylF7JgTaVEBNBXSkgawG6qaa5X4e53k8/9ZoKDh4qQ39cIzlNPyua7RRdPF+NKLulAZ6N5rRwaYMvWU7/0RDG3x/HcN9AaDtYev3pqH4SjOT8FwZ3AmrrcWw2ppNz+dv7lcGPyiDFxkRQ+tXuo0PjXLUnnH9UQGdPKgfzAcFKNXaD3n+4DXjt2Brf7o3x6tGCLTpnkpRw32BeuuRe0oK8FX/NH1qKKCms7OdYAy0oY+O8bg35lVDGfqa7gzh8+M8Q0tN+6LSsCfLjbPuZJr9uRzblTzd+4BPHDc84shwmu68F7Xv5BlKBCe2+LOkVWJ7nKfLaxt8yHj6X21g7nXn7mA0wt9ZF6q2FnM3ENuVSW6iEtvjZ037PE+3VKOnGRdShhrOw9gNxkAD7TnX+6k35lUjvCLEcdwdybDBhVHD6MQ0ypxkuFBykkxRgcQw0C/n/04mkfnU0DXayKR5gxecxtnv3IfN33/9cS+b5vGyZHA1swjfGvqaVWJqUW+GnqRXjag7xaXq+IbxMqkSc8pp7xra0DoXSiOdCFBH13FtqNEb19jan+YXzrWGMvjFTXbJt8FDDmNJJEg92MLchIYgCIIgCIIgBD75A6UzYcAAQdYRAAAAAElFTkSuQmCC" alt="link"/>
        </button>
            </a>
              </div>
              </div>
            </div>


        </div>
      </div>
    </section>
  );
};

export default Portfolio;

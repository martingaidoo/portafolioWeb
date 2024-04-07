import React from 'react'
import "../styles/styleSkills.css"
import { ComponentHabilidad } from './ComponentHabilidad'

import html from "../images/html.png"
import css from "../images/css.png"
import javascript from "../images/javascript.png"
import python from "../images/python.png"
import java from "../images/java.png"
import react from "../images/react.png"
import node from "../images/node.png"
import express from "../images/express.png"
import git from "../images/git.png"
import github from "../images/github.png"
import npm from "../images/npm.png"
import figma from "../images/figma.png"
import photoshop from "../images/photoshop.png"
import bootstrap from '../images/bootstrap.png'
import mongo from '../images/mongo.png'
import postgresql from '../images/postgresql.png'




export const Skills = () => {
  return (
    <div id="skills">
    <h2 style={{ textAlign: "center" }}>HABILIDADES</h2>
    <h3>Lenguajes</h3>
    <div className='contenedorHabilidades'>
    <ComponentHabilidad imagen={html} nombre="HTML" valor="50%"/>
    <ComponentHabilidad imagen={css} nombre="css" valor="40%"/>
    <ComponentHabilidad imagen={javascript} nombre="javascript" valor="55%"/>
    <ComponentHabilidad imagen={python} nombre="python" valor="70%"/>
    <ComponentHabilidad imagen={java} nombre="java" valor="50%"/>
    </div>
    <h3>Frameworks y Librerías</h3>

    <div className='contenedorHabilidades'>
    <ComponentHabilidad imagen={react} nombre="react" valor="40%"/>
    <ComponentHabilidad imagen={node} nombre="node" valor="40%"/>
    <ComponentHabilidad imagen={express} nombre="express" valor="35%"/>
    </div>
    <h3>Tecnologías y Herramientas</h3>

    <div className='contenedorHabilidades'>
    <ComponentHabilidad imagen={git} nombre="git" valor="40%"/>
    <ComponentHabilidad imagen={github} nombre="github" valor="60%"/>
    <ComponentHabilidad imagen={npm} nombre="npm" valor="50%"/>
    <ComponentHabilidad imagen={figma} nombre="figma" valor="50%"/>
    <ComponentHabilidad imagen={photoshop} nombre="photoshop" valor="60%"/>
    <ComponentHabilidad imagen={bootstrap} nombre="bootstrap" valor="35%"/>

    </div>

    <h3>Bases De Datos</h3>
    <div className='contenedorHabilidades'>
    <ComponentHabilidad imagen={postgresql} nombre="PostgreSql" valor="40%"/>
    <ComponentHabilidad imagen={mongo} nombre="MongoDB" valor="40%"/>
    </div>
    </div>
  )
}

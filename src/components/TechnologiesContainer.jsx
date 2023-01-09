import React from 'react'
import {
    DiHtml5,
    DiCss3,
    DiJsBadge,
    DiReact,
    DiMysql,
    DiPython,
  } from "react-icons/di";
import '../styles/components/technologiescontainer.sass'

const technologies = [
    { id: "html", name: "HTML", icon: <DiHtml5 />, description: 'Linguagem de marcação utilizada para estruturar páginas web. Domínio de HTML semântico e clean code.' },
    { id: "css", name: "CSS", icon: <DiCss3 />, description: 'Linguagem de estilização para páginas web. Domínio do pré-processador Sass e design responsivo.' },
    { id: "js", name: "JavaScript", icon: <DiJsBadge />, description: 'Linguagem de programação utilizada para dinamizar páginas web. Domínio de POO, funções, modularização, DOM, assincronismo e APIs.' },
    { id: "react", name: "React", icon: <DiReact />, description: 'Library do JS voltada para o desenvolvimento de aplicações web, em especial no front-end. Domínio de componentes, estados e hooks.' },
    { id: "mysql", name: "MySQL", icon: <DiMysql />, description: 'Linguagem para consulta em bancos de dados. Domínio de modelagem de bancos relacionais nos modelos conceitual, lógico e físico (este fazendo uso da ferramenta MySQL).' },
    { id: "python", name: "Python", icon: <DiPython />, description: 'Linguagem de programação para propósitos gerais. Domínio de Programação estruturada, POO e estruturas de dados lineares e não lineares.' }
  ]

const TechnologiesContainer = () => {
  return (
    <section className="technologies-container">
        <h2>Tecnologias</h2>
        <div className="technologies-grid">
            {technologies.map((tech) => (
                <div className="technology-card" id={tech.id} key={tech.id}>
                    {tech.icon}
                    <div className="technology-info">
                        <h3>{tech.name}</h3>
                        <p>{tech.description}</p>
                    </div>
                </div>
            ))}
        </div>
    </section>
  )
}

export default TechnologiesContainer
import React from "react";

import "./AppSkills.scss";

const AppSkills = (props) => {
  return (
    <section className="skills-container" id="skills">
      <div className="section-main-title-container ">
        <p>Habilidades</p>
        <p>Minhas Habilidades</p>
      </div>

      <div className="skills-div" data-aos={props.aos}>
        <div className="skill">
          <p>Linguagens de Programação e Marcação</p>
          <ul>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JavaScript ES6</li>
            <li>TypeScript</li>
            <li>NodeJS</li>
            <li>PHP(Básico)</li>
          </ul>
        </div>
        <div className="skill">
          <p>Frameworks/Bibliotecas</p>
          <ul>
            <li>Angular 13</li>
            <li>ReactJS(Básico)</li>
            <li>Ionic 6</li>
            <li>ExpressJS</li>
            <li>Angular Material</li>
            <li>MaterialUI</li>
            <li>Bootstrap 4/5</li>
            <li>Semantic UI</li>
          </ul>
        </div>
        <div className="skill">
          <p>Outras</p>
          <ul>
            <li>Git</li>
            <li>Sass</li>
            <li>UI/UX</li>
            <li>ApiRest</li>
            <li>Kanban/Jira</li>
            <li>Inglês(Fluente)</li>
          </ul>
        </div>
      </div>
    </section>
  );
};
export default AppSkills;

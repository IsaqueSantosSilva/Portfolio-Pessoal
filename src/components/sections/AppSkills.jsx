import React, { useEffect, useState } from "react";
import axios from "axios";

import "./AppSkills.scss";

const AppSkills = (props) => {
  const [skills1, setSkills1] = useState([]);
  const [skills2, setSkills2] = useState([]);
  const [skills3, setSkills3] = useState([]);

  var getSkills = () => {
    axios
      .get("https://mysterious-stream-07171.herokuapp.com/skills")
      .then((res) => {
        const skills = res.data;
        setSkills1(skills.skills1);
        setSkills2(skills.skills2);
        setSkills3(skills.skills3);
      });
  };

  useEffect(() => getSkills());

  return (
    <div className="skills-container" id="skills">
      <div className="section-main-title-container ">
        <p>Habilidades</p>
        <p>Minhas Habilidades</p>
      </div>

      <div className="skills-div" data-aos={props.aos}>
        <div className="skill">
          <p>Linguagens de Programação e Marcação</p>
          <ul>
            {skills1.map((skills) => (
              <li key={skills}>{skills}</li>
            ))}
          </ul>
        </div>
        <div className="skill">
          <p>Frameworks e Bibliotecas</p>
          <ul>
            {skills2.map((skills) => (
              <li key={skills}>{skills}</li>
            ))}
          </ul>
        </div>
        <div className="skill">
          <p>Outras</p>
          <ul>
            {skills3.map((skills) => (
              <li key={skills}>{skills}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default AppSkills;

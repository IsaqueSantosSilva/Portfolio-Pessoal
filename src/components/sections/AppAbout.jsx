import React from "react";
import "./AppAbout.scss";

import Button from "../reusable/Button";
import LanguageCard from "../reusable/LanguageCard";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faAngleDoubleRight,
  faMouse,
  faCaretRight,
  faDownload,
  faExternalLinkAlt,
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faAngleDoubleRight,
  faMouse,
  faCaretRight,
  faDownload,
  faExternalLinkAlt
);

const AppAbout = (props) => {
  return (
    <div className="about-container" id="about">
      <div className="section-main-title-container ">
        <p>Sobre Mim</p>
        <p>Um pouco sobre mim</p>
      </div>

      <div className="about-details" data-aos={props.aos}>
        <div className="about">
          <span>
            Sou formado em Análise e Desenvolvimento de Sistemas e estou
            estudando para me tornar o melhor desenvolvedor front-end. Tenho
            experiência trabalhando como freelancer e espero no futuro poder
            editar este portfólio com muito mais informações.
          </span>
        </div>

        <div className="details">
          <div className="experience-div">
            <div className="experience">
              <p>2-</p>
              <p>Anos de experiência como freelancer</p>
            </div>
            <div className="experience">
              <p>2-</p>
              <p>Anos de experiência em projetos pessoais</p>
            </div>
          </div>
          <Button
            function={() =>
              window.open(
                "https://mysterious-stream-07171.herokuapp.com/downloadcv"
              )
            }
            name={"Baixar CV"}
            icon={
              <FontAwesomeIcon className="icon" icon="fa-solid fa-download" />
            }
          />
        </div>
      </div>
      <LanguageCard dataAos={props.aos2} />
    </div>
  );
};
export default AppAbout;

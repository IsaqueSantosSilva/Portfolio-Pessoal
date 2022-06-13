import React from "react";
import "./AppAbout.scss";

import Button from "../reusable/Button";
import LanguageCard from "../reusable/LanguageCard";

import CVfile from "../../assets/IsaqueSilvaCV.pdf";

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

/**
 * It creates a link to the file and then clicks it.
 */
const downloadFunc = () => {
  var anchor = document.createElement("a");
  anchor.setAttribute("href", CVfile);
  anchor.setAttribute("download", "");
  document.body.appendChild(anchor);
  anchor.click();
  anchor.parentNode.removeChild(anchor);
};

const AppAbout = (props) => {
  return (
    <section className="about-container" id="about">
      <div className="section-main-title-container ">
        <p>Sobre Mim</p>
        <p>Um pouco sobre mim</p>
      </div>

      <div id="info" data-aos={props.aos}>
        <div className="row">
          <div className="leftside-info">
            <div className="card">
              <h2>Quem sou eu?</h2>

              <div className="aboutme-desc">
                <p>
                  Meu nome é Isaque tenho 23 anos e sou formado em Anáise e
                  Desenvolvimentos de Sistemas.
                </p>

                <p>
                  Meus hobbies são jogar jogos eletronicos, tocar violão e
                  assistir filme. Meu jogo favorito é Shadow of the Colossos e
                  meu filme favorito é Guerra dos Mundos com Tom Cruise.
                </p>
                <p>
                  Meus interesses pessoais incluem programar por diversão,
                  aprender novas tecnologias e sair com amigos.
                </p>
              </div>
            </div>
            <LanguageCard dataAos={props.aos2} />
          </div>

          <div className="card">
            <h2>experiência</h2>
            <div className="experience-div">
              <div className="experience-info">
                <span className="start-year">2020 - Agora</span>
                <div>
                  <b>Projetos Pessoais</b>
                  <ul>
                    <li>
                      Produzindo projetos pessoais ultilizando HTML, CSS,
                      JavaScript e diversos frameworks como principais
                      ferramentas.
                    </li>
                    <li>
                      Desenvolvendo projetos colaborativos com amigos e
                      conhecidos ultilizando Git como principal ferramenta de
                      versionamento de códigos.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="experience-info">
                <span className="start-year">2021 - 2022</span>
                <div>
                  <b>Freelancer</b>
                  <ul>
                    <li>
                      Desenvolvi aplicações responsivas para web com
                      funcionalidades front-end e back-end.
                    </li>
                    <li>
                      Implementei e modifiquei recursos de páginas existentes.
                    </li>
                    <li>
                      Trabalhei ultilizando ferramentas como HTML, CSS,
                      JavaScript, PHP e Jquery com framekworks como Angular,
                      Ionic e Bootstrap 5.
                    </li>
                  </ul>
                  <Button
                    function={() => downloadFunc()}
                    name={"Baixar CV"}
                    icon={
                      <FontAwesomeIcon
                        className="icon"
                        icon="fa-solid fa-download"
                      />
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AppAbout;

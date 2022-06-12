import React from "react";
import "./AppHome.scss";

import Button from "../reusable/Button";

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

const AppHome = (props) => {
  return (
    <div className="home-container" id="home">
      <div
        className="profile-container"
        data-aos={props.aos}
        data-aos-duration={props.aosDuration}
      >
        <div className="home-links-div">
          <li
            onClick={() =>
              window.open("https://www.linkedin.com/in/isaque-silva-63843a202/")
            }
          >
            <FontAwesomeIcon
              className={"home-links-icon"}
              icon="fab fa-linkedin"
            />
          </li>
          <li
            onClick={() =>
              window.open(
                "https://api.whatsapp.com/send?phone=558296492140&text=sua%20mensagem"
              )
            }
          >
            <FontAwesomeIcon
              className={"home-links-icon"}
              icon="fab fa-whatsapp-square"
            />
          </li>
          <li
            onClick={() => window.open("https://github.com/IsaqueSantosSilva")}
          >
            <FontAwesomeIcon
              className={"home-links-icon"}
              icon="fab fa-github"
            />
          </li>
          <li
            onClick={() =>
              window.open("https://www.freelancer.com/u/IsaacSSilva")
            }
          >
            <FontAwesomeIcon
              className={"home-links-icon"}
              icon="fas fa-people-arrows"
            />
          </li>
        </div>
        <div className="image-div">
          <div className="glitch">

            <div className="glitch__item"></div>
            <div className="glitch__item"></div>
            <div className="glitch__item"></div>
            <div className="glitch__item"></div>
            <div className="glitch__item"></div>
          </div>
        </div>

        <div className="intro-div">
          <div className="name-div">
            <span>I</span>
            <span>s</span>
            <span>a</span>
            <span>q</span>
            <span>u</span>
            <span>e</span> &nbsp;
            <span>S</span>
            <span>i</span>
            <span>l</span>
            <span>v</span>
            <span>a</span>
            <p>Desenvolvedor Front-End</p>
          </div>
          <div className="intro-description">
            <p>
              Conhecimento em desenvolvimento para web, produzindo design
              responsivo.
            </p>
            <Button
              function={props.scrollFunction}
              name={"Contato"}
              icon={
                <FontAwesomeIcon
                  className="icon"
                  icon="fa-solid fa-caret-right"
                />
              }
            />
          </div>
        </div>
      </div>

      <div className="scroll-down-div">
        <span onClick={props.scrollToAbout}>
          <FontAwesomeIcon icon="fa-solid fa-mouse" />
          <p>Rolar para baixo</p>
          <FontAwesomeIcon
            className="icon"
            icon="fa-solid fa-angle-double-right"
          />
        </span>
      </div>
    </div>
  );
};
export default AppHome;

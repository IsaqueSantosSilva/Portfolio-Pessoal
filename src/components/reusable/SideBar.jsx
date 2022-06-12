import React from "react";
import "./SideBar.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faHome,
  faUser,
  faBookOpen,
  faAtom,
  faPhoneSquare,
  faTimes,
  faAngleRight,
  faPeopleArrows,
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faHome,
  faUser,
  faBookOpen,
  faAtom,
  faPhoneSquare,
  faTimes,
  faAngleRight,
  faPeopleArrows
);

const SideBar = (props) => {
  return (
    <div className="sidebar" style={props.sideBarState}>
      <div className="header">
        <span>Menu</span>
        <span onClick={props.closeSidebar}>
          <FontAwesomeIcon icon="fas fa-times" />
        </span>
      </div>

      <div className="menu-options-container">
        <div className="menu-options navegation">
          <p>Navegação:</p>
          <li onClick={props.scrollHome}>
            <FontAwesomeIcon icon="fas fa-home" /> Início
          </li>
          <li onClick={props.scrollAbout}>
            <FontAwesomeIcon icon="fas fa-user" /> Sobre
          </li>
          <li onClick={props.scrollPort}>
            <FontAwesomeIcon icon="fas fa-book-open" /> Portofólio
          </li>
          <li onClick={props.scrollSkills}>
            <FontAwesomeIcon icon="fas fa-atom" /> Habilidades
          </li>
          <li onClick={props.scrollContact}>
            <FontAwesomeIcon icon="fas fa-phone-square" /> Contato
          </li>
        </div>

        <div className="menu-options contact">
          <p>Contato:</p>
          <li
            onClick={() =>
              window.open("https://www.linkedin.com/in/isaque-silva-63843a202/")
            }
          >
            <FontAwesomeIcon icon="fab fa-linkedin" /> Linkedin
            <FontAwesomeIcon className="arrow-icon" icon="fas fa-angle-right" />
          </li>
          <li
            onClick={() =>
              window.open(
                "https://api.whatsapp.com/send?phone=558296492140&text=sua%20mensagem"
              )
            }
          >
            <FontAwesomeIcon icon="fab fa-whatsapp-square" /> Whatsapp
            <FontAwesomeIcon className="arrow-icon" icon="fas fa-angle-right" />
          </li>
          <li
            onClick={() => window.open("https://github.com/IsaqueSantosSilva")}
          >
            <FontAwesomeIcon icon="fab fa-github" /> Github
            <FontAwesomeIcon className="arrow-icon" icon="fas fa-angle-right" />
          </li>
          <li
            onClick={() =>
              window.open("https://www.freelancer.com/u/IsaacSSilva")
            }
          >
            <FontAwesomeIcon icon="fas fa-people-arrows" /> Freelancer
            <FontAwesomeIcon className="arrow-icon" icon="fas fa-angle-right" />
          </li>
        </div>
      </div>
    </div>
  );
};
export default SideBar;

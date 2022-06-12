import React from "react";
import "./FooterMenu.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faHome,
  faUser,
  faBookOpen,
  faAtom,
  faPhoneSquare,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { faWhatsappSquare } from "@fortawesome/free-brands-svg-icons";

library.add(
  faHome,
  faUser,
  faBookOpen,
  faAtom,
  faPhoneSquare,
  faTimes,
  faWhatsappSquare
);

const FooterMenu = (props) => {
  return (
    <div className="footer-menu" style={props.footerMenuToggle}>
      <div onClick={props.scrollHome} className="menu-opition">
        <FontAwesomeIcon className="icon" icon="fas fa-home" />
        <span>Início</span>
      </div>
      <div onClick={props.scrollAbout} className="menu-opition">
        <FontAwesomeIcon className="icon" icon="fas fa-user" />
        <span>Sobre</span>
      </div>
      <div onClick={props.scrollPort} className="menu-opition">
        <FontAwesomeIcon className="icon" icon="fas fa-book-open" />
        <span>Portofólio</span>
      </div>
      <div onClick={props.scrollSkill} className="menu-opition">
        <FontAwesomeIcon className="icon" icon="fas fa-atom" />
        <span>Habilidades</span>
      </div>
      <div onClick={props.scrollContact} className="menu-opition">
        <FontAwesomeIcon className="icon" icon="fas fa-phone-square" />
        <span>Contato</span>
      </div>

      <div
        className="menu-opition"
        onClick={() =>
          window.open("https://www.linkedin.com/in/isaque-silva-63843a202/")
        }
      >
        <FontAwesomeIcon className="icon" icon="fab fa-linkedin" />
        <span>Linkedin</span>
      </div>
      <div
        className="menu-opition"
        onClick={() =>
          window.open(
            "https://api.whatsapp.com/send?phone=558296492140&text=sua%20mensagem"
          )
        }
      >
        <FontAwesomeIcon className="icon" icon="fab fa-whatsapp-square" />
        <span>Whatsapp</span>
      </div>
      <div
        className="menu-opition"
        onClick={() => window.open("https://github.com/IsaqueSantosSilva")}
      >
        <FontAwesomeIcon className="icon" icon="fab fa-github" />
        <span>Github</span>
      </div>
    </div>
  );
};
export default FooterMenu;

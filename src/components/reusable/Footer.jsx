import React from "react";
import "./Footer.scss";

import ThemeSwitch from './ThemeSwitch'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";

import {
  faEllipsisVertical,
  faMoon,
  faBars,
  faHome,
  faUser,
  faAddressCard,
  faAtom,
  faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";

import {
  faGithub,
  faLinkedin,
  faWhatsappSquare,
} from "@fortawesome/free-brands-svg-icons";

library.add(
  faEllipsisVertical,
  faMoon,
  faBars,
  faHome,
  faUser,
  faAddressCard,
  faAtom,
  faPhoneAlt,
  faGithub,
  faLinkedin,
  faWhatsappSquare
);

const Footer = (props) => {
  return (
    <footer className="footer">
      <div className="my-name">Isaque</div>
      <div className="buttons">
        <ThemeSwitch className="icon-moon" />
        <FontAwesomeIcon onClick={props.function} icon="fas fa-bars" />
      </div>
    </footer>
  );
};
export default Footer;

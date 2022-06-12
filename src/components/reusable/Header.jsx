import React from "react";
import "./Header.scss";

import ThemeSwitch from "./ThemeSwitch";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEllipsisVertical, faMoon } from "@fortawesome/free-solid-svg-icons";

library.add(faEllipsisVertical, faMoon);

const Header = (props) => {
  return (
    <div className="Header">
      <div className="Name-div">Isaque</div>
      <div className="navLinks-div">
        <div className="Nav-Links">
          <li onClick={props.scrollHome}>Início</li>
          <li onClick={props.scrollAbout}>Sobre</li>
          <li onClick={props.scrollPort}>Portfólio</li>
          <li onClick={props.scrollSkill}>Habilidades</li>
          <li onClick={props.scrollContact}>Contato</li>
        </div>
        <div className="header-theme-switch-div">
          <ThemeSwitch className={"icon-moon"}/>
        </div>
        <div className="header-menu-button">
          <FontAwesomeIcon
            onClick={props.openSideBar}
            className="menu-icon"
            icon="fa-solid fa-ellipsis-vertical"
          />
        </div>
      </div>
    </div>
  );
};
export default Header;

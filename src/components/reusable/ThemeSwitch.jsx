import React, { useState, useEffect } from "react";
import "./ThemeSwitch.scss";

import Switch from "react-switch";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

library.add(faMoon, faSun);

let darkMode = localStorage.getItem("darkMode");

const enableDarkMode = () => {
  document.documentElement.setAttribute("data-theme", "dark");
  localStorage.setItem("darkMode", "enabled");
};

const disableDarkMode = () => {
  localStorage.setItem("darkMode", null);
};

const ThemeSwitch = () => {
  const [buttonIncon, setButtonIcon] = useState("fas fa-sun");
  const [checked, setChecked] = useState(false);

  /**
   * If the dark mode is not enabled, enable it, set the checkbox to true, and set the button icon to the
   * moon. Otherwise, disable it, set the checkbox to false, and set the button icon to the sun.
  */
  const changeTheme = () => {
    darkMode = localStorage.getItem("darkMode");
    window.location.reload(true);

    if (darkMode !== "enabled") {
      enableDarkMode();
      setChecked(true);
      setButtonIcon("fas fa-moon");
    } else {
      disableDarkMode();
      setChecked(false);
      setButtonIcon("fas fa-sun");
    }
  };

  useEffect(() => {
    if (darkMode === "enabled") {
      enableDarkMode();
      setChecked(true);
      setButtonIcon("fas fa-moon");
    } else {
      setChecked(false);
      setButtonIcon("fas fa-sun");
    }
  }, []);

  return (
    <div className="themeSwitch-container">
      <button className="darkSwitch-btn" onClick={() => changeTheme()}>
        <FontAwesomeIcon className="icon-moon" icon={buttonIncon} />
      </button>
      <div className="slider">
        <Switch
          offColor="#222"
          height={17}
          width={40}
          onChange={() => changeTheme()}
          checked={checked}
        />
      </div>
    </div>
  );
};

export default ThemeSwitch;

import React, { useState, useEffect } from "react";
import "./ThemeSwitch.scss";

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

  const changeTheme = () => {
    darkMode = localStorage.getItem("darkMode");
    window.location.reload(true);

    if (darkMode !== "enabled") {
      enableDarkMode();
      setButtonIcon("fas fa-moon");
    } else {
      disableDarkMode();
      setButtonIcon("fas fa-sun");
    }
  };

  useEffect(() => {
    if (darkMode === "enabled") {
      enableDarkMode();
      setButtonIcon("fas fa-moon");
    } else {
      setButtonIcon("fas fa-sun");
    }
  }, []);

  return (
    <div>
      <button className="darkSwitch-btn" onClick={() => changeTheme()}>
        <FontAwesomeIcon className="icon-moon" icon={buttonIncon} />
      </button>
    </div>
  );
};

export default ThemeSwitch;

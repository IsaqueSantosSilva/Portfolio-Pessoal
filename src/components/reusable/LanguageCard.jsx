import React, { useState, useEffect } from "react";
import axios from "axios";

import "./LanguageCard.scss";

const url = "https://api.github.com/users/IsaqueSantosSilva/repos";

/**
 * It takes two numbers, divides the first by the second, multiplies the result by 100, and returns the
 * result as a string with two decimal places.
 * @returns The percentage of the total.
 */
const percentage = (percent, total) => {
  return ((percent / total) * 100).toFixed(2);
};

const LanguageCard = (props) => {
  const [langs, setLangs] = useState([]);

  const getLangs = () => {
    axios.get(url).then((response) => {
      let js = 0;
      let ts = 0;
      let php = 0;
      let html = 0;
      let css = 0;
      let scss = 0;

      for (let i = 0; i < response.data.length; i++) {
        var res = response.data[i].language;

        if (res === "JavaScript") {
          js++;
        }
        if (res === "TypeScript") {
          ts++;
        }
        if (res === "PHP") {
          php++;
        }
        if (res === "HTML") {
          html++;
        }
        if (res === "CSS") {
          css++;
        }
        if (res === "SCSS") {
          scss++;
        }
      }

      setLangs({
        js: js,
        ts: ts,
        php: php,
        html: html,
        css: css,
        scss: scss,
      });
    });
  };

  useEffect(() => getLangs(), []);

  const total = langs.js + langs.ts + langs.html + langs.css + langs.scss;

  const myObj = [
    { name: "css", value: percentage(langs.css, total) + "%" },
    { name: "ts", value: percentage(langs.ts, total) + "%" },
    { name: "js", value: percentage(langs.js, total) + "%" },
    { name: "scss", value: percentage(langs.scss, total) + "%" },
    { name: "html", value: percentage(langs.html, total) + "%" },
  ];

  return (
    <>
      <div className="percentage-main-container">
        <p>Linguagens Mais usadas</p>
        {myObj.map((langs) => (
          <div className="percentage-container" key={langs.name} data-aos={props.dataAos}>
            <div className="percentage-bar">
              <div className={`bar ${langs.name}`} style={{ width: langs.value }}>
                <span>{langs.name}</span>
                </div>
            </div>
            <div className="percentage-value">
              <span>{langs.value}</span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default LanguageCard;

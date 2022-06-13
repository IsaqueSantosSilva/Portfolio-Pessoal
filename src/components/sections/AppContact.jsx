import React, { useState } from "react";
import axios from "axios";

import Tooltip from "../reusable/Tooltip";

import "./AppContact.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faMapMarkerAlt,
  faPhoneAlt,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

import {
  faLinkedin,
  faGithub,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

library.add(
  faMapMarkerAlt,
  faPhoneAlt,
  faEnvelope,
  faLinkedin,
  faGithub,
  faWhatsapp
);

const AppContact = (props) => {
  const [name, setName] = useState("");
  const [contact, setContactInfo] = useState("");
  const [description, setDescription] = useState("");

  const [disable, setDisable] = useState(false);
  const [style, setOpacity] = useState();
  const [visibility, setOpacityBntMsg] = useState();
  const [buttonSpinning, setButtonSpinning] = useState();

  const [tooltip, setToggleTooltip] = useState({ left: "-333px" });
  const [tooltipMsg, setTooltipMsg] = useState();

  const toggleTooltip = (position, bgColor, msg) => {
    setToggleTooltip({ left: position, backgroundColor: bgColor });
    setTooltipMsg(msg);
    setInterval(() => {
      setToggleTooltip({ left: "-333px" });
    }, 3000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const arrayData = { name, contact, description };

    if (
      arrayData.name &&
      arrayData.contact &&
      arrayData.contact &&
      arrayData.description
    ) {
      setDisable(true);
      setOpacity({ opacity: "0.7" });
      setOpacityBntMsg("hidden");
      setButtonSpinning("button--loading");

      let res = await axios.post(
        "https://mysterious-stream-07171.herokuapp.com/send",
        { arrayData }
      );
      let data = res.data;

      if (data === "success") {
        toggleTooltip("10px", "green", "Menssagem enviada!");
      } else if (data === "error") {
        toggleTooltip("10px", "red", "Erro ao enviar mensagem!");
      }

      setDisable(false);
      setOpacity(1);
      setOpacityBntMsg("visible");
      setButtonSpinning("");
    } else {
      toggleTooltip("10px", "red", "Por favor, preencha todos os campos!");
    }
  };

  return (
    <>
      <Tooltip
        children={tooltipMsg}
        tooltip={tooltip}
        closeTooltip={() => toggleTooltip("-333px", "red")}
      />

      <section className="contact-container" id="contact">
        <div className="section-main-title-container ">
          <p>Contato</p>
          <p>Meios para entrar em contato comigo</p>
        </div>

        <div className="form-container" data-aos={props.aos}>
          <div className="form-inputs" >
            <form id="myForm" onSubmit={handleSubmit} autoComplete={"off"}>
              <div className="input-group">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Seu Nome"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="contact"
                    placeholder="Seu contato"
                    value={contact}
                    onChange={(e) => setContactInfo(e.target.value)}
                  />
                </div>
                <div>
                  <textarea
                    name="details"
                    rows="10"
                    placeholder="Menssagem"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  ></textarea>
                </div>
              </div>

              <button
                disabled={disable}
                style={{ style }}
                className={buttonSpinning}
              >
                <span style={{ visibility }}>Enviar</span>
              </button>
            </form>
          </div>

          <div className="form-contact-info">
            <div className="personal-info">
              <div className="info">
                <div>
                  <FontAwesomeIcon
                    className="form-icon"
                    icon="fas fa-map-marker-alt"
                  />
                </div>
                <span>Alagoas</span>
              </div>
              <div className="info">
                <div>
                  <FontAwesomeIcon
                    className="form-icon"
                    icon="fas fa-phone-alt"
                  />
                </div>
                <span>(82) 9649-2140</span>
              </div>
              <div className="info">
                <div>
                  <FontAwesomeIcon
                    className="form-icon"
                    icon="fas fa-envelope"
                  />
                </div>
                <span>g1isaque.santos@gmail.com</span>
              </div>

              <hr />
            </div>
            <div className="personal-info-links">
              <FontAwesomeIcon className="icon" icon="fab fa-github" />
              <FontAwesomeIcon className="icon" icon="fab fa-linkedin" />
              <FontAwesomeIcon className="icon" icon="fab fa-whatsapp" />
            </div>
            <div className="rights-reserved-div">
              <hr />
              <span>© NO RIGHTS RESERVED</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default AppContact;

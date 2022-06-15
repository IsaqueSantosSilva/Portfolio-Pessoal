import React, { useEffect, useState } from "react";
import axios from "axios";

import "./AppPortofolio.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

import { EffectCoverflow, Pagination, Navigation } from "swiper";

const AppPortofolio = (props) => {
  const [repo, seRepo] = useState([]);

  var getRepo = () => {
    axios
      .get("https://api.github.com/users/IsaqueSantosSilva/repos")
      .then((res) => {
        const myRepo = res.data;
        seRepo(myRepo);
      });
  };

  useEffect(() => getRepo(), []);

  return (
    <section className="potofolio-container" id="portofolio">
      <div className="section-main-title-container ">
        <p>Portfólio</p>
        <p>Meus portfólios do GitHub</p>
      </div>

      <Swiper
        data-aos={props.aos}
        effect={"coverflow"}
        grabCursor={true}
        spaceBetween={20}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        pagination={{
          type: "progressbar",
          clickable: true,
        }}
        navigation={true}
        scrollbar={{ draggable: true }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="mySwiper"
      >
        {repo.map((repos) => (
          <SwiperSlide
            key={repos.name}
            className="swiper-slider"
            id={repos.name}
          >
            <div className="img-card-div">
              <img
                src={`https://raw.githubusercontent.com/ZekaBoga/imagens-salvas/main/Portofolio-Templates/${repos.name}.webp`}
                alt={`imagem para ${repos.name}`}
              />
            </div>

            <div className="card-details-div">
              <p className="card-title">{repos.name}</p>
              <div className="card-details">
                <p>Descrição:</p>
                <p>{repos.description}</p>
              </div>
              <div className="card-details">
                <p>Tecnologias:</p>
                <p>{repos.topics + ""}</p>
              </div>
              <div className="card-details">
                <p>Criado em:</p>
                <p>{repos.created_at}</p>
              </div>
              <div className="card-buttons">
                <a
                  href={repos.homepage}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Demo
                </a>
                <a
                  href={repos.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Repositório
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
export default AppPortofolio;

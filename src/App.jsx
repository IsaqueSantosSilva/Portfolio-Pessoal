import React, { useState, useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import AppHome from "./components/sections/AppHome";
import AppAbout from "./components/sections/AppAbout";
import AppPortofolio from "./components/sections/AppPortofolio";
import AppSkills from "./components/sections/AppSkills";
import AppContact from "./components/sections/AppContact.jsx";

import Header from "./components/reusable/Header";
import SideBar from "./components/reusable/SideBar";
import Preloader from "./components/reusable/Preloader";
import Footer from "./components/reusable/Footer";
import ScrollTopButton from "./components/reusable/ScrollTopButton";
import FooterMenu from "./components/reusable/FooterMenu";

const App = () => {
  const [sideBarState, setSideBarState] = useState();
  const [preloader, setPreloader] = useState(true);
  const [renderPage, setRenderPage] = useState(true);
  const [FooterMenuToggle, setFooterMenuToggle] = useState({ right: "-333px" });

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  window.addEventListener("load", () => {
    setPreloader(false);
    document.body.style.overflowY = "scroll";
    setRenderPage(true);
    window.scrollTo(0, 0);
  });

  const intoView = (id) => {
    document.getElementById(id).scrollIntoView();
    setSideBarState({ right: "-333px" });
    setFooterMenuToggle({ bottom: "-333px" });
  };

  const closeMenus = () => {
    setSideBarState({ right: "-333px" });
    setFooterMenuToggle({ bottom: "-333px" });
  };

  const toggleSidebar = (position) => {
    setSideBarState({ right: position });
  };

  const toggleFooterMenu = () => {
    if (FooterMenuToggle.bottom === "-333px") {
      setFooterMenuToggle({ bottom: "40px" });
      return;
    } else {
      setFooterMenuToggle({ bottom: "-333px" });
    }
  };

  return renderPage ? (
    <>
      <Preloader trigger={preloader} />
      <Header
        openSideBar={() => toggleSidebar("0px")}
        scrollHome={() => intoView("home")}
        scrollAbout={() => intoView("about")}
        scrollPort={() => intoView("portofolio")}
        scrollSkill={() => intoView("skills")}
        scrollContact={() => intoView("contact")}
      />

      {/* Main Content Start */}
      <main className="main" onClick={() => closeMenus()}>
        <AppHome
          scrollFunction={() => intoView("contact")}
          scrollToAbout={() => intoView("about")}
          aos={"zoom-out"}
          aosDuration={2000}
        />

        <AppAbout aos={"fade-up-right"} aos2={"flip-up"} />
        <AppPortofolio aos={"fade-up-left"} />
        <AppSkills aos={"flip-down"} />
        <AppContact aos={"fade-up-left"} />
      </main>
      {/* Main Content End */}

      <SideBar
        sideBarState={sideBarState}
        closeSidebar={() => toggleSidebar("-333px")}
        scrollHome={() => intoView("home")}
        scrollAbout={() => intoView("about")}
        scrollPort={() => intoView("portofolio")}
        scrollSkills={() => intoView("skills")}
        scrollContact={() => intoView("contact")}
      />

      <FooterMenu
        footerMenuToggle={FooterMenuToggle}
        scrollHome={() => intoView("home")}
        scrollAbout={() => intoView("about")}
        scrollPort={() => intoView("portofolio")}
        scrollSkill={() => intoView("skills")}
        scrollContact={() => intoView("contact")}
      />

      <Footer function={() => toggleFooterMenu()} />

      <ScrollTopButton ScrollTop={() => intoView("home")} />
    </>
  ) : (
    ""
  );
};

export default App;

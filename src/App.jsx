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
  const [FooterMenuToggle, setFooterMenuToggle] = useState({ right: "-333px" });

  /* A hook that is used to perform side effects in function components. It serves the same purpose as
  componentDidMount, componentDidUpdate, and componentWillUnmount in React classes, but unified into a
  single API. */
  useEffect(() => {
    AOS.init();
    AOS.refresh();
    setTimeout(() => {
      setPreloader(false);
    }, 200);

  }, []);

  /**
   * When the user clicks on a link in the side bar, the side bar closes and the page scrolls to the
   * section of the page that the user clicked on.
   */
  const intoView = (id) => {
    document.getElementById(id).scrollIntoView();
    setSideBarState({ right: "-333px" });
    setFooterMenuToggle({ bottom: "-333px" });
  };

  /**
   * When the user clicks on the close button, the side bar and footer menu will close.
   */
  const closeMenus = () => {
    setSideBarState({ right: "-333px" });
    setFooterMenuToggle({ bottom: "-333px" });
  };

  /**
   * The toggleSidebar function takes a position argument and sets the right property of the sidebar
   * state to the position argument.
   */
  const toggleSidebar = (position) => {
    setSideBarState({ right: position });
  };

  /**
   * If the bottom property of the FooterMenuToggle object is equal to -333px, then set the bottom
   * property of the FooterMenuToggle object to 40px. Otherwise, set the bottom property of the
   * FooterMenuToggle object to -333px.
   * @returns the value of the bottom property of the FooterMenuToggle object.
   */
  const toggleFooterMenu = () => {
    if (FooterMenuToggle.bottom === "-333px") {
      setFooterMenuToggle({ bottom: "40px" });
      return;
    } else {
      setFooterMenuToggle({ bottom: "-333px" });
    }
  };

  return (
    <>
      <Header
        openSideBar={() => toggleSidebar("0px")}
        scrollHome={() => intoView("home")}
        scrollAbout={() => intoView("about")}
        scrollPort={() => intoView("portofolio")}
        scrollSkill={() => intoView("skills")}
        scrollContact={() => intoView("contact")}
      />

      {preloader ? (
        <Preloader trigger={preloader} />
      ) : (
        <main className="main" onClick={() => closeMenus()}>
          <AppHome
            scrollFunction={() => intoView("contact")}
            scrollToAbout={() => intoView("about")}
            aos={"zoom-out"}
            aosDuration={2000}
          />

          <AppAbout aos={"fade-up"} aos2={"flip-up"} />
          <AppPortofolio aos={"fade-up"} />
          <AppSkills aos={"fade-up"} />
          <AppContact aos={"fade-up"} />
        </main>
      )}

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
  );
};

export default App;

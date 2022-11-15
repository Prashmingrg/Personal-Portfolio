import React from "react";
import "./Header.css";
import CTA from "./CTA";
import me from "../../assets/prasmin-removebg-preview.png";

import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Prashmin Gurung</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA></CTA>
        <HeaderSocials />

        <div className="me">
          <img src={me} alt="profile" />
        </div>

        <a href="#contact" className="scoll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;

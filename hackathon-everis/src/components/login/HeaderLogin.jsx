import React from "react";
import "./login.css";
import logo_everis from "../../images/logo_everis.png";
import Hour from "./Hour";

export const HeaderLogin = () => {
  return (
    <div className="container-header">
      <div className="container-left">
        <Hour />
      </div>
      <div className="container-right">
        <div className="header-text">Space Management Model</div>
        <img src={logo_everis} alt="Everis Logo" width="190px" height="94px" />
      </div>
    </div>
  );
};

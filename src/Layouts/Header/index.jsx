import React from "react";
import ButtonToggler from "./ButtonToggler";
import Navbar from "./Navbar";
import "../../Assets/Styles/Header.scss" ; 

function Header(props) {
  return (
    <header>
      <div className="container header-section">
        <ButtonToggler togglerName="el-navbar" />
        <a href="#" className="header-logo">
          i ❤ English 
        </a>
        <Navbar togglerName="el-navbar" /> 
        <button className="fa fa-user-secret header-login" aria-hidden="true"></button>
      </div>
    </header>
  );
}

export default Header;

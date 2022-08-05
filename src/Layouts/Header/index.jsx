import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import ButtonToggler from "./ButtonToggler";
import Navbar from "./Navbar";

function Header() {
  const layoutUI = useSelector((state) => state.entities.layoutUI);
  const dispatch = useDispatch();

  return (
    <header>
      <div className="container header-section">
        <ButtonToggler layoutUI={layoutUI} dispatch={dispatch} />
        <Link to="/" className="header-logo">
          i ❤ English
        </Link>
        <Navbar
          togglerName="el-navbar"
          layoutUI={layoutUI}
          dispatch={dispatch}
        />
        <button className="fa fa-user header-login" aria-hidden="true"></button>
      </div>
    </header>
  );
}

export default Header;

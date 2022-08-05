import React from "react";
import { setOpenMenu } from "../../store/layoutUI";

function ButtonToggler({ dispatch, layoutUI }) {
  const getClassMenu = () => (layoutUI.displayMenu ? "times" : "bars");

  return (
    <button
      className="navbar-toggler"
      type="button"
      onClick={() => dispatch(setOpenMenu(!layoutUI.displayMenu))}
    >
      <i className={"fa fa-" + getClassMenu(layoutUI.displayMenu)} aria-hidden="true"></i>
    </button>
  );
}

export default ButtonToggler;

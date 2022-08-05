import React from "react";

function Header(props) {
  return (
    <div className="header-dashboard">
      <div className="container d-flex">
        <a href="#" className="header-dashboard_logo">
          i Love English
        </a>
        <div className="header-dashboard_toggler">
          <i
            className={"fa fa-" + getClassToggle()}
            aria-hidden="true"
            onClick={() => props.setShowSidebar(!props.showSidebar)}
          ></i>
        </div>
      </div>
    </div>
  );

  function getClassToggle() {
    return props.showSidebar ? "times" : "bars";
  }
}

export default Header;

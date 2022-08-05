import React from "react";
import UserLogo from "../../../Components/Common/UserLogo" ; 

function OverviewForm(props) {
  return (
    <div className="overview-form">
      <form>
        <input
          type="text"
          name="overview-search"
          placeholder="search anything..."
        />
        <label htmlFor="overview-search">
          <i className="fa fa-search" aria-hidden="true"></i>
        </label>
      </form>
      <div className="overview-form_user">
        <h4 className="user-name">Christopher Wood</h4>
       <UserLogo />
      </div>
    </div>
  );
}

export default OverviewForm;

import React from "react";
import girl from "../../Assets/Images/girl.jpg" ; 

function UserLogo(props) {
  return (
    <div className="user-logo">
      <img src={girl} alt="" />
    </div>
  );
}

export default UserLogo;

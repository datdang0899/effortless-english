import React from "react";
import UserLogo from "../Common/UserLogo";
import Button from "../Common/Button";

function CardMember({ data }) {
  return (
    <div className="card-teamMember">
      <a href="#" className="card-teamMember_link">
        <UserLogo />
        <div className={"member-name " + data.status}>
          <h2>{data.name}</h2>
          <span className="member-status">
            <i className="fa fa-circle" aria-hidden="true"></i>
            <p>{data.status}</p>
          </span>
        </div>
      </a>
      <Button text="message" bg="primary-color" />
    </div>
  );
}

export default CardMember;

import React from "react";
import CardMember from "../../../Components/CardMember";

function TeamMembers(props) {

  const data = [
    {name : "Jose Leos" , status : "online" },
    {name : "Christopher Wood" , status : "online"},
    {name : "Bonnie Green", status : "busy"},
    {name : "Neil Sims" , status : "offline"} , 
  ]

  return (
    <div className="team-members card col-6 overflow-auto">
      <div className="card-header">
        <h2 className="card-header_heading">Team members</h2>
        <button className="btn">see all</button>
      </div>
      <div className="card-body">
        {data.map(member => <CardMember data={member}/>)}
      </div>
    </div>
  );
}

export default TeamMembers;

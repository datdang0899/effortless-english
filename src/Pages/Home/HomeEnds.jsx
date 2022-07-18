import React from "react";
import CardAudio from "../../Components/CardAudio";

function HomeEnds() {
  return (
    <div className="home-ends container">
      <h2 className="home-ends_heading">All english lessons:</h2>
      <div className="row">
        <div className="col-6 col-md-3 col-lg-2">
          <CardAudio />
        </div>
        <div className="col-6 col-md-3 col-lg-2">
          <CardAudio />
        </div>
        <div className="col-6 col-md-3 col-lg-2">
          <CardAudio />
        </div>
        <div className="col-6 col-md-3 col-lg-2">
          <CardAudio />
        </div>
        <div className="col-6 col-md-3 col-lg-2">
          <CardAudio />
        </div>
        <div className="col-6 col-md-3 col-lg-2">
          <CardAudio />
        </div>
        <div className="col-6 col-md-3 col-lg-2">
          <CardAudio />
        </div>
        <div className="col-6 col-md-3 col-lg-2">
          <CardAudio />
        </div>
        
      </div>
    </div>
  );
}

export default HomeEnds;

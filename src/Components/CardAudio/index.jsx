import React from "react";
import Audio from "../Common/Audio";

function CardAudio() {
  return (
    <div className="cart mt-2">
      <h5 className="card-header">Effortless English</h5>
      <div className="card-body">
        <h5 className="card-title">race</h5>
        <p className="card-text">
          it's 5 o'clock allen riding to van ness strest ,
        </p>
        <div className="box-navigate">
          <a href="#" className="btn">
            Learn Now
          </a>
          <Audio />
        </div>
      </div>
    </div>
  );
}

export default CardAudio;

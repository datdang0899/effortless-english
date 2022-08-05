import React from "react";
import Audio from "../Common/Audio";
import Button from "../Common/Button" ; 

function CardAudio({ lesson }) {
  return (
    <div className="cart mt-2">
      <h5 className="card-header">Effortless English</h5>
      <div className="card-body">
        <h5 className="card-title">{lesson.title}</h5>
        <p className="card-text">
          {lesson.content} 
        </p>
        <div className="box-navigate">
          <Button text="learn more" bg="primary-color" lessonId={123}/>
          <Audio />
        </div>
      </div>
    </div>
  );
}

export default CardAudio;

import React from "react";
import { Link } from "react-router-dom";
import Audio from "../../Components/Common/Audio";

function CardInfo({ lesson}) {
  return (
    <div className="card-info">
      <div className="card-info_content">
        <Link to={"/lesson-detail/id"} className="card-info_title">
          {lesson.title}
        </Link>
        <p className="card-info_description">
          {lesson.content}
        </p>
      </div>
      <div className="card-info_audio">
        <Audio />
      </div>
    </div>
  );
}

export default CardInfo;

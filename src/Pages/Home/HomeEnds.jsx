import React from "react";
import CardAudio from "../../Components/CardAudio";

function HomeEnds({ lessons }) {
  return (
    <div className="home-ends container">
      <h2 className="home-ends_heading">All english lessons:</h2>
      <div className="row">
        {lessons.map((lesson) => (
          <div key={lesson.id} className="col-6 col-md-3 col-lg-2">
            <CardAudio lesson={lesson} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomeEnds;

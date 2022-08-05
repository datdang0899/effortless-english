import React from "react";
import Audio from "../../Components/Common/Audio" ; 


function LessonDetailAudio(props) {
  return (
    <div className="lessonDetail-audio col-lg-3 col-md-6">
      <div className="lessonDetail-audio_group active">
        <h2>the race - text</h2>
        <Audio />
      </div>
      <div className="lessonDetail-audio_group">
        <h2>the race - vocabulary</h2>
        <Audio />
      </div>
      <div className="lessonDetail-audio_group">
        <h2>the race - mini Story</h2>
        <Audio />
      </div>
    </div>
  );
}

export default LessonDetailAudio;

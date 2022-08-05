import React from "react";
import LessonContent from "./LessonContent";
import LessonDetailAudio from "./LessonDetailAudio";

function LessonDetail(props) {
  return (
    <div id="lessonDetail-section">
      <div className="container d-flex gap-4">
        <LessonDetailAudio />
        <LessonContent />
      </div>
    </div>
  );
}

export default LessonDetail;

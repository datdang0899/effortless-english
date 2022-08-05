import React from "react";
import { Link } from "react-router-dom";

function Button({ text, bg, children , lessonId }) {
  return (
    <Link  to={`/lesson-detail/${lessonId}`} >
      <button className={"btn iLoveEnglist-btn " + bg}>
        {children}
        {text}
      </button>
    </Link>
  );
}

export default Button;

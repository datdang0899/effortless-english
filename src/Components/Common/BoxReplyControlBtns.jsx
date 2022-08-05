import React from "react";

function BoxReplyControlBtns(props) {
  return (
    <div className="btn-controls">
      <button className="btn-controls_star">
        <i className="fa fa-star" aria-hidden="true"></i>
      </button>
      <button className="btn-controls_archive">
        <i className="fa fa-archive" aria-hidden="true"></i>
      </button>
      <button className="btn-controls_trash">
        <i className="fa fa-trash" aria-hidden="true"></i>
      </button>
    </div>
  );
}

export default BoxReplyControlBtns;

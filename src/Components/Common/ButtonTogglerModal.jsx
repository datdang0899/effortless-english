import React from "react";

function ButtonTogglerModal(props) {
  return (
      <button
        type="button"
        className="btn btn-modal-dashboard"
        data-bs-toggle="modal"
        data-bs-target="#modal-dashboard"
      >
        <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
        compose
      </button>
  );
}

export default ButtonTogglerModal;

import React from "react";

function FormMessage(props) {
  return (
    <React.Fragment>
      <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label">
          From Name :
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
        />
      </div>
      <div className="mb-3">
        <label for="exampleFormControlTextarea1" className="form-label">
          Message :
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
        ></textarea>
      </div>
    </React.Fragment>
  );
}

export default FormMessage;

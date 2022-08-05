import React from "react";

function InputFormSetting(props) {
  return (
    <div className={"mb-3" + props.cols}>
      <label for="exampleFormControlInput1" className="form-label">
        {props.label}
      </label>
      <input
        type="email"
        className="form-control"
        id="exampleFormControlInput1"
        placeholder="name@example.com"
      />
    </div>
  );
}

export default InputFormSetting;

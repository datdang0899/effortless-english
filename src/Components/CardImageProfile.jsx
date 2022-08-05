import React from "react";
import girl from "../Assets/Images/girl.jpg" ; 

function CardImageProfile(props) {
  return (
    <div className="card-imageProfile">
      <h2>Select profile photo</h2>
      <div className="box-input">
        <div className="box-input_image">
            <img src={girl} alt="" />
        </div>
        <div className="box-input_text">
          <input type="file" name="box-image_input" id="box-image_input" />
          <label htmlFor="box-image_input">
            <i className="fa fa-file-image-o" aria-hidden="true"></i>
            <p>
              Choose Image <span>JPG, GIF or PNG. Max size of 800K</span>
            </p>
          </label>
        </div>
      </div>
    </div>
  );
}

export default CardImageProfile;

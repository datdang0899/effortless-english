import React from "react";
import img from "../../Assets/Images/image-demo.jpeg" ; 
import "../../Assets/Styles/CardImage.scss" ; 

function CardImage() {
  return (
    <div className="card mt-2">
      <img src={img} alt="image" className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">card title</h5>
        <p className="card-text">
          some quick example text to build on the card{" "}
        </p>
        <a href="#" className="btn">
          Learn Now
        </a>
      </div>
    </div>
  );
}

export default CardImage;

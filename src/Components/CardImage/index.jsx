import React from "react";
import img from "../../Assets/Images/image-demo.jpeg";
import Button from "../../Components/Common/Button" ; 

function CardImage({ lesson }) {
  if(lesson)
    return (
      <div className="card mt-2">
        <img src={lesson.imgURL} alt="image" className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">{lesson.title}</h5>
          <p className="card-text">
            {lesson.content}
          </p>
          <Button text="learn now" bg="primary-color" />
        </div>
      </div>
    );
  else return ; 
}

export default CardImage;

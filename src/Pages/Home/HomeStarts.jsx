import React from "react";
import CardImage from "../../Components/CardImage";
import "../../Assets/Styles/Home.scss";

function HomeStarts(props) {
  return (
    <div className="home-starts container">
      <div className="row">
        <div className="col">
          <div className="row">
            <h2 className="home-starts_heading">Effortless English :</h2>
            <div className="col-lg-4 col-md-6 col-12">
              <CardImage />
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <CardImage />
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <CardImage />
            </div>
          </div>
        </div>

        <div className="col">
          <div className="row">
            <h2 className="home-starts_heading">Programming :</h2>
            <div className="col-lg-4 col-md-6 col-12">
              <CardImage />
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <CardImage />
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <CardImage />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeStarts;

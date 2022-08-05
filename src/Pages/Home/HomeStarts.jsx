import React from "react";
import CardImage from "../../Components/CardImage";

function HomeStarts({ lessons }) {
  return (
    <div className="home-starts container">
      <div className="row">
        <div className="col">
          <div className="row">
            <h2 className="home-starts_heading">Effortless English :</h2>
            <div className="col-lg-4 col-md-6 col-12">
              <CardImage lesson={lessons[1]}/>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <CardImage lesson={lessons[2]}/>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <CardImage lesson={lessons[6]}/>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="row">
            <h2 className="home-starts_heading">Programming :</h2>
            <div className="col-lg-4 col-md-6 col-12">
              <CardImage lesson={lessons[3]}/>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <CardImage lesson={lessons[4]} />
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <CardImage lesson={lessons[7]}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeStarts;

import React from "react";

function HomeStarts(props) {
  return (
    <div className="home-starts container">
      <div className="row">
        <div className="col">
          <div className="row">
            <h2 className="home-starts_heading">this is heading1</h2>
            <div className="col-lg-4 col-md-6 col-12">
              <h1>card 1</h1>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <h1>card 2</h1>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <h1>card 3</h1>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="row">
            <h2 className="home-starts_heading">this is heading2</h2>
            <div className="col-lg-4 col-md-6 col-12">
              <h1>card 4</h1>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <h1>card 5</h1>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <h1>card 6</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeStarts;

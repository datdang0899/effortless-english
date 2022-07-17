import React from "react";
import HomeStarts from "./HomeStarts";
import HomeCenter from "./HomeCenter";

function Home() {
  return (
    <section id="home-section">
      <HomeStarts />
      <HomeCenter />
      <div className="home-ends container">
        <div className="row">
          <div className="col-6 col-md-3 col-lg-2dot4">
            card 1
          </div>
          <div className="col-6 col-md-3 col-lg-2dot4">
            card 2
          </div>
          <div className="col-6 col-md-3 col-lg-2dot4"> 
            card 3
          </div>
          <div className="col-6 col-md-3 col-lg-2dot4">
            card 4
          </div>
          <div className="col-6 col-md-3 col-lg-2dot4">
            card 5
          </div>
          <div className="col-6 col-md-3 col-lg-2dot4">
            card 6
          </div>
          <div className="col-6 col-md-3 col-lg-2dot4">
            card 7
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;

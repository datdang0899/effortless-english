import React from "react";
import HomeStarts from "./HomeStarts";
import HomeCenter from "./HomeCenter";
import HomeEnds from "./HomeEnds" ; 

function Home() {
  return (
    <section id="home-section">
      <HomeStarts />
      <HomeCenter />
      <HomeEnds />
    </section>
  );
}

export default Home;

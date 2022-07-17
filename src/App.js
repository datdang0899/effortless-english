import React from "react";
import Header from "./Layouts/Header" ; 
import Footer from "./Layouts/Footer" ; 
import Slider from "./Layouts/Slider" ; 
import Home from "./Pages/Home" ; 
import Dashboard from "./Pages/Dashboard" ; 
import LessonDetail from "./Pages/LessonDetail" ; 
import Search from "./Pages/Search" ; 

function App(props) {
  return (
    <React.Fragment>
      <Header />
      <Slider /> 
      <Home />
      {/* <Dashboard /> 
      <LessonDetail /> 
      <Search /> 
      <Footer /> */}
    </React.Fragment>
  );
}

export default App;

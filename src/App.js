import React  from "react";
import { Provider } from "react-redux";
import { Route, Routes } from "react-router-dom";
import configureStore from "./store/configureStore";
import Header from "./Layouts/Header";
import Footer from "./Layouts/Footer";
import Slider from "./Layouts/Slider";
import Home from "./Pages/Home";
import Dashboard from "./Pages/Dashboard";
import LessonDetail from "./Pages/LessonDetail";
import Search from "./Pages/Search";

function App(props) {
  const store = configureStore();


  return (
    <Provider store={store}>
      <Header />
      <Slider />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="admin-english" element={<Dashboard />} />
        <Route path="lesson-detail/:id" element={<LessonDetail />} />
        <Route path="search" element={<Search />}/>
        <Route path="search/:str" element={<Search />} />
      </Routes>
      <Footer />
    </Provider>
  );
}

export default App;

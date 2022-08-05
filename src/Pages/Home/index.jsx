import React, { useEffect }  from "react";
import { useDispatch, useSelector } from "react-redux";
import HomeStarts from "./HomeStarts";
import HomeCenter from "./HomeCenter";
import HomeEnds from "./HomeEnds";
import { loadLessons } from "../../store/lessons";

function Home() {
  const lessons = useSelector((state) => state.entities.lessons.list);
  const dispatch = useDispatch();

  useEffect(() =>{
    dispatch(loadLessons()) ; 
  },[])

  return (
    <section id="home-section">
      <HomeStarts lessons={lessons} />
      <HomeCenter lessons={lessons} />
      <HomeEnds lessons={lessons} />
    </section>
  );
}

export default Home;

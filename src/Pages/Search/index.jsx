import React ,{ useEffect } from "react";
import { useDispatch , useSelector } from "react-redux";
import CardInfo from "../../Components/CardInfo";
import Pagination from "../../Components/Common/Pagination";
import { loadLessons } from "../../store/lessons" ; 

function Search(props) {
  const lessons = useSelector(state => state.entities.lessons.list) ;
  const dispatch = useDispatch() ; 

  useEffect(() =>{
    dispatch(loadLessons()); 
  } ,[])

  return (
    <div id="search-section">
      <div className="container">
        <div className="search-form">
          <form>
            <input name="searchBox" type="text" placeholder="Search here..." />
            <label htmlFor="searchBox">
              <i className="fa fa-search" aria-hidden="true"></i>
            </label>
          </form>
        </div>
        <div className="search-body d-flex gap-4">
          <div className="search-body_genres">
            <ul className="genres-list">
              <li className="genres-item">
                <a href="#">effortless english</a>
              </li>
              <li className="genres-item">
                <a href="#">programming</a>
              </li>
              <li className="genres-item">
                <a href="#">documents</a>
              </li>
            </ul>
          </div>
          <div className="search-body_cards">
            {lessons.map(lesson => <CardInfo lesson={lesson}/>)}
            <Pagination />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;

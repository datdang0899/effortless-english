import React , { useEffect }from "react";
import { Link, useLocation } from "react-router-dom";
import { setOpenMenu } from "../../store/layoutUI" ; 

function Navbar({ dispatch , layoutUI }) {
  const showMenuMobi = () => layoutUI.displayMenu ? "show" : "" ; 
  const location = useLocation() ; 

  useEffect(() =>{
    dispatch(setOpenMenu(false)); 
  },[location.pathname]);

  return (
    <nav className={"navbar navbar-expand-lg " + showMenuMobi()}>
      <div className="navbar-collapse" >
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link
              to="/search/eff"
              className="nav-link active"
              aria-current="page"
            >
              effortless english
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/search/7rule"
              className="nav-link "
              aria-current="page"
            >
              7 rule learning english
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/search/program"
              className="nav-link "
              aria-current="page"
            >
              programming
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/search/books"
              className="nav-link "
              aria-current="page"
            >
              books
            </Link>
          </li>
        </ul>
        <form className="d-flex">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search here ..."
            aria-label="Search"
          />
          <button className="btn" type="submit">
            Search
          </button>
        </form>
      </div>
      <div className="navbar-bg-dark" onClick={() => dispatch(setOpenMenu(false))}></div>
    </nav>
  );
}

export default Navbar;

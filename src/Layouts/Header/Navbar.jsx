import React from "react";

function Navbar({ togglerName }) {
  return (
    <nav className="navbar navbar-expand-lg ">
      <div className="collapse navbar-collapse" id={togglerName}>
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">
              Listening
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Reading
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Speaking
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Writing
            </a>
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
    </nav>
  );
}

export default Navbar;

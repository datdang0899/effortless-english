import React from 'react';

function ButtonToggler({ togglerName }) {
    return (
        <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={`#${togglerName}`}
            aria-controls={togglerName}
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fa fa-bars" aria-hidden="true"></i>
          </button>
    );
}

export default ButtonToggler;
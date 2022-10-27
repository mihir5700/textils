import React from 'react'
import '../App.css';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode}`} id="navbar">
      <div className="container-fluid ">
        {/* Logo of our website */}
        <Link className="navbar-brand" id='title' to="/">{props.title}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {/* HOME */}
            <li className="nav-item">
              <Link to="/" className="nav-link active" aria-current="page">Home</Link>
            </li>

            {/* ABOUT */}
            <li className="nav-item">
              <Link to="/about" className="nav-link">About</Link>
            </li>

          </ul>
          <div className="modeBox mt-2">
            <span className="material-symbols-rounded mx-4" onClick={props.toggleMode}>
              {props.icon}_mode
            </span>
          </div>
          
          {/* <div className="form-check form-switch">
            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode} />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
            </label>
          </div> */}

        </div>
      </div>
    </nav>
  )
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
}

Navbar.defaultProps = {
  title: 'Title_Here',
  about: 'About_Here'
}

//Basically proptypes se we can set type for our props so that accidentally if we use other type rather than our expected type for the props we can know what mistake are we doing

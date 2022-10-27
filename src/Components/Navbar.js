import React from 'react'
import '../App.css';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode}`} id="navbar">
      <div className="container-fluid nav-content">
      
        <Link className="navbar-brand d-flex justify-content-center" id='title' to="/">
          <img src="https://cdn-icons-png.flaticon.com/512/4598/4598388.png" alt="" width="45" height="45"/>
          <h1>{props.title}</h1>
        </Link>

        <div className="modeBox">
          <span className="material-symbols-rounded mx-4" onClick={props.toggleMode}>
            {props.icon}_mode
          </span>
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

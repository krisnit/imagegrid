import React from "react";
import Nav from "./Nav";
import { Link } from "react-router-dom";
import SocialMedia from "./SocialMedia";

const Header = () => {
  return (
    <div id="header-home">
      <div className="container">
        <Nav />
        <div className="header-main">
          <div className="header-content">
            <h1>RADHAKRISHNAN - FULLSTACK REACT DEVELOPER</h1>
            <p className="lead">
              I specialize in React, Redux, MongoDB, PostgreSQL, NodeJs,
              Express, HTML, CSS, SASS
            </p>
            <Link className="btn-main" to="/work">
              View My Work
            </Link>
          </div>
          <div className="header-socialmedia">
            <SocialMedia />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

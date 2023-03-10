import React from "react";
import "./Home.scss";
import { NavLink } from "react-router-dom";

import { FaAngleDown } from "react-icons/fa";

const Home = () => {
  return (
    <section className="home" id="Home">
      <div className="home--header">
        <header className="home--header-items">
          <ul>
            <li className="heading--bold heading--bold-5 heading--link">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="heading--bold heading--bold-5 heading--link">
              <NavLink to="/About">About</NavLink>
            </li>
            <li className="heading--bold heading--bold-5 heading--link">
              <NavLink to="/Skills">Skills</NavLink>
            </li>
            <li className="heading--bold heading--bold-5 heading--link">
              <NavLink to="/Work">Work</NavLink>
            </li>
            <li className="heading--bold heading--bold-5 heading--link">
              <NavLink to="/Contact">Contact</NavLink>
            </li>
          </ul>
        </header>
      </div>

      <div className="header--content">
        <h1 className="heading--light heading--light-1">
          I'm a designer specialising in{" "}
          <span className="text--highlight">UI</span> and{" "}
          <span className="text--highlight">Interaction Design</span>
        </h1>
      </div>

      <div className="header--icon">
        <FaAngleDown className="header--icon-arrow" />
      </div>
    </section>
  );
};

export default Home;

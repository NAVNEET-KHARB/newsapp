import React, { useState } from "react";
import { Link } from "react-router-dom";
export default function NavBar(props) {
  const [showNav, setShowNav] = useState("");
  const toggleNav = () => {
    if (showNav === "") {
      setShowNav("active");
    } else if (showNav == "active") {
      setShowNav("");
    }
  };
  return (
    <nav
      className={props.mode === "dark" ? "nav dark dark-txt" : "nav nav-light"}
    >
      <Link className="navtitle" to="/">
        NewsAlligator
      </Link>
      <div className="collapse-button" onClick={toggleNav}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      <div className={showNav === "" ? "nav-links inactive" : "nav-links"}>
        <ul>
          <li>
            <Link className="links" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="links" to="/about">
              About
            </Link>
          </li>
          <li>
            <Link className="links" to="/sports">
              Sports
            </Link>
          </li>
          <li>
            <Link className="links" to="/science">
              Science
            </Link>
          </li>
          <li>
            <Link className="links" to="/business">
              Business
            </Link>
          </li>
          <li>
            <Link className="links" to="/entertainment">
              Entertainment
            </Link>
          </li>
          <li>
            <Link className="links" to="/health">
              Health
            </Link>
          </li>
          <li>
            <Link className="links" to="/technology">
              Technology
            </Link>
          </li>
        </ul>
      </div>
      <div className={showNav === "" ? "switchbox inactive" : "switchbox"}>
        <p className="switchtxt">
          {props.mode === "dark" ? "LIGHT MODE" : "DARK MODE"}
        </p>
        <label className="switch">
          <input type="checkbox" onClick={props.toggleMode} />
          <span className="slider round"></span>
        </label>
      </div>
    </nav>
  );
}

import React from "react";
import "../style/Footer.css";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-div">
      <Link className="linkPages" to={"/"}>
          Home
        </Link>
        <Link className="linkPages" to={"/competences"}>
          Compétences
        </Link>
        <Link className="linkPages" to={"/projet"}>
          Projets
        </Link>

        <Link className="linkPages" to={"/contact"}>
          Contact
        </Link>
        <a
          className="linkPages"
          href="https://www.linkedin.com/in/nasrat-noury-41a034201/" target="blank"
        >
          LinkedIn
        </a>

        <a className="linkPages" href="https://www.github.com/nasrat-noury" target="blank">
          GitHub
        </a>
      </div>
    </div>
  );
};

export default Footer;





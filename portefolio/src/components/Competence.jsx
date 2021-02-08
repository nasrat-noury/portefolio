import React from "react";
import "../style/Competence.css";

const Competences = () => {
  return (
    <div className="boxes">
      <div className="webknowledge">
        <p>Developpement Web Fullstack React.js / Node.js</p>
        <p>
          {" "}
          Technologies apprises : React.Js, Node.js, Express, MySQL, Redux,
          Workbench, REST API, JWT, Postman, Github, Figma, TDD.
        </p>
      </div>
      <div className="langage">
        <p>Langue: Francais (langue maternelle) et Anglais (bilingue)</p>
      </div>
      <div className="teamwork">
        <div>
          <img
            className="together"
            alter="worktogether"
            src="https://portrait2point0.com/wp-content/uploads/2018/11/rawpixel-653764-unsplash-1030x674.jpg"
          ></img>
        </div>
        <div>
          <p>
            Méthodologie: méthodes agiles et SCRUM. Utilisation des logiciels
            Slack, Trello.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Competences;

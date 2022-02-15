import React from "react";
import "../style/Competence.css";
import img1 from"./css3.svg";
import img2 from"./react.svg";
import img3 from"./redux.svg";
import img4 from"./express.svg";
import img5 from"./figma.svg";
import img6 from"./firebase.svg";
import img7 from"./git.svg";
import img8 from"./html5.svg";
import img9 from"./javascript.svg";
import img11 from"./mysql.svg";
import img12 from"./nodejs.svg";
import img13 from"./restapi.png";


const Competences = () => {
  return (
    <div className="boxes">
      <div className="webknowledge">
        <p>Developpement Web Fullstack React.js / Node.js</p>
        <p>
          {" "}
          Mes compétences :
          </p>
          <p>
          Front End :
          </p>
          
          <div className="frontknow">
          <figure>
          <img src={img8} alt="html5" width="85" height="85"></img><figcaption>HTML5</figcaption></figure>
          <figure>
          <img src={img1} alt="css3" width="85" height="85"></img><figcaption>CSS3</figcaption></figure>
          <figure>
          <img src={img2} alt="react" width="85" height="85"></img><figcaption>React</figcaption></figure>
          <figure>
          <img src={img3} alt="redux" width="85" height="85"></img><figcaption>Redux</figcaption></figure>
          <figure>
          <img src={img9} alt="javascript" width="85" height="85"></img><figcaption>Javascript</figcaption></figure>
          <figure>
          <img src={img5} alt="figma" width="85" height="85"></img><figcaption>Figma</figcaption></figure>
          </div>
          <p>
          Back End :
          </p>
         
          <div className="backknow">
         
          <figure>
          <img src={img12} alt="node" width="85" height="85"></img><figcaption>Node</figcaption></figure>
          <figure>
          <img src={img11} alt="mysql" width="85" height="85"></img><figcaption>Mysql</figcaption></figure>
          <figure>
          <img src={img4} alt="express" width="85" height="85"></img><figcaption>Express</figcaption></figure>
          <figure>
          <img src={img6} alt="firebase" width="85" height="85"></img><figcaption>Firebase</figcaption></figure>
          <figure>
          <img src={img13} alt="restapi" width="85" height="85"></img><figcaption>Api rest</figcaption></figure>
          <figure>
          <img src={img7} alt="git" width="85" height="85"></img><figcaption>Git</figcaption></figure>
          </div>
          
        
        
      </div>
      <div className="langage">
        <p>Langue: Francais (langue maternelle) et Anglais (bilingue)</p>
      </div>
      <div className="teamwork">
        <div>
          
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

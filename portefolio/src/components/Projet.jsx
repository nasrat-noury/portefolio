import React from "react";

import "../style/Projet.css";

const Projet = () => {
  

  return (
    <div className="ProjetPage">
      <div className="ProjetCards" >
        
            <div className="ProjCard">
              <div className="DescriptionProjet">
                <div className="CardImage">
                  <img
                    src="https://imgur.com/jgWqkgD.png"
                    alt="Festoch'Fastoch"
                    className="ImageProjet"
                  />
                </div>
                <div className="CardText">
                  <h2>Festoch'Fastoch</h2>
                  <h3>"Octobre/Novembre 2020"</h3>
                  <h4>Festoch Fastoch est un site de billeterie en ligne. Il y a plusieurs style de musique disponible selon les préférences de chacun</h4>
                  <h5>React.js, Node.js, Express, MySQL, Workbench, Postman</h5>
                  <h5>
                    <a
                      href="https://festochfastoch.herokuapp.com/"
                      className="projet-linkto"
                      target="blank"
                      rel="noopener noreferer"
                    >
                      Voir le projet
                    </a>
                  </h5>
                </div>
              </div>
            </div>
            <div className="ProjCard">
              <div className="DescriptionProjet">
                <div className="CardImage">
                  <img
                    src="https://i.imgur.com/or7a6n1.png?1"
                    alt="Ridy"
                    className="ImageProjet"
                  />
                </div>
                <div className="CardText">
                  <h2>Ridy</h2>
                  <h3>Hackathon 24h</h3>
                  <h4>Back to the future ! Hackathon de 24h sur la création d'une application permettant de louer des chevaux. Europcar mais avec des chevaux !</h4>
                  <h5>React.js, Node.js, Express, mySQL, Google maps API</h5>
                  <h5>
                    <a
                      href="https://ridy.herokuapp.com/"
                      className="projet-linkto"
                      target="blank"
                      rel="noopener noreferer"
                    >
                      Voir le projet
                    </a>
                  </h5>
                </div>
              </div>
            </div>
            <div className="ProjCard">
              <div className="DescriptionProjet">
                <div className="CardImage">
                  <img
                    src="https://i.imgur.com/Sinvy2a.png"
                    alt="Cook'Eat"
                    className="ImageProjet"
                  />
                </div>
                <div className="CardText">
                  <h2>Cook'Eat</h2>
                  <h3>Hackathon 48h Janvier 2021</h3>
                  <h4>Hackathon organisé par Ekino et la Wild Code School de Bordeaux sur le sujet "Créer du lien en période de confinement". Cook'Eat est une application de diffusion en direct de recettes de cuisine par les utilisateurs de cette app.</h4>
                  <h5>React.js, Node.js, Express, JWT, MySQL, Workbench, Postman, Twilio, Firebase</h5>
                  <h5>
                    <a
                      href="https://cook-eat.netlify.app/"
                      className="projet-linkto"
                      target="blank"
                      rel="noopener noreferer"
                    >
                      Voir le projet
                    </a>
                  </h5>
                </div>
              </div>
            </div>
            <div className="ProjCard">
              <div className="DescriptionProjet">
                <div className="CardImage">
                  <img
                    src="https://i.imgur.com/O53jTAph.jpg"
                    alt="JonPak"
                    className="ImageProjet"
                  />
                </div>
                <div className="CardText">
                  <h2>Jonathan Pak</h2>
                  <h3>Décembre 2020 à Janvier 2021</h3>
                  <h4>La web app Jonathan Pak répond à la demande d'un client qui est coach sportif, de communiquer avec ses clients. Via cette app, un coach peut envoyer à ses clients un programme sportif spécifique et de suivre leurs résultats.</h4>
                  <h5>React.js, Redux, Node.js, Express, JWT, MySQL, Workbench, Postman</h5>
                  <h5>
                    <a
                      href="https://client-jonathanpak.herokuapp.com/"
                      className="projet-linkto"
                      target="blank"
                      rel="noopener noreferer"
                    >
                      Voir le projet
                    </a>
                  </h5>
                </div>
              </div>
            </div>
          
      </div>
    </div>
  );
};

export default Projet;

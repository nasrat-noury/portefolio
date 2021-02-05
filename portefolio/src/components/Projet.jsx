import React, { useState, useEffect } from "react";
import axios from "axios";

const Projet = () => {
  const [Projet, setProjet] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3001/api/projets`)
      .then((response) => setProjet(response.data));
  }, []);

  console.log(Projet);
  return (
    <div className="ProjetCards">
      {Projet.map((projet) => (
        <div className="ProjCard">
          <div className="DescriptionProjet">
            <div className="CardImage">
              <img src={projet.img} alt={projet.name} className="ImageProjet" />
            </div>
            <div className="CardText">
              <h2>{projet.name}</h2>
              <h3>{projet.date}</h3>
              <h4>{projet.description}</h4>
              <h5>{projet.tech}</h5>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projet;

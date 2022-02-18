import React from "react";
import "../style/HomePage.css";
import img from"./fuji.png";



const HomePage = () => {
  return (
    <div className="page-container">
      <div className="left">
    <div className="titre">
      <h2 className="title">
        <p>Nasrat NOURY</p>
        <p>Developpeur web Full Stack,</p>
        <p>React et NodeJS</p>
      </h2>
      </div>
     <div><h1 className="img">
        <img src={img} alt="portrait"></img>
      </h1> </div>
      </div>
    <div className="right">Je me présente, je m'appelle Nasrat NOURY et je suis un développeur web junior.
    <br></br>
    <br></br>
    Après une formation à la Wild Code School de Bordeaux qui m'a permis d'apprendre les différents languages du web et leur utilisation à travers différents cas pratiques. 
    <br></br>
    Je suis aujourd'hui à la recherche d'une nouvelle opportunité professionnelle.</div>
      

     
    </div>
  );
};

export default HomePage;

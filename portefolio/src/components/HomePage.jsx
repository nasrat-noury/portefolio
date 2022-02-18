import React from "react";
import "../style/HomePage.css";
import img from"./fuji.png";



const HomePage = () => {
  return (
    <div className="page-container">

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
  );
};

export default HomePage;

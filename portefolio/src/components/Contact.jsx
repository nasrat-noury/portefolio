import React from "react";
import img from "./cv.png";
import img2 from "./phoneic.png";
import img3 from "./mailic.png";
import "../style/Contact.css";




const Contact = () => {
  
  return (
    <div class="containerContact">
      <div class="contact">
      
      <div class="mail">
      <div class="mailimg">
      
        <img src={img3} alt="mail" width="90" height="90"></img></div>
        <div class="mailcontent">
        <h3>Email</h3>
        
      <a href="mailto:nasrat.noury@gmail.com">nasrat.noury@gmail.com</a>
      </div>
      </div>
      
      <div class="phone">
        <div class="phoneimg"><img src={img2} alt="phone" width="90" height="90"></img></div>
        
        <div class="phonecontent">
          <h3>Téléphone</h3>
          <a href="tel:0784443409">+33 7 84 44 34 09</a>
          </div>
        </div>
      
      </div>

      <div class="cv">
      <img src={img} alt="cv" width="400" height="500"></img>
      </div>
    </div>
  );
};

export default Contact;

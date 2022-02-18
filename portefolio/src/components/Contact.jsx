import React from "react";
import img from "./cv.png";

import "../style/Contact.css";




const Contact = () => {
  
  return (
    <div class="containerContact">
      <div class="contact">
      
      <div class="mail">
      <div class="mailimg">
      
        <img src="data:image/png;base64,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" alt="mail" width="90" height="90"></img></div>
        <div class="mailcontent">
        <h3>Email</h3>
        
      <a href="mailto:nasrat.noury@gmail.com">nasrat.noury@gmail.com</a>
      </div>
      </div>
      
      <div class="phone">
        <div class="phoneimg"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2GQsGgKdcQKJHGMdkAO_MCJ50j56FrCAiow&usqp=CAU" alt="phone" width="90" height="90"></img></div>
        
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

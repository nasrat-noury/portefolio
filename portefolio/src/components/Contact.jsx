import React from "react";

import "../style/Contact.css";



const Contact = () => {
  
  return (
    <div class="containerContact">
      <div class="email">
        <div class="mailimg"></div>
        <div class="mail">
        <h3>Email</h3>
      <a href="mailto:nasrat.noury@gmail.com">nasrat.noury@gmail.com</a>
      </div>
      </div>
      <div class="phone">
        <div class="phoneimg"></div>
        <div class="phone">
          <h3>Téléphone</h3>
          <a href="tel:0784443409">+33 7 84 44 34 09</a>

        </div>
      </div>
    </div>
  );
};

export default Contact;

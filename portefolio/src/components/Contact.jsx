import React, { useState, useEffect } from "react";
import axios from "axios";
import "../style/Contact.css";
import { useHistory } from "react-router-dom";

const Contact = () => {
  const history = useHistory();
  const [form, setForm] = useState({});

  const handleSubmit = async () => {
    await axios.post(`http://localhost:3001/api/contacts`, {
      ...form,
    });
    history.push("/");
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className="ContactPage">
      <div className="ContactInput">
        <h1 className="stuff">
          <p> Me contacter pour me proposer un stage, </p>
          <p>un poste ou juste pour faire connaissance?</p>
        </h1>
        <div className="form">
          <div className="contactform">
            <input
              type="firstname"
              id="firstname"
              name="firstname"
              className="inputname"
              placeholder="Votre prénom"
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="contactform">
            <input
              type="lastname"
              id="lastname"
              name="lastname"
              className="inputname"
              placeholder="Votre nom"
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="contactform">
            <textarea
              type="message"
              id="message"
              name="message"
              className="input-textarea"
              placeholder="Votre message"
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="contactform">
            <input
              type="mail"
              id="mail"
              name="mail"
              className="inputname"
              placeholder="Votre email"
              onChange={(e) => handleChange(e)}
            />
          </div>

          <div className="contactform">
            <input
              type="phone"
              id="phone"
              name="phone"
              className="inputphone"
              placeholder="Votre numéro de téléphone"
              onChange={(e) => handleChange(e)}
            />
          </div>
        </div>
      </div>
      <button className="boutonPost" type="submit" onClick={handleSubmit}>
        Envoyer
      </button>
    </div>
  );
};

export default Contact;

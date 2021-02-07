import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import "../style/ManageProjet.css";

const ManageProjet = () => {
  const [form, setForm] = useState({});
  const [projetLists, setProjetLists] = useState([]);
  const history = useHistory();

  useEffect(() => {
    axios
      .get(`http://localhost:3001/api/projets`)
      .then((response) => setProjetLists(response.data));
  }, []);

  const handleSubmit = async () => {
    await axios
      .post(`http://localhost:3001/api/projets`, {
        ...form,
      })
      .then(() =>
        axios
          .get(`http://localhost:3001/api/projets`)
          .then((result) => setProjetLists(result.data))
      );
    history.push("/");
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleDelete = async (id) => {
    axios.delete(`http://localhost:3001/api/projets/${id}`);
    await setProjetLists(projetLists.filter((pro) => pro.id !== id));
  };

  return (
    <div className="projets">
      <h1>Projets</h1>
      <div className="ProjetCards">
        {projetLists.map((projet) => (
          <div className="DetailProjet">
            {/* <p>{projet.name}</p> */}
            <p>
              <img src={projet.img} />
            </p>
            <p>{projet.description}</p>
            <p>{projet.date}</p>
            <p>{projet.tech}</p>

            <button
              className="suppBouton"
              type="button"
              onClick={() => handleDelete(projet.id)}
            >
              <img
                alt="boutonpoubelle"
                src="https://findicons.com/files/icons/42/basic/64/delete.png"
              />
            </button>
          </div>
        ))}
        <div className="post-project">
          <input
            type="name"
            id="name"
            name="name"
            className="inputname"
            placeholder="nom du projet"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="post-project">
          <input
            type="description"
            id="description"
            name="description"
            className="inputname"
            placeholder="description"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="post-project">
          <input
            type="text"
            id="image"
            name="image"
            className="imglink"
            placeholder="image"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="post-project">
          <input
            type="date"
            id="date"
            name="date"
            className="inputname"
            onChange={(e) => handleChange(e)}
          />
        </div>

        <div className="post-project">
          <input
            type="tech"
            id="tech"
            name="tech"
            className="tech"
            placeholder="technologies"
            onChange={(e) => handleChange(e)}
          />
        </div>

        <button className="addprojet" type="submit" onClick={handleSubmit}>
          +
        </button>
      </div>
    </div>
  );
};

export default ManageProjet;

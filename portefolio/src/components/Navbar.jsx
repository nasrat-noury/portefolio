import React from 'react';
import "../style/Navbar.css";
import { useState } from 'react';

function Navbar () {

    const [showLinks, setShowLinks] = useState(false)
    const handleShowLinks = () => {
        setShowLinks(!showLinks)
    }
    return (
        <nav className={`navbar ${showLinks ? "shownav" : "hidenav"}`}>
            <div className="navabar_logo">NN</div> 
            <ul className="navbar_links">
                <li className="navbar_item">
                    <a href="/" className="navbar_link">Home</a>
                </li>
                <li className="navbar_item">
                    <a href="/competences" className="navbar_link">Compétences</a>
                </li>
                <li className="navbar_item">
                    <a href="/projet" className="navbar_link">Projets</a>
                </li>
                <li className="navbar_item">
                    <a href="/contact" className="navbar_link">Contact</a>
                </li>
                <li className="navbar_item">
                    <a href="https://www.linkedin.com/in/nasrat-noury-41a034201/" target="blank" >LinkedIn</a>
                </li>
                <li className="navbar_item">
                    <a href="https://www.github.com/nasrat-noury" target="blank" className="navbar_link">Git</a>
                </li>
            </ul>
            <button className="navbar_burger" onClick={handleShowLinks}>
                <span className="burger-bar"></span>
            </button>

        </nav>
    )
}

export default Navbar



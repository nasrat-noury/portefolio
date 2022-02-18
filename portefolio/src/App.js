import "./App.css";
import { Route, Switch } from "react-router";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import Projet from "./components/Projet";
import Contact from "./components/Contact";

import Competences from "./components/Competence";


import reportWebVitals from "./reportWebVitals";

import Footer from "./components/Footer";


function App() {
  return (
    <div className="App">
      
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        
        <Route path="/projet" component={Projet} />
        <Route path="/contact" component={Contact} />
        <Route exact path="/competences" component={Competences} />
        
      </Switch>
      <Footer />
    </div>
  );
}

export default App;

reportWebVitals();

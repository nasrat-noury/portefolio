import "./App.css";
import { Route, Switch } from "react-router";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import Projet from "./components/Projet";
import Contact from "./components/Contact";

import Competences from "./components/Competence";
import Authentification from "./components/Authentification";

import reportWebVitals from "./reportWebVitals";
import ManageProjet from "./components/ManageProjet";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="App">
      
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/authentification" component={Authentification} />
        <Route path="/projet" component={Projet} />
        <Route path="/contact" component={Contact} />
        <Route exact path="/competences" component={Competences} />
        <Route path="/manageprojet" component={ManageProjet} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;

reportWebVitals();

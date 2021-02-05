import "./App.css";
import { Route, Switch } from "react-router";
import Projet from "./components/Projet";
import Contact from "./components/Contact";
// import Linkedin from "./components/linkedin";
import Competences from "./components/Competence";
// import Github from "./components/github";
import HomePage from "./components/HomePage";
import reportWebVitals from "./reportWebVitals";

function App() {
  return (
    <div className="App">
      {/* <ScrollToTop /> */}

      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/projet" component={Projet} />
        <Route path="/contact" component={Contact} />
        {/* <Route path="/linkedin" component={Linkedin} /> */}
        <Route exact path="/competences" component={Competences} />
        {/* <Route exact path="/github" component={Github} /> */}
      </Switch>
    </div>
  );
}

export default App;

reportWebVitals();

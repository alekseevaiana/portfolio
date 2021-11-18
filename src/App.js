import logo from "./logo.svg";
import "./App.css";
import Navigation from "./components/Navigation";
import About from "./components/About";
import Projects from "./components/Projects";
import Contacts from "./components/Contacts";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* <Navigation /> */}
        <About />
        <Projects />
        <Contacts />
      </div>
    </BrowserRouter>
  );
}

export default App;

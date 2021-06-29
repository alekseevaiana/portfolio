import logo from "./logo.svg";
import "./App.css";
import Navigation from "./components/Navigation";
import About from "./components/About";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="App">
      <Navigation />
      <About />
      <Projects />
    </div>
  );
}

export default App;

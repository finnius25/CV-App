import "./App.css";
import General from "./components/General";
import Education from "./components/Education"
import Experience from "./components/Experience";

function App() {

  return (
    <div className="App">
      <header>
        <h1>Hello CV App</h1>
      </header>
      <div>
      <General />
      <Education />
      <Experience />
      </div>
    </div>
  );
}

export default App;

import React from "react";
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Welcome from "./Components/Welcome/Welcome";
import Players from "./Components/Players/Players";

function App() {
  return (
    <div className="App">
    <Welcome />
    <Players />
    </div>
  );
}

export default App;

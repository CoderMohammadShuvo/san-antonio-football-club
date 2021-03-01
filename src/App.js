import React from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Welcome from "./Components/Welcome/Welcome";
import Players from "./Components/Players/Players";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Welcome />
      <Players />
    </div>
  );
}

export default App;

import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Topbar from "./Topbar";
import Body from "./Body";

function App() {
  return (
    <div className="App">
      <Topbar />
      <Body />
    </div>
  );
}

export default App;

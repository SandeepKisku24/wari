import "./app.css"
import React from "react";
import Left from "./components/left";
import Right from "./components/right";
function App() {
  return (
    <div className="App">
     <Left/>
     <Right className="right"/>
    </div>
  );
}

export default App;

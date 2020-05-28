import React from "react";
import Names from "./Names";
import babyNamesData from "./babyNamesData.json";

import "./App.css";

function App() {
  babyNamesData.sort((a, b) => a.name.localeCompare(b.name));
  return (
    <div className="App">
      <div>
        <Names data={babyNamesData} />
      </div>
    </div>
  );
}

export default App;

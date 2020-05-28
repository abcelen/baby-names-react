import React from "react";
import Names from "./Names";
import Favourites from "./Favourites";
import babyNamesData from "./babyNamesData.json";
import Search from "./Search";
import "./App.css";

function App() {
  babyNamesData.sort((a, b) => a.name.localeCompare(b.name));
  return (
    <div className="App">
      <div className="">
        <Search />
        <Favourites />
        <Names data={babyNamesData} />
      </div>
    </div>
  );
}

export default App;

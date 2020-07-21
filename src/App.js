import React from "react";
import "./App.css";
import Section from "./components/Section";
import data from "./movies.json";
import netflixLogo from "./images/netflixLogo.png";

function App() {
  return (
    <div className="container">
      <header>
        <img src={netflixLogo} alt="Netflix Logo" />
        <ul>
          <li>
            <strong>Home</strong>
          </li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>Originals</li>
          <li>Recently Added</li>
          <li>My List</li>
        </ul>
      </header>
      <body>
        {data.map((item, index) => {
          return <Section data={item} />;
        })}
      </body>
    </div>
  );
}

export default App;

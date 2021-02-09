import React from "react";
import Weather from "./Weather";
import Footer from "./Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultLat={25.761681} defaultLon={-80.191788} />
        <Footer />
      </div>
    </div>
  );
}

export default App;

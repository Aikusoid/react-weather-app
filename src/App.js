import React from "react";
import Weather from "./Weather";
import Footer from "./Footer";
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultLat={50.073658} defaultLon={14.418540} />
         <Footer />
      </div>
    </div>
  );
}

export default App;

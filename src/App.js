import React, {useState} from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import EaglesRoster from "./Components/EaglesRoster";
import TeamCards from "./Components/TeamCards";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Header />
      <TeamCards />
      <EaglesRoster />
      <Footer />
    </div>
  );
};

export default App;

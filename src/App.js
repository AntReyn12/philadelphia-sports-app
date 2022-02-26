import React from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import TeamCards from "./Components/TeamCards";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Header />
      <TeamCards />
      <Footer />
    </div>
  );
};

export default App;

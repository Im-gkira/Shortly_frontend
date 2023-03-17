import { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Home from "./components/home";
import Hero from "./components/hero";
import Statistic from "./components/statistics";
import Ad from "./components/ad";
import Footer from "./components/footer";
function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Hero />
      <Statistic />
      <Ad />
      <Footer />
    </div>
  );
}

export default App;

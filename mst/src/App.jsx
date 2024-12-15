import { useState } from "react";
import React from "react";
import About from "./Components/About/About";
import Navbar from "./Components/Navbar/Navbar";
import Gallery from "./Components/Gallery/Gallery";
import Games from "./Components/Games/Games";
import Game2 from "./Components/Game2/Game2";
import Footer5 from "./Components/Footer/Footer5";
import bg2 from "./assets/bg.webp";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  React.useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
    });
  });

  return (
    <>
      <div>
        <div className="homepage">
          <h2>
            <span>M</span>
            <span>S</span>
            <span>T</span>
            <span>&nbsp;</span>
            <span>2</span>
            <span>0</span>
            <span>2</span>
            <span>5</span>
          </h2>
        </div>
        <div className=" h-[700px] relative">
          <Navbar />
          <About />
        </div>
        <Gallery />
        <Games />
        <Game2 />
        <Footer5 />
      </div>
    </>
  );
}

export default App;

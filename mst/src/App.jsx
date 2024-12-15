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
        <img src={bg2} alt="" className="w-full brightness-50" />
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

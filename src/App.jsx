import React, { useState, useEffect } from "react";
import {
  Navbar,
  Header,
  About,
  Career,
  Projects,
  OtherProjects,
  Contact,
  FloatNavbar,
} from "./components";
import "./App.scss";

const App = () => {
  const [showLogo, setShowLogo] = useState(true);

  useEffect(() => {
    const delay = setTimeout(() => {
      setShowLogo(false);
    }, 1800);

    return () => {
      clearTimeout(delay);
    };
  }, []);

  return (
    <>
      {showLogo && (
        <div className="logo-container">
          <img src="logo.png" alt="logo" />
        </div>
      )}
      {!showLogo && (
        <>
          <Navbar />
          <FloatNavbar />
          <div className="app-container">
            <Header />
            <About />
            <Career />
            <Projects />
            <OtherProjects />
            <Contact />
          </div>
        </>
      )}
    </>
  );
};

export default App;

import React from "react";
import "./Header.scss";
import { useSpring, animated } from "react-spring";
import { PiArrowBendUpLeft } from "react-icons/pi";

const Header = () => {
  const AnimatedElement = ({ children, delay }) => {
    const props = useSpring({
      opacity: 1,
      transform: "translateY(0)",
      from: { opacity: 0, transform: "translateY(-100%)" },
      config: { duration: 150 },
      delay,
    });

    return <animated.div style={props}>{children}</animated.div>;
  };

  return (
    <header className="header">
      <div className="header__container">
        <AnimatedElement delay={400}>
          <h4>Witaj, nazywam się</h4>
        </AnimatedElement>
        <AnimatedElement delay={800}>
          <h1>Karol Bialuk.</h1>
        </AnimatedElement>
        <AnimatedElement delay={1000}>
          <h2>Buduje strony i aplikacje.</h2>
        </AnimatedElement>
        <AnimatedElement delay={1200}>
          <p>
            Jestem początkującym web developerem, ukierunkowanym na tworzenie
            dynamicznych stron i aplikacji przy użyciu frameworka{" "}
            <span>React.</span> Moja pasja do programowania połączona z
            kreatywnym podejściem do projektowania umożliwia mi tworzenie
            interaktywnych i nowoczesnych rozwiązań.
          </p>
        </AnimatedElement>

        <AnimatedElement delay={1400}>
          <div className="header__btn-arrow-container">
            <button className="header__contact-btn">Kontakt</button>
            <div className="header__arrow">
              <PiArrowBendUpLeft />
            </div>
          </div>
        </AnimatedElement>
      </div>
    </header>
  );
};

export default Header;

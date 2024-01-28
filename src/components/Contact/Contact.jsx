import React, { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import { PiArrowBendUpLeft } from "react-icons/pi";
import "./Contact.scss";

const Contact = () => {
  const [triggered, setTriggered] = useState(false);

  const AnimatedElement = ({
    children,
    delay,
    triggerHeight,
    duration = 250,
  }) => {
    const props = useSpring({
      opacity: triggered ? 1 : 0,
      transform: triggered ? "translateY(0)" : "translateY(-30%)",
      from: { opacity: 0, transform: "translateY(-30%)" },
      config: { duration: duration },
      delay,
    });

    useEffect(() => {
      const handleScroll = () => {
        if (!triggered && window.scrollY + window.innerHeight > triggerHeight) {
          setTriggered(true);
        }
      };

      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, [triggered, triggerHeight]);

    return <animated.div style={props}>{children}</animated.div>;
  };
  return (
    <section id="kontakt" className="contact">
      <div className="contact__container">
        <h4>04. Co dalej?</h4>
        <h1>Skontakuj się</h1>
        <AnimatedElement delay={400} triggerHeight={5800}>
          <p>
            Masz propozycję współpracy? chcesz abym zaprojektował i stworzył dla
            ciebie stronę internetową? Napisz do mnie.
          </p>
        </AnimatedElement>
        <div className="header__elements-container">
          <div className="header__btn-arrow-container">
            <a href="mailto:karol.bialuk@gmail.com">
              <button>Kontakt</button>
            </a>
            <div className="header__arrow">
              <PiArrowBendUpLeft />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

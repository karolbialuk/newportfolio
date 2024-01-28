import React, { useEffect, useState } from "react";
import { useSpring, animated } from "react-spring";
import "./About.scss";

const About = () => {
  const [triggered, setTriggered] = useState(false);

  const AnimatedElement = ({
    children,
    delay,
    triggerHeight = 1500,
    duration = 200,
  }) => {
    const props = useSpring({
      opacity: triggered ? 1 : 0,
      from: { opacity: 0 },
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
    <section id="omnie" className="about">
      <div className="about__container">
        <div className="about__header">
          <div className="about__header-h1">
            <h1>
              <span>01.</span> O mnie
            </h1>
          </div>
          <div className="about__header-h1-line" />
        </div>
        <div className="about__elements-container">
          <div className="about__text-container">
            <AnimatedElement delay={300} duration={400}>
              <p>
                Zajmuję się projektowaniem i programowaniem stron internetowych,
                począwszy od prostych stron informacyjnych, po bardziej
                rozwinięte aplikacje internetowe, wykorzystujące wcześniej
                napisany backend. Tworząc nowe projekty nastawiam się na naukę i
                rozwój nowych elementów, ponieważ w przyszłości chciałbym zostać
                Web developerem.
              </p>
              <p>
                Oprócz projektowania i programowania stron internetowych, zawsze
                staram się być na bieżąco z najnowszymi trendami
                technologicznymi oraz nowościami w dziedzinie{" "}
                <span>web developmentu.</span> Regularnie uczestniczę w
                konferencjach, kursach online i szkoleniach, aby poszerzać moją
                wiedzę i umiejętności.
              </p>
            </AnimatedElement>
          </div>

          <AnimatedElement delay={200}>
            <div className="about__img-container">
              <div className="about__img-filter" />
              <img src="moje.jpg" alt="myphoto" />
            </div>
          </AnimatedElement>
        </div>
        <p>A tutaj kilka technologii z którymi pracowałem:</p>
        <AnimatedElement delay={1000}>
          <div className="about__list">
            <ul>
              <li>JavaScript (ES6+)</li>
              <li>React</li>
              <li>Node.js</li>
            </ul>
            <ul>
              <li>TypeScript</li>
              <li>Redux</li>
              <li>WordPress</li>
            </ul>
          </div>
        </AnimatedElement>
      </div>
    </section>
  );
};

export default About;

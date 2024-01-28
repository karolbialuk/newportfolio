import React from "react";
import "./FloatNavbar.scss";
import { SlSocialGithub } from "react-icons/sl";
import { SlSocialLinkedin } from "react-icons/sl";
import { CiInstagram } from "react-icons/ci";
import { useSpring, animated } from "react-spring";

const FloatNavbar = () => {
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
    <nav className="floatnavbar">
      <div className="floatnavbar__container">
        <AnimatedElement delay={200}>
          <a href="https://github.com/karolbialuk">
            <SlSocialGithub />
          </a>
        </AnimatedElement>
        <AnimatedElement delay={400}>
          <a href="https://www.linkedin.com/in/karol-bialuk-61772227b/">
            <SlSocialLinkedin />
          </a>
        </AnimatedElement>
        <AnimatedElement delay={600}>
          <a href="https://www.instagram.com/bialuczeeg">
            <CiInstagram />
          </a>
        </AnimatedElement>
        <div className="floatnavbar__line" />
      </div>
    </nav>
  );
};

export default FloatNavbar;

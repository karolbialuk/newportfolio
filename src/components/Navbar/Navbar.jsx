import React, { useState, useEffect } from "react";
import "./Navbar.scss";
import { RxHamburgerMenu } from "react-icons/rx";
import { useSpring, animated } from "react-spring";
import { Link } from "react-scroll";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrollPos, setScrollPos] = useState(0);
  const [isScrollingUp, setIsScrollingUp] = useState(true);
  const [isNavVisible, setIsNavVisible] = useState(true);

  const AnimatedElement = ({ children, delay }) => {
    const props = useSpring({
      opacity: 1,
      transform: "translateY(0)",
      from: { opacity: 0, transform: "translateY(-100%)" },
      config: { duration: 50 },
      delay,
    });

    return <animated.div style={props}>{children}</animated.div>;
  };

  const downloadFile = () => {
    const fileUrl = "/Karol Bialuk CV_PL.pdf";

    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = "Karol Bialuk CV_PL.pdf";

    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      const scrollingUp = currentScrollPos < scrollPos;
      setIsScrollingUp(scrollingUp);

      setScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPos]);

  return (
    <nav className={`navbar ${isScrollingUp ? "scroll-up" : "scroll-down"}`}>
      <div className="navbar__container">
        <AnimatedElement delay={200}>
          <div className="navbar__logo">
            <img src="logo.png" alt="logo" />
          </div>
        </AnimatedElement>

        <div className="navbar__items">
          <AnimatedElement delay={200}>
            <Link
              to="omnie"
              smooth={true}
              duration={500}
              style={{ cursor: "pointer" }}
            >
              <span>01.</span> O mnie
            </Link>
          </AnimatedElement>
          <AnimatedElement delay={400}>
            <Link
              to="doswiadczenie"
              smooth={true}
              duration={500}
              style={{ cursor: "pointer" }}
            >
              <span>02.</span> Doświadczenie
            </Link>
          </AnimatedElement>
          <AnimatedElement delay={600}>
            <Link
              to="projekty"
              smooth={true}
              duration={500}
              style={{ cursor: "pointer" }}
            >
              <span>03.</span> Projekty
            </Link>
          </AnimatedElement>
          <AnimatedElement delay={800}>
            <Link
              to="kontakt"
              smooth={true}
              duration={500}
              style={{ cursor: "pointer" }}
            >
              <span>04.</span> Kontakt
            </Link>
          </AnimatedElement>
          <AnimatedElement delay={1000}>
            <button onClick={downloadFile} className="navbar__button">
              CV
            </button>
          </AnimatedElement>
        </div>

        <div className="navbar__menu">
          <div className="navbar__menu-icon">
            <RxHamburgerMenu onClick={(e) => setOpen(!open)} />
          </div>
          {open && (
            <div className="navbar__menu-container">
              <a href="#omnie">
                <span>01.</span> O mnie
              </a>
              <a href="#doswiadczenie">
                <span>02.</span> Doświadczenie
              </a>
              <a href="#projekty">
                <span>03.</span> Projekty
              </a>
              <a href="#kontakt">
                <span>04.</span> Kontakt
              </a>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

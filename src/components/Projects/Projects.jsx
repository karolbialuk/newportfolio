import React, { useState, useEffect } from "react";
import "./Projects.scss";
import { RiGithubLine } from "react-icons/ri";
import RightElementProject from "../RightElementProject/RightElementProject";
import LeftElementProject from "../LeftElementProject/LeftElementProject";
import { useSpring, animated } from "react-spring";

const Projects = () => {
  const [triggered, setTriggered] = useState(false);

  const elementInfo = [
    {
      name: "Auta & Aukcje",
      img: "project1.png",
      text: "Strona internetowa, którą stworzyłem, skupia się na umożliwieniu użytkownikom przeglądania dostępnych aukcji samochodów, sprawdzania cen, a także uzyskiwania kontaktowych informacji od sprzedających. Cały interfejs graficzny został zaprojektowany na podstawie jednego z prototypów na Figmie.",
      technologies: ["React", "Node.js"],
      githubHref: "https://github.com/karolbialuk/carauctionweb",
      projectHref: "http://bialuk.pl:5001/login",
    },
    {
      name: "Chat App",
      img: "project2.png",
      text: "Aplikacja została zaprojektowana z myślą o zapewnieniu prostego i interaktywnego środowiska do komunikacji z innymi użytkownikami. Wykorzystanie Reacta, node i socket.io pozwoliło na stworzenie responsywnego interfejsu użytkownika, gwarantując płynne doświadczenia podczas korzystania z aplikacji. Cały interfejs graficzny został zaprojektowany na podstawie jednego z prototypów na Figmie.",
      technologies: ["React", "Node.js", "Socket.io", "TypeScript"],
      githubHref: "https://github.com/karolbialuk/chatapp",
      projectHref: "http://bialuk.pl:5002/login",
    },

    {
      name: "Social Media",
      img: "project3.png",
      text: "Strona intenetowa, którą stworzyłem, ma imitować portal społecznościowy na którym mamy możliwość tworzenia kont użytkowników, dodawania znajomych, dodawania postów wraz ze zdjęciami. Projekt posiada także dodatkowe funkcje takie jak: Dodawanie komentarzy pod postami, lajkowanie postów oraz komentarzy. Aplikacja jest w trakcie tworzenia i chciałbym dodać do niej możliwość zapisywania postów, tworzenie stron organizacji czy obserwowanie użytkowników. Cały interfejs graficzny został zaprojektowany na podstawie jednego z prototypów na Figmie przy użyciu biblioteki MUI.",
      technologies: ["React", "Node.js", "TypeScript"],
      githubHref: "https://github.com/karolbialuk/socialapp",
      projectHref: "",
    },
  ];

  const AnimatedElement = ({
    children,
    delay,
    triggerHeight = 3000,
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
    <section id="projekty" className="projects">
      <div className="projects__container">
        <div className="projects__header">
          <div className="projects__header-h1">
            <h1>
              <span>03.</span> Projekty
            </h1>
          </div>
          <div className="projects__header-h1-line" />
        </div>
        <div className="projects__projects-container">
          {elementInfo?.map((item, index) => {
            if (index % 2 === 0) {
              return (
                <>
                  <AnimatedElement delay={500}>
                    <RightElementProject item={item} />
                  </AnimatedElement>
                </>
              );
            } else {
              return (
                <>
                  <AnimatedElement delay={1000}>
                    <LeftElementProject item={item} />
                  </AnimatedElement>
                </>
              );
            }
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;

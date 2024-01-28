import React from "react";
import "./OtherProjects.scss";
import { CiFolderOn } from "react-icons/ci";
import { FiExternalLink } from "react-icons/fi";

const OtherProjects = () => {
  const elementInfo = [
    {
      href: "https://github.com/karolbialuk/generator",
      name: "Generator haseł",
      text: "Aplikacja umożliwia użytkownikom tworzenie bezpiecznych haseł poprzez dostęp do różnych funkcji, takich jak zmiana znaków, regulacja długości oraz wyświetlanie siły generowanego hasła.",
      technologies: ["React"],
    },
    {
      href: "https://github.com/karolbialuk/footballapp",
      name: "Strona sportowa",
      text: "Strona pozwala na sprawdzanie wyników meczów, przebiegów dla topowych lig piłkarskich oraz pozwala na sprawdzanie przebiegów tych meczów.",
      technologies: ["React, Redux"],
    },
    {
      href: "https://github.com/karolbialuk/spotify",
      name: "Spotify",
      text: "Aplikacja jest moim odwzorowaniem Spotify, pozwala na odtwarzanie polubionej muzyki, swoich playlist za pośrednictwem swojego konta Spotify. Aplikacja wymaga połącznia z kontem premium Spotify.",
      technologies: ["React, Redux"],
    },
    {
      href: "https://mojnetflix.netlify.app",
      name: "Netflix",
      text: "Jest to odwzorowanie głównego layoutu Netflixa. Głównym celem było jak najwierniejsze odwzorowanie graficzne. Jest to jeden z moich pierwszych projektów, stworzony na podstawie jednego z kursów.",
      technologies: ["React"],
    },
    {
      href: "https://github.com/karolbialuk/portfolioweb",
      name: "Stare portfolio",
      text: "Projekt przedstawia moje pierwsze portfolio. W tym przypadku skupiłem się głównie na interfejsie. Subtelne anmiacje oraz przedstawiony tekst tworzą razem całkiem subtelne portfolio.",
      technologies: ["React"],
    },
    {
      href: "",
      name: "Mój przyszły projekt",
      text: "Tu znajduje się miejsce na mój przyszły projekt.",
      technologies: [""],
    },
  ];

  return (
    <section className="otherprojects">
      <div className="otherprojects__header">
        <h1>Inne projekty</h1>
      </div>
      <div>
        <div className="otherprojects__grid-container">
          {elementInfo.map((item) => {
            const { href, name, text, technologies } = item;
            return (
              <div className="otherprojects__grid-item">
                <div className="otherprojects__grid-icons">
                  <div className="otherprojects__first-icon">
                    <CiFolderOn />
                  </div>
                  <div className="otherprojects__second-icon">
                    <a href={href}>
                      <FiExternalLink />
                    </a>
                  </div>
                </div>
                <div className="otherprojects__grid-header">
                  <h2>{name}</h2>
                </div>
                <div className="otherprojects__grid-text">
                  <p>{text}</p>
                </div>
                <div className="otherprojects__grid-technologies">
                  {technologies.map((item) => {
                    return <div>{item}</div>;
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OtherProjects;

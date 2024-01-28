import React, { useState } from "react";
import "./Career.scss";

const Career = () => {
  const [option, setOption] = useState("UDX Dominik Traskowski");

  console.log(option);

  return (
    <section id="doswiadczenie" className="career">
      <div className="career__container">
        <div className="career__header">
          <div className="career__header-h1">
            <h1>
              <span>02.</span> Doświadczenie
            </h1>
          </div>
          <div className="career__header-h1-line" />
        </div>

        <div className="career__elements-container">
          <div className="career__left-sidebar-container">
            <ul onClick={(e) => setOption(e.target.outerText)}>
              <li
                style={{
                  borderLeft:
                    option === "UDX Dominik Traskowski"
                      ? "1px solid #0aada5"
                      : "none",
                }}
              >
                UDX Dominik Traskowski
              </li>
              <li
                style={{
                  borderLeft:
                    option === "NS Code" ? "1px solid #0aada5" : "none",
                }}
              >
                NS Code
              </li>
              <li
                style={{
                  borderLeft:
                    option === "CCIG Group" ? "1px solid #0aada5" : "none",
                }}
              >
                CCIG Group
              </li>
            </ul>
          </div>
          {option === "UDX Dominik Traskowski" && (
            <div className="career__content-container">
              <h1>Web Developer - UDX Dominik Traskowski </h1>
              <h2>Luty - Maj 2023</h2>
              <ul>
                <li>
                  Wspieranie w projektowaniu i implementacji interfejsów
                  użytkownika dla stron internetowych Pomoc w testowaniu i
                  optymalizacji witryn, w celu Zapewnienia ich wysokiej
                  wydajności i responsywności.
                </li>
                <li>
                  Wsparcie w konfiguracji i dostosowywaniu stron opartych na
                  platformie WordPress, w tym instalowanie i konfigurowanie
                  motywów i wtyczek.
                </li>
                <li>
                  Uczestnictwo w spotkaniach zespołu projektowego, zapoznanie
                  się z wymaganiami klientów i udział w procesie tworzenia
                  projektów.
                </li>
              </ul>
            </div>
          )}
          {option === "NS Code" && (
            <div className="career__content-container">
              <h1>Web Developer - NS Code</h1>
              <h2>Listopad - Luty 2022 | 2023</h2>
              <ul>
                <li>
                  Tworzenie i modyfikowanie stron internetowych przy użyciu
                  języków HTML, CSS i JavaScript, w celu zapewnienia
                  atrakcyjnego wyglądu i odpowiedniej funkcjonalności.
                </li>
                <li>
                  Aktualizacja i utrzymanie istniejących stron internetowych, w
                  tym wprowadzanie zmian treści, rozwiązywanie problemów
                  technicznych i zapewnianie zgodności z najnowszymi
                  standardami.
                </li>
                <li>
                  Badanie i śledzenie najnowszych trendów w projektowaniu stron
                  internetowych i aplikacji, oraz proponowanie innowacyjnych
                  rozwiązań w obszarze interfejsu użytkownika.
                </li>
              </ul>
            </div>
          )}
          {option === "CCIG Group" && (
            <div className="career__content-container">
              <h1>IT Super User - CCIG Group</h1>
              <h2>Luty - Maj 2021</h2>
              <ul>
                <li>Administrowanie zasobami komputerowymi.</li>
                <li>Kontaktowanie się z biurem obsługi klienta.</li>
                <li>Naprawa sprzętu komputerowego.</li>
                <li>
                  Wydawanie i konfigurowanie stacji serwisowej na HomeOffice.
                </li>
                <li>Opieka nad oprogramowaniem sieciowym.</li>
                <li>
                  Opieka informatyczna nad zasobami menedżerów biznesowych.
                </li>
                <li>
                  Pomoc w rozwiązywaniu problemów związanych z oprogramowaniem.
                  konsultantów
                </li>
                <li>opieka nad stanowiskami pracy konsultantów.</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Career;

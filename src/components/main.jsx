import React from "react";
import Undraw from "../assets/Undraw_Books.svg";

const Main = () => {
  return (
    <section id="main">
      <header>
        <div className="header__container">
          <div className="header__description">
            <h1>
              Deutschlands meistausgezeichnete Online-Bibliotheksplattform
            </h1>
            <h2>
              Finden Sie Ihr Traumbuch mit{" "}
              <span className="purple">Bibliothek</span>
            </h2>
            <a className="space" href="#features">
              <button className="taste">Bücher du chstöbern</button>
            </a>
          </div>
          <figure className="header__img--wrapper">
            <img src={Undraw} className="img__thing" alt="" />
          </figure>
        </div>
      </header>
    </section>
  );
};

export default Main;

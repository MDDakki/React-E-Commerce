import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Highlight from "./ui/Highlight";

const Highlights = () => {
  return (
    <section id="highlights">
      <div className="container">
        <div className="row">
          <h2 className="section__titel">
            Warum Sie unsere <span className="purple">Bibliothek</span> wählen sollen?
          </h2>
          <div className="highlight__wrapper">
            <Highlight 
            icon={<FontAwesomeIcon icon="bolt"/>}
            title="Einfach und schnell" 
            para="Erhalten Sie sofort Zugriff auf das Buch, das Sie online gekauft haben."/>
            <Highlight 
            icon={<FontAwesomeIcon icon="book-open"/>}
            title="10,000+ Bücher" 
            para="In der Bibliothek finden Sie Bücher in allen Ihren Lieblingskategorien."/>
            <Highlight 
            icon={<FontAwesomeIcon icon="tags"/>}
            title="Günstig" 
            para="Sichern Sie sich beliebte Bücher für nur 10€."/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlights;

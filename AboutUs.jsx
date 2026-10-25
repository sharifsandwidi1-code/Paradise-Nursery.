import React from 'react';
import './AboutUs.css';

function AboutUs() {
  return (
    <div className="about-us-container">
      <h2 className="about-us-heading">À propos de Paradise Nursery</h2>
      <p className="about-us-description">
        Bienvenue chez <strong>Paradise Nursery</strong>, votre destination privilégiée 
        pour transformer votre intérieur en une véritable oasis de verdure. 
        Nous sélectionnons avec passion des plantes d'intérieur purificatrices, 
        aromatiques et décoratives de haute qualité pour enrichir votre quotidien.
      </p>
      <p className="about-us-content">
        Notre mission est de rendre le jardinage d'intérieur accessible à tous, 
        que vous soyez débutant ou passionné expérimenté. Chaque plante est accompagnée 
        de conseils d'entretien détaillés afin de garantir son épanouissement chez vous.
      </p>
    </div>
  );
}

export default AboutUs;

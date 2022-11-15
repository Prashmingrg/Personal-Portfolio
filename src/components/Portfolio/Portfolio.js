import React from "react";
import "./Portfolio.css";
import img1 from "../../assets/Calculator.png";
import img2 from "../../assets/screenshot1.png";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={img1} alt="Portfolio" />
          </div>
          <h3>Building calcualtor using react.js</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" className="btn">
              Github
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={img2} alt="Portfolio" />
          </div>
          <h3>Creating website using react.js</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" className="btn">
              Github
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;

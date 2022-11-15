import React from "react";
import "./Services.css";
import { FiCheckCircle } from "react-icons/fi";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container serices__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className="service__list">
            <li>
              <FiCheckCircle className="service__list-icon" />
              <p>Strong Photoshop skills.</p>
            </li>
            <li>
              <FiCheckCircle className="service__list-icon" />
              <p>Good knowledge of figma.</p>
            </li>
            <li>
              <FiCheckCircle className="service__list-icon" />
              <p>
                Website Design Skills with a creative eye for aesthetic
                direction
              </p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>App Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <FiCheckCircle className="service__list-icon" />
              <p>Understanding of GraphQL, REST APIs, and offline storage.</p>
            </li>
            <li>
              <FiCheckCircle className="service__list-icon" />
              <p>Experience in Node.js application </p>
            </li>
            <li>
              <FiCheckCircle className="service__list-icon" />
              <p>
                Strong hands-on experience on React Native framework based
                mobile app development
              </p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <FiCheckCircle className="service__list-icon" />
              <p>Create beautifully crafted content pages </p>
            </li>
            <li>
              <FiCheckCircle className="service__list-icon" />
              <p>Testing, bug-fixing, and deploying</p>
            </li>
            <li>
              <FiCheckCircle className="service__list-icon" />
              <p>Assisting the Web Development team in client meetings</p>
            </li>
            <li>
              <FiCheckCircle className="service__list-icon" />
              <p>Proficient in HTML, CSS, and JavaScript</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;

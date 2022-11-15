import React from "react";
import "./About.css";
import ME from "../../assets/prasmin-removebg-preview.png";

const About = () => {
  return (
    <section id="about">
      <h5>My Education</h5>
      <h2>About Me </h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Me" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <h5>Dented Code</h5>
              <small>6 Months(August 2022 - Present)</small>
            </article>

            <article className="about__card">
              <h5>Victoria Institute of Technology (VIT)</h5>
              <small>Intership in VIT(2022)</small>
            </article>

            <article className="about__card">
              <h5>
                Victoria Institute of Technology (March 2020 - June 2022){" "}
              </h5>
              <small>Bachelor Of Information Technology</small>
            </article>
          </div>

          <p>
            Seeking a growth-oriented job with continuous learning and sheer
            hard work, which offer a high level of responsibility, challenges,
            and opportunity.
          </p>

          <a href="#contact" className="btn btn-primary">
            Reach Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;

import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Negmatov Nodirbek </span>
            from <span className="purple"> Samarqand, Uzbekistan</span>
            <br />I was born in 2008. I studied at "Najot ta'lim" in Uzbekistan
            for 9 months and reached the level of a beginner programmer, and
            during this time I managed to create several projects. In the
            future, join a good company and create useful projects for people
            with the company
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Football with my freinds
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Large Projects</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

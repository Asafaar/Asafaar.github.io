import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Asaf rozen </span>
            <br />
            As a computer science student brimming with passion for technology, I'm actively seeking my first professional role to launch my career. My academic journey at Bar Ilan university, Currently pursuing the final year of my Integrated MSc (IMSc) in Computer science, has equipped me with a strong foundation in programming, algorithms, and software development principles.


            <br />
            <br />
            <br />
          </p>

        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

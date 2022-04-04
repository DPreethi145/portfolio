import React from "react";
import Card from "react-bootstrap/Card";
import { AiTwotoneEdit } from "react-icons/ai";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello,my self  <span className="purple">  Preethi </span>
            from <span className="purple">  Sirpur Kaghaznagar(Telangana,India). </span>
            <br />I am a junior pursuing MERN-Full Satck Web Developer in Prepbytes.
            <br />
            <br />
            Apart from coding, some other activities that I Excited to do!
          </p>
          <ul>
            <li className="about-activity">
            <pre><AiTwotoneEdit /> Playing Sudoku</pre>
            </li>
            <li className="about-activity">
            <pre><AiTwotoneEdit /> Social Activities</pre>
            </li>
            <li className="about-activity">
            <pre><AiTwotoneEdit /> Internet Browsing</pre>
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

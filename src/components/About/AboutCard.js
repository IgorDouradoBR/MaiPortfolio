import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Maiara Silveira </span> 
            from <span className="purple">Porto Alegre, Rio Grande do Sul, Brazil.</span>
            <br />
            I have been working as a UX/UI Designer at the Apple Developer Academy POA 
            for the past two years, where I design impactful to softwares and user-centered experiences.
            <br />
            I am currently pursuing a postgraduate degree in UX Design to further enhance my skills in crafting user-focused solutions.
            <br />
            <br />
            Apart from design, here are a few things I enjoy doing in my free time:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Painting
            </li>
            <li className="about-activity">
              <ImPointRight /> Curating Clothes and Items
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading
            </li>
            <li className="about-activity">
              <ImPointRight />  Sewing
            </li>
          </ul>
  
          <p style={{ color: "rgb(155 126 172)" }}>
            "Design is not just how it looks, but how it works and makes people feel!"{" "}
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
  
}

export default AboutCard;

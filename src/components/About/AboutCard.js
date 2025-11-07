import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone, I’m <span className="purple">Maiara Silveira</span>{" "}
            from
            <span className="purple">
              {" "}
              Porto Alegre, Rio Grande do Sul, Brazil
            </span>
            .
            <br />
            I’m a UX/UI Designer at{" "}
            <span className="purple">Nexus Software Development</span>, where I
            design and scale a white-label app end-to-end—from research and
            information architecture to prototyping, usability, and multi-client
            adaptability.
            <br />
            <br />I was the{" "}
            <span className="purple">
              winner of the 13th edition of Campus Mobile
            </span>{" "}
            — as the Designer behind the SAF Herbaria project. This achievement
            took me to <span className="purple">Silicon Valley, USA.</span>,
            where I showcased the product and its research-driven design.
            <br />
            <br />
            Previously, I worked at the{" "}
            <span className="purple">Apple Developer Academy POA</span> ,
            creating immersive apps aligned with Human Interface Guidelines and
            accessibility best practices. I’m currently pursuing a postgraduate
            degree in UX Design at <span className="purple">PUCRS</span>.
            <br />
            <br />
            I’m currently pursuing a postgraduate degree in UX Design at{" "}
            <span className="purple">PUCRS</span>
            <br />
            <br />
            Apart from design, here are a few things I enjoy doing in my free
            time:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Cooking
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading
            </li>
            <li className="about-activity">
              <ImPointRight /> Sewing
            </li>
            <li className="about-activity">
              <ImPointRight /> Curating Clothes
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Design is not just how it looks, but how it works and makes people
            feel!"{" "}
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

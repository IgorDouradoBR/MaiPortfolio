import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiPython,
  DiGithubBadge,
  DiHtml5,
  DiIllustrator,
  DiPhotoshop,
  DiApple,
  DiCss3,
  DiSwift,
  DiJava,
} from "react-icons/di";
import {
  SiFigma,
  SiMiro,
  SiAdobexd,
} from "react-icons/si";
import { TbBrandNotion, TbBrandSketch } from "react-icons/tb";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={6} md={3} className="tech-icons">
        <SiFigma />
      </Col>
      <Col xs={6} md={3} className="tech-icons">
        <TbBrandSketch />
      </Col>
      <Col xs={6} md={3} className="tech-icons">
        <DiIllustrator />
      </Col>
      <Col xs={6} md={3} className="tech-icons">
        <DiPhotoshop />
      </Col>
      <Col xs={6} md={3} className="tech-icons">
        <TbBrandNotion />
      </Col>
      <Col xs={6} md={3} className="tech-icons">
        <SiAdobexd />
      </Col>
      <Col xs={6} md={3} className="tech-icons">
        <DiApple />
      </Col>
      <Col xs={6} md={3} className="tech-icons">
        <DiHtml5 />
      </Col>
      <Col xs={6} md={3} className="tech-icons">
        <DiCss3 />
      </Col>
      <Col xs={6} md={3} className="tech-icons">
        <DiSwift />
      </Col>
      <Col xs={6} md={3} className="tech-icons">
        <DiGithubBadge />
      </Col>
      <Col xs={6} md={3} className="tech-icons">
        <SiMiro />
      </Col>
    </Row>
  );
}

export default Techstack;

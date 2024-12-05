import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiAdobeillustrator,
  SiFigma,
  SiVercel,
  SiMacos,
} from "react-icons/si";

import {

  DiIllustrator,
  DiPhotoshop,

} from "react-icons/di";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiFigma />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMacos />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiIllustrator />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPhotoshop />
      </Col>
    </Row>
  );
}

export default Toolstack;

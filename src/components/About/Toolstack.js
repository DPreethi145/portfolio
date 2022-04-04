import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiCodepen
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <h6>Visualstudio code</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCodepen/>
        <h6>Codepen</h6>
      </Col>
    </Row>
  );
}

export default Toolstack;

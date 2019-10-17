import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import "./BackgroundImg.css";
import Icons from "./../icons/Icons";

class BackgroundImg extends Component {
  render() {
    return (
      <Row className="bg" style={{ marginLeft: 0, marginRight: 0 }}>
        <Col md="8" align="center">
          <h1 className="title">DSC IIITDM Kurnool</h1>
          <h3 className="description">Powered by Google Developers</h3>
        </Col>
        <Col md="4" align="center">
          <Icons />
        </Col>
      </Row>
    );
  }
}

export default BackgroundImg;

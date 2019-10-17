import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import "./Icons.css";

class Icons extends Component {
  render() {
    return (
      <Row className="iRow">
        <Col className="iCol" xs="5" sm="5" md="12">
          <img
            className="dsc_logo"
            src={require("./../../assets/img/dsc_logo.png")}
            alt="DSC Logo"
          />
        </Col>
        <Col className="iCol" xs="1" sm="1" md="12">
          <img
            className="plus_icon"
            src={require("./../../assets/img/plus_icon.png")}
            alt="Plus Icon"
          />
        </Col>
        <Col className="iCol" xs="4" sm="4" md="12">
          <img
            className="iiitk_logo"
            src={require("./../../assets/img/iiitk_logo.png")}
            alt="IIITDM Kurnool"
          />
        </Col>
      </Row>
    );
  }
}

export default Icons;

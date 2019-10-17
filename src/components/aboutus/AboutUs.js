import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import "./AboutUs.css";

class AboutUs extends Component {
  render() {
    return (
      <Row className="iRow">
        <Col xs="12" sm="12" md="6" className="wwd">
          <Row className="tRow1">
            <h1>About Us</h1>
          </Row>
          <Row className="tRow1">
            <h5>
              Developer Student Clubs (DSC) is University based community group
              for students who are interested in Google Developer Technologies.
              As DSC Team, We teach students trending technologies such as
              Machine Learning, Deep Learning, Web Development, Android
              Development etc. Also, we organize hackathons and open workshops
              which can give technical exact solutions to the problems of common
              people. Our motto is to help students in building skills to
              produce scalable products and to help small businesses.
            </h5>
          </Row>
        </Col>
        <Col xs="12" sm="12" md="6"></Col>
      </Row>
    );
  }
}

export default AboutUs;

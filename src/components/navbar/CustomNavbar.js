import React, { Component } from "react";
import {
  Collapse,
  Row,
  Col,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
} from "reactstrap";
import "./CustomNavbar.css";

class CustomNavbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    return (
      <Row className="nb" noGutters={true}>
        <Col md="12" lg="12">
          <Navbar toggleable className="fixed-top">
            <NavbarToggler right onClick={this.toggle} />
            <NavbarBrand>
              <img
                src={require("./../../assets/img/dsc_iiitk_logo_white.png")}
                alt="DSC IIITK Logo"
              ></img>
            </NavbarBrand>
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav navbar className="combined_items">
                <NavItem>
                  <h6 className="nav_item">Home</h6>
                </NavItem>
                <NavItem>
                  <h6 className="nav_item">Events</h6>
                </NavItem>
                <NavItem>
                  <h6 className="nav_item">Projects</h6>
                </NavItem>
                <NavItem>
                  <h6 className="nav_item">The Team</h6>
                </NavItem>
                <NavItem>
                  <h6 className="nav_item">Contact Us</h6>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </Col>
      </Row>
    );
  }
}

export default CustomNavbar;

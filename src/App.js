import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./App.css";
import "./bootstrap/dist/css/bootstrap.min.css";
import BackgroundImg from "./components/background/BackgroundImg";
import CustomNavbar from "./components/navbar/CustomNavbar";
import AboutUs from "./components/aboutus/AboutUs";

function App() {
  return (
    <div>
      <div>
        <CustomNavbar />
      </div>
      <Container fluid={true} style={{ paddingLeft: 0, paddingRight: 0 }}>
        <BackgroundImg />
        <AboutUs />
      </Container>
    </div>
  );
}

export default App;

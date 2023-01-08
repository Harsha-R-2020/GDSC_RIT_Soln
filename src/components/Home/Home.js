import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/solutionch.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import YoutubeEmbed from "./YoutubeEmbed";
import 'animate.css';


function Home() {
  return (
    <section>
      
      <Container fluid className="home-section" id="home">
        {/* <Particle /> */}
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <div class="animate__animated animate__fadeInLeft animate__delay-2s">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                This is
                <strong className="main-name"> Google Developer Students Club RIT </strong>
              </h1>
              
              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
              </div>
            </Col>
        
            <Col md={5} style={{ paddingBottom: 20 }}>
            <div class="animate__animated animate__fadeInRight animate__delay-2s">
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
              </div>
            </Col>
            
          </Row>
          <Row><marquee width="60%" direction="right" height="100px" scrollamount="15">
           <strong className="green" >Registeration starts at 13th January 2023</strong> 
</marquee></Row>
          
        </Container>
        <Row><br></br></Row>
        <Row><br></br></Row>
        <Row><br></br></Row>
        <Row><br></br></Row>
        <Row><br></br></Row>
        <Row><br></br></Row>
        <Row><br></br></Row>
        <Row><br></br></Row>
        <Row><br></br></Row>
        <Row><br></br></Row>
        <Row><br></br></Row>

      </Container>
      
      

      <Home2 />
  
    </section>
  );
}

export default Home;

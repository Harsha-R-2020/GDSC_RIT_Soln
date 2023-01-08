import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/dsclogo.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGoogleCircle,
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import Particle from "../Particle";
import YoutubeEmbed from "./YoutubeEmbed";
import Aboutevent from "../Projects/aboutevent";

function Home2() {
  return (
    <Container fluid >
      <Container>
      
        <Row>
          <Col md={8} className="home-about-description">
           
      <div class="animate__animated animate__fadeInUp animate__delay-5s">
            <h1 style={{ fontSize: "2.6em" }}>
              The <span className="green"> Solution </span> Challenge '23
            </h1>
            
            <p className="home-about-body">
            The 2023 Solution Challenge will launch and registration will begin on January 13, 2023! 🤷‍♂️
              <br />
              <br />The mission of the 2023 Solution Challenge is to solve for one or more of the  
              <i>
                <b className="green"> United Nations 17 Sustainable Development Goals.</b>
              </i>
              <br />
              <br />
              The Solution Challenge is open to members of &nbsp;
              {/* <i> */}
                <b className="green">Google Developer Student Clubs. </b> Join GDSC and 
                {/* <button className="button-86" onclick="location.href=;" value="Join GDSC" /> */}
                <a href="/form">
             
                             <b className="green" style={{ fontSize: "1.6em" }}> Register Now</b>
                  </a>
            </p>
            </div>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
          <YoutubeEmbed embedId="EuEZ83VAfgQ" /> 
          <Aboutevent />
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND Us ON</h1>
            <p style={{color: 'white'}}>
              Feel free to <span className="green">connect </span>with us
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://gdsc.community.dev/ramco-institute-of-technology-rajapalayam/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGoogleCircle />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/company/google-developer-student-club-ramco-institute-of-technology/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/gdsc_rit/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
        <Container><Particle /></Container>
      </Container>
      
    </Container>
    
  );
}
export default Home2;

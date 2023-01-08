import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGoogleCircle,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by Harsha R - GDSC Lead 2022-23</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} Harsha</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            {/* <li className="social-icons">
              <a
                href="https://github.com/Harsha-R-2020"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            */}
            <li className="social-icons">
              <a
                href="https://gdsc.community.dev/ramco-institute-of-technology-rajapalayam/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGoogleCircle />
              </a> 
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/company/google-developer-student-club-ramco-institute-of-technology/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/gdsc_rit/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;

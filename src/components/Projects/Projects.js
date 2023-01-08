import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/chat.jpg";
import editor from "../../Assets/Projects/Dcode.jpg";
import suicide from "../../Assets/Projects/gds.jpg";
import bitsOfCode from "../../Assets/Projects/kotlin.jpg";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Our Recent <strong className="purple">Events </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few Events We've conducted recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="GDSC Orientation Session"
              description="We are fascinated to announce that We are holding an Orientation Session for yet another brand new community for this tenure 2022-2023 .

              In this session we will be focusing on how we plan to execute activities around our college for this upcoming Academic Year, We will introduce the GDSC Core Team members along with Faculty Advisor and Welcome them on board. Join the session to get to know the current GDSC team and the full timeline of exciting events from all fields of technology."
              ghLink="https://gdsc.community.dev/events/details/developer-student-clubs-ramco-institute-of-technology-rajapalayam-presents-gdsc-orientation-session/"
             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Compose Camp Session"
              description="Jetpack Compose is the modern toolkit for building native user interfaces for Android apps. Compose makes it easier and faster to build UIs on Android.Compose apps are written in the Kotlin programming language. Kotlin is the language that the majority of professional Android developers use to build apps.This event focuses around how to build Android apps using Jetpack Compose, where attendees get hands-on coding experience with Compose."
              ghLink="https://gdsc.community.dev/events/details/developer-student-clubs-ramco-institute-of-technology-rajapalayam-presents-compose-camp-session-1/"
        
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="D-Code '22"
              description="Meeting you with an yet another event of GDSC-Ramco Institute of Technology

              The oldest encryption attempt known to mankind dates back to the kingdom of Egypt, around two thousand years before Christ.
              
              This event is all about decrypting.....
              
              In this event, particpants will be provided with an HEX-Encoded string to decrypt to find a meaningful word.
              
              RSVP for the event to particpate
              
              Limited participants only!!! "
              ghLink="https://gdsc.community.dev/events/details/developer-student-clubs-ramco-institute-of-technology-rajapalayam-presents-d-code-22/"
                          
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="CodeFreeChatbot"
              description="In this Event, you will learn how to create a chatbot to answer support questions about specific products and services.

              You can now build a fully functional chatbot to automate your website live chat without writing a single line of code.
              
              With codeless website chatbot builder, all you need to do is create a flow for your chatbot using our drag-and-drop interface and type in your bot responses."
              ghLink="https://gdsc.community.dev/events/details/developer-student-clubs-ramco-institute-of-technology-rajapalayam-presents-codefreechatbot/"
             
            />
          </Col>

        

       
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

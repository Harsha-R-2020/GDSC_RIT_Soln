import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCar from "./Projectcar";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/goal-04.png";
import emotion from "../../Assets/Projects/goal-05.png";
import editor from "../../Assets/Projects/goal-03.png";
import chatify from "../../Assets/Projects/goal-06.png";
import suicide from "../../Assets/Projects/goal-01.png";
import bitsOfCode from "../../Assets/Projects/goal-02.png";


function Aboutevent() {
  return (
    <Container fluid>
      <Particle />
      <Container>
        <h1 className="project-heading">
          Our Major <strong className="purple">Goals </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few United Nations 17 Sustainable Development Goals.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCar
              imgPath={suicide}
              isBlog={false}
              title="No Poverty"
              description="End poverty in all its forms, everywhere."
              ghLink="https://gdsc.community.dev/events/details/developer-student-clubs-ramco-institute-of-technology-rajapalayam-presents-gdsc-orientation-session/"
        
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCar
              imgPath={bitsOfCode}
              isBlog={false}
              title="Zero Hunger"
              description="End hunger, achieve food security and improved nutrition, and promote sustainable agriculture."
              ghLink="https://gdsc.community.dev/events/details/developer-student-clubs-ramco-institute-of-technology-rajapalayam-presents-compose-camp-session-1/"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCar
              imgPath={editor}
              isBlog={false}
              title="Good Health and Wellbeing"
              description="Ensure healthy lives and promote well-being for all, at all ages."
              ghLink="https://gdsc.community.dev/events/details/developer-student-clubs-ramco-institute-of-technology-rajapalayam-presents-d-code-22/"
                 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCar
              imgPath={leaf}
              isBlog={false}
              title="Quality Education"
              description="Ensure inclusive and equitable quality education and promote lifelong learning opportunities for all."
              ghLink="https://gdsc.community.dev/events/details/developer-student-clubs-ramco-institute-of-technology-rajapalayam-presents-codefreechatbot/"
             
            />
          </Col><Col md={4} className="project-card">
            <ProjectCar
              imgPath={emotion}
              isBlog={false}
              title="Gender Equality"
              description="Achieve gender equality and empower all women and girls."
              ghLink="https://gdsc.community.dev/events/details/developer-student-clubs-ramco-institute-of-technology-rajapalayam-presents-codefreechatbot/"
           
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCar
              imgPath={chatify}
              isBlog={false}
              title="Clean Water and Sanitation"
              description="Ensure availability and sustainable management of water and sanitation for all."
              ghLink="https://gdsc.community.dev/events/details/developer-student-clubs-ramco-institute-of-technology-rajapalayam-presents-codefreechatbot/"
             
            />
          </Col>


        

       
        </Row>
      </Container>
    </Container>
  );
}

export default Aboutevent;

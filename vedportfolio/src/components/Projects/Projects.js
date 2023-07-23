import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import movie from "../../Assets/Projects/movie.png";
import mauli from "../../Assets/Projects/mauli.png";
import diseasepredsys from "../../Assets/Projects/diseasepredsys.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mauli}
              isBlog={false}
              title="Mauli-A Women's Safety App"
              description="A Women's Safety Application which is helpful in alerting close people with an emergency text message and location coordinates of the victim. A recording feature to record the crime scene as a proof. A fake Siren which will alert the victim's environment.To shoot these all features at a time an Alert Button is developed. "
              ghLink="https://github.com/VedantikaG/Mauli-WomeSafetyApp"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={diseasepredsys}
              isBlog={false}
              title="Disease Prediction System"
              description="Diabetes, Hypertension and Thyroid are among 
              those critical diseases and a huge number of people are suffering 
              from these diseases. Age, Insulin level, Obesity, hereditary, bad 
              diet, etc. To get temporarily diagnosed at the patient’s ease is 
              what this system does. Disease prediction system is a system 
              which asks few questions related to particular disease and 
              predicts if the person is having that particular disease or not. 
              This system uses Support Vector Machine for prediction purpose 
              of these diseases viz. Hypertension, Diabetes and Thyroid. The 
              accuracy scores over train dataset are 86%, 78%, 96% and over 
              test data are 85%, 77%, 96% respectively."
              ghLink="https://github.com/VedantikaG/Disease-Prediction-System"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={movie}
              isBlog={false}
              title="Movie Recommendation System"
              description="A Movie Recommendation System based on the movie selected by the viewer. The movie is recommended with the help of cosine similarity.Tokenization and  Vectorization is performed on the datasets. Two dataset are merged"
              ghLink="https://github.com/VedantikaG/Movie-Recommendation-System"
                           
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

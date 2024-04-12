import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";


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
              imgPath={"/comfory.png"}
              isBlog={false}
              title="Comfory-store"
              description="Personal online shoping market  build with react.js, and Firebase. Have features which you can buy furnetures from using it, but it is not realy you don no pay money it just project  and I can create online shop."
              ghLink="https://github.com/nod1rDev/comfy_store"
              demoLink="https://nodirbek-react-comfy-store.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={"invoice.png"}
              isBlog={false}
              title="Invoice"
              description="Public invoice build with React and Tailwind Css which takes the content from figma files and renders it using react. Supports dark mode and easy to write blogs using Figma. You easly use my invoice project."
              ghLink="https://github.com/nod1rDev/IMTIHON"
              demoLink="https://nodirbek.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={"github_users.png"}
              isBlog={false}
              title="Search github users"
              description="Search github users build with react.js. Serch users which supports html, css, and js code with instant view of website. This website usefull for developers. Both the Serch github users supports auto save of work using Local Storage"
              ghLink="https://github.com/nod1rDev/search_github_user"
              demoLink="https://8-4-homwork.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={"mck.png"}
              isBlog={false}
              title="McKinesy.com"
              description=" McKinesy.com build with Next.js and Tailwind Css which takes the content from renders it using next.js. It is created for especialy work and somithing didn't work well but I will improve that. "
              ghLink="https://github.com/nod1rDev/mckinesy.com"
              demoLink="https://mckinesy-com.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={"encomers.png"}
              isBlog={false}
              title="Encommers"
              description="Encommers build with react.js. Encommers which supports html, css, and js code with instant view of website. This website usefull who search sneakers. Both the Serch github users supports auto save of work using Local Storage and more redux and complex modals used this project"
              ghLink="https://github.com/nod1rDev/Encommers"
              demoLink="https://7-12-imtihon.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={"portfolio.png"}
              isBlog={false}
              title="My Portfolio"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/nod1rDev/Portfolio.n"
              demoLink="https://portfolio-n-azure.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

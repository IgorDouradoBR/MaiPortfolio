import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import salao from "../../Assets/Projects/salao.png";


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
              imgPath={chatify}
              isBlog={false}
              title="Herbaria"
              description="Herbaria is an App to helps users identify plant species, visualize all the plants they care for, and receive tasks and notifications to remind them of their plant care routine, among many other features.."
              ghLink="https://www.behance.net/gallery/209512871/Herbaria-Smart-Plant-Care-App"
              demoLink="https://apps.apple.com/br/app/herbaria-seu-app-de-plantas/id6473550019"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Onírica"
              description="Onírica is an App designed to help users record and remember their dreams, track sleep patterns through insightful graphs, and enhance their sleep quality with features like a sleep tracker and a music player with soothing white noises, among many other features."
              ghLink="https://www.behance.net/gallery/214067863/Onirica-Dream-Diary"
              demoLink="https://apps.apple.com/br/app/on%C3%ADrica/id6737875597"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Koletora"
              description="Koletora is an App designed for card collectors to organize and visualize their collections, trade cards with others, and relive the nostalgia of collecting, all in one place."
              ghLink="https://www.behance.net/gallery/213975693/Koletora-Card-Collection-app?tracking_source=project_owner_other_projects"
              //demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Fuê"
              description="Fuê is an App for cooking enthusiasts to learn kitchen skills through quizzes and mini-games. As a UX/UI Designer and a gastronomy graduate, I combined my expertise and passion to create a fun and engaging platform that inspires users to explore culinary techniques."
              //ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://apps.apple.com/br/app/fuê/id6535653077"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Riddle Cards"
              description="Riddle Cards is an App featuring nearly 3000 riddles and jokes in English and Portuguese, inspired by popular card games. With 3 exclusive themes, it offers an engaging experience through interactive card designs, perfect for fun moments with friends or alone."
             // ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              demoLink="https://apps.apple.com/br/app/riddle-cards/id6569229614"
              />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Acesso+"
              description="Acesso+ is an App focused on accessibility and inclusion, designed to assist people with disabilities in navigating universities and educational spaces with ease and independence."
              // ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              demoLink="https://apps.apple.com/br/app/acesso/id6449302201" 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={salao}
              isBlog={false}
              title="Avand Studio"
              description="Avand Studio is a prototype of a beauty salon app created as part of a UX/UI design project. Designed for iPhone, iPad, and MacOS, it focuses on delivering a seamless and intuitive experience, showcasing modern interface design tailored for multiple Apple devices."
              ghLink="https://www.behance.net/gallery/206923057/Beauty-app-Case-Study-UIUX-design"
              //demoLink="https://apps.apple.com/br/app/acesso/id6449302201" 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={salao}
              isBlog={false}
              title="Dulce Natural"
              description="Dulce Natural is a prototype for a bakery platform and website, created as a web-focused case study. The design highlights an elegant and user-friendly interface, showcasing the unique offerings of the bakery while providing an intuitive experience for customers."
              ghLink="https://www.behance.net/gallery/146250863/UXUI-Case-Study-5-Bakery-web"
              //demoLink="https://apps.apple.com/br/app/acesso/id6449302201" 
            />
          </Col>
          
        </Row>
      </Container>
    </Container>
  );
}
export default Projects;

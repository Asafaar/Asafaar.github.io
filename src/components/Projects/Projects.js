import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import eng from "../../Assets/Projects/eng.jpg";
import Reminder from "../../Assets/Projects/reminder.jpg";
import Arcade from "../../Assets/Projects/arcadeassault.png";
import chat_Application from "../../Assets/Projects/buzztalk_project.png";
import esp32 from "../../Assets/Projects/esp32.jpg";
import VectorVision from "../../Assets/Projects/VectorVision.png";

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
              imgPath={chat_Application}
              isBlog={false}
              title="Chat Application"
              description=" This multi-platform chat application utilizes JSON queries via API for seamless communication. The React.js and Bootstrap web client employs MVC architecture and web sockets for real-time message updates. The Android client, adhering to MVVM architecture, manages local cache (Room database) and web service queries."
              ghLink="https://github.com/Asafaar/whatsapp-part-4"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={VectorVision}
              isBlog={false}
              title="VectorVision"
              description=" This C++ program facilitates image and data classification through a TCP-based client-server architecture. It enables constant synchronization of files and folders across multiple clients on different computers. Additionally, the server-side program classifies unknown vectors by comparing them to a stored vector database."
              ghLink="https://github.com/AharonGross1/VectorVision"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Arcade}
              isBlog={false}
              title="Arcade game"
              description="This object-oriented Java program recreates the classic Arkanoid game, adhering to OOP principles and design patterns. Players can engage in interactive gameplay, demonstrating the effective implementation of object-oriented programming concepts."
              ghLink="https://github.com/AharonGross1/Arcade-Assault"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={eng}
              isBlog={false}
              title=" learn English"
              description="This React and Express web application, available on your GitHub profile, aims to enhance your English language skills specifically for psychometric tests. It offers a convenient, web-based learning platform to support your test preparation. "
              ghLink="https://github.com/Asafaar/Words_app_for_psychometric"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={esp32}
              isBlog={false}
              title="automatic irrigation system use esp32"
              description=" independently built an automatic irrigation system using ESP32, interfacing it with Firebase for real-time soil and water monitoring. This project showcases your passion for learning and your ability to tackle new programming challenges."
              // ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Reminder}
              isBlog={false}
              title=" Reminders Android app(currently in works"
              description="Android app under development allows users to set reminders based on Jewish times of day. It integrates a Jewish Time API to accurately calculate these variations across global locations a person."
              // ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

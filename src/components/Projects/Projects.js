import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import html from "../../Assets/Projects/html.jpg";
import clock from "../../Assets/Projects/clock.jpg";
import Todo from "../../Assets/Projects/Todo.webp";
import react from "../../Assets/Projects/react.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked .
        </p>
        <Row style={{ justifyContent: "space-evenly", paddingBottom: "10px" }}>
          <Col md={5} className="project-card">
            <ProjectCard
              imgPath={react}
              isBlog={false}
              title="React Blog App"
              description="It includes capabilities React.JS and React Router mainly. While developing this project I understand that how I can create multiple components in React like Smart Components and Dummy Components and how to modify and do data operations within component using state variables and how to communicate between two components props variables by using HTML, CSS, JavaScript , React.JS"
              link="https://github.com/DPreethi145/ReactProject"
              link1= "https://focused-ardinghelli-bc8d3b.netlify.app"
            />
          </Col>

          <Col md={5} className="project-card">
            <ProjectCard
              imgPath={Todo}
              isBlog={false}
              title="To do App"
              description="This project sincludes JavaScript,CSS,HTML.I have created multiple components with same scripting and interpreted languages like To do App UI Web, To do App UI Mobile and To Do App JS.I have used multiple DOM functions which made the static application a dynamic one."
              link="https://github.com/DPreethi145/Todo-js"
              link1="https://dpreethi145.github.io/Todo-js/index.html"
            />
          </Col>

          <Col md={5} className="project-card">
            <ProjectCard
              imgPath={clock}
              isBlog={false}
              title="Digital Clock"
              description="Digital Clock created by using JavaScript and scripting language HTML and CSS, we look closely at the JavaScript code behind a clock. It includes multiple functions and created a clock and make it response on a particular time for taking tasks"
              link="https://github.com/DPreethi145/clockproject"
              link1= "https://dpreethi145.github.io/clockproject/index.html"
            />
          </Col>

          <Col md={5} className="project-card">
            <ProjectCard
              imgPath={html}
              isBlog={false}
              title="Building an HTML page"
              description="Backtracking created by using HTML. It shows how a normal text looks on windows, By using all tags in HTML and giving some styles in it."
              link="https://github.com/DPreethi145/project"
              link1="https://dpreethi145.github.io/project/project1.html"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

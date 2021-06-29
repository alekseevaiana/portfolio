import "../data";
import projectData from "../data";
import Project from "./Project";
import "./projects.css";

export default function Projects() {
  return (
    <div className="experience">
      <h2 className="heading_2">Experience</h2>
      <p className="paragraph_2">
        I have been coding for about 3 years, doing projects with different
        technologies, and building strong technical skills in data structures
        and algorithms. This is a list of main tools I’ve worked with:
      </p>
      <div className="experience_skills">
        <div className="experience_skills__block">
          <div>JavaScript</div>
          <div>Ruby</div>
        </div>
        <div className="experience_skills__block">
          <div>C</div>
          <div>CLI</div>
        </div>
        <div className="experience_skills__block">
          <div>HTML</div>
          <div>CSS</div>
        </div>
        <div className="experience_skills__block">
          <div>React</div>
          <div>Ruby on Rails</div>
        </div>
        <div className="experience_skills__block">
          <div>GIT</div>
          <div>Figma</div>
        </div>
      </div>
      <ul className="projects">
        {projectData.map((project) => {
          return <Project project={project} />;
        })}
      </ul>
    </div>
  );
}

import "./project.css";

export default function Project({ project }) {
  return (
    <>
      <li className="project">
        <div className="project_part">
          <h3>{project.title}</h3>
          <p className="project_paragraph">{project.description}</p>
          <p className="project_paragraph">Tools: {project.teck}</p>
        </div>
        <div className="project_buttons">
          <a href={project.github_link} className="project_link">
            Github
          </a>
          <a href={project.link} className="project_link">
            Demo
          </a>
        </div>
      </li>
    </>
  );
}

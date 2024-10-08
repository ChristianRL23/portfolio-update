import "./Projects.scss";
import projectData from "./../../projects.json";
import Project from "../../components/Project/Project";
import { useState } from "react";

const Projects = () => {
  const [currentFilter, setCurrentFilter] = useState("All");
  const [projects, setProjects] = useState(projectData);

  const handleClickFilter = (e) => {
    const filter = e.target.textContent.split(" ")[0];
    setCurrentFilter(filter);
    if (filter === "All") {
      setProjects(projectData);
    } else {
      setProjects(projectData.filter((project) => project.type === filter));
    }
  };

  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <p className="projects__description">
        All frontend projects are responsive and you can read the complete
        information about each project in the README file of the corresponding
        project repository.
      </p>

      <div className="projects__filter">
        <ul>
          <li
            className={currentFilter === "All" ? "active" : ""}
            onClick={(e) => handleClickFilter(e)}
          >
            All (6)
          </li>
          <li
            className={currentFilter === "Frontend" ? "active" : ""}
            onClick={(e) => handleClickFilter(e)}
          >
            Frontend (5)
          </li>
          <li
            className={currentFilter === "Backend" ? "active" : ""}
            onClick={(e) => handleClickFilter(e)}
          >
            Backend (1)
          </li>
        </ul>
      </div>

      {projects.map((project, index) => {
        let direction;
        if (index === 0 || index % 2 === 0) {
          direction = "right";
        } else {
          direction = "left";
        }

        return (
          <Project
            key={"id" + Math.random().toString(16).slice(2)}
            direction={direction}
            images={project.images}
            name={project.name}
            technologies={project.technologies}
            description={project.description}
            features={project.features}
            repository={project.repository}
            liveDemo={project.liveDemo}
          />
        );
      })}
    </section>
  );
};

export default Projects;

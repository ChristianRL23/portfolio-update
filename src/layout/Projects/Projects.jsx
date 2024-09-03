import './Projects.scss';
import projectData from './../../projects.json';
import Project from '../../components/Project/Project';

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <p className="projects__description">
        All projects are responsive and you can read the complete information
        about each project in the README file of the corresponding project
        repository.
      </p>
      {projectData.map((project, index) => {
        let direction;
        if (index === 0 || index % 2 === 0) {
          direction = 'right';
        } else {
          direction = 'left';
        }

        return (
          <Project
            key={'id' + Math.random().toString(16).slice(2)}
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

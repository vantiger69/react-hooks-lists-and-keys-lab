import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);
 
  const projectElement = projects.map((project) => {
    return (
      <ProjectItem
      key={project.id}
      name={project.name}
      description={project.description}
      technologies={project.technologies}
      />
    );
  });

  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{/* render ProjectItem components here */}
      {projectElement}
      </div>
    </div>
  );
}

export default ProjectList;

import React from "react";
import ProjectItem from "../ProjectItem/ProjectItem";
import MoreButton from "../Morebutton/MoreButton";

import { projects } from "@/components/utils/data";

const slicedProjects = projects.slice(0, 2);

function Projects({ route }) {
  return (
    <section
      id="projects"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          Projects
        </h2>
      </div>
      <div>
        <ul className="group/list">
          {slicedProjects.map((project, index) => (
            <ProjectItem
              key={index}
              thumbnail={project.thumbnail}
              title={project.title}
              description={project.description}
              tags={project.tags}
              demo={project.demo}
            />
          ))}
        </ul>
        <div className="mt-12">
          <MoreButton route="/projects" title="View Full Project Archive" />
        </div>
      </div>
    </section>
  );
}

export default Projects;

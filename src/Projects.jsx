import { FaCode } from "react-icons/fa";

import { Image } from "@nextui-org/react";
import { Project } from "./Components/Project";

import { PROJECTS } from "./data/ProjectList";

export function Projects() {
  return (
    <>
      <article id="projects" className="h-full section">
        <div className="pt-24 mb-10 text-white flex items-center">
          <FaCode className="text-lg" />
          <h2 className="text-2xl ml-2 font-bold">Projects</h2>
        </div>
        <div className="">
          {PROJECTS.map((project, index) => {
            return (
              <div key={index} className="mb-20">
                <Project project={project} />
              </div>
            );
          })}
        </div>
      </article>
    </>
  );
}

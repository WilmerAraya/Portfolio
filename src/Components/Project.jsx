import { Image } from "@nextui-org/react";
import { Carousel } from "flowbite-react";
import { FaSquareGithub } from "react-icons/fa6";
import { MdWork } from "react-icons/md";

export function Project({ project }) {
  return (
    <div>
      {project.link !== "" ? (
        <a
          href={project.link}
          className="text-yellow-300 text-lg font-semibold cursor-pointer hover:text-yellow-100"
          target="_blank"
        >
          {project.title}
        </a>
      ) : (
        <h1 className="text-gray-200 text-lg font-semibold">{project.title}</h1>
      )}

      <p className="text-gray-300">{project.description}</p>

      {project.company !== "" && (
        <a
          href={project.companyLink}
          className="text-white my-2 flex items-center hover:text-gray-400"
          target="_blank"
        >
          <MdWork className="mr-2" />
          {project.company}
        </a>
      )}
      {project.github !== "" && (
        <a
          href={project.github}
          className="text-white flex items-center my-2 hover:text-gray-400"
          target="_blank"
        >
          <FaSquareGithub className="mr-2" />
          Project repository
        </a>
      )}
      <div className="h-56 sm:h-80 xl:h-80 2xl:h-96">
        <Carousel pauseOnHover className="control-carousel">
          {project.images.map((image, index) => {
            return (
              <div key={index}>
                <Image isZoomed src={image} alt="..." />
              </div>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
}

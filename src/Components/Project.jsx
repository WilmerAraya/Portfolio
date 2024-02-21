import { Image } from "@nextui-org/react";
import { Carousel } from "flowbite-react";
import { FaSquareGithub } from "react-icons/fa6";
import { MdWork } from "react-icons/md";

export function Project({ project }) {
  return (
    <div>
      {project.title}

      {project.description}

      {project.github !== "" && (
        <a
          href={project.github}
          className="text-white flex items-center my-2 hover:text-yellow-300 underline"
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

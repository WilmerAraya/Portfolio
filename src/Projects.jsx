import { FaCode } from "react-icons/fa";

import { Image } from "@nextui-org/react";
import { Project } from "./Components/Project";

const PROJECTS = [
  {
    title: "Finances Web Application",
    description:
      "A web application for the company Lago & Sarmiento, an organization that offers financial mentoring. This web application is for financial projections targeting SMEs, it was built using .NET framework and a Microsoft SQL Server database.",
    company: "Lago & Sarmiento",
    companyLink: "https://www.lagoysarmiento.com/",
    images: [
      "https://i.gyazo.com/08f465383d80a3ad4d9e67c84c4cc1eb.png",
      "https://i.gyazo.com/64e68932ff9540a9791be3b4c8f8e0bf.png",
      "https://i.gyazo.com/b6e5821a738c924e8a62b77d04ee0fb2.png",
    ],
    github:
      "https://github.com/Wumpus-Proyecto-PI/CI0128_22B_Wumpus/tree/Sprint03",
  },
  {
    title: "RIDE Dashboard",
    description:
      "I participated in the development of the RIDE dashboard, an online food delivery platform that connects users with local restaurants. Implemented with Angular, Typescript and Firebase.",
    company: "RIDE Mensajería Ecológica",
    companyLink:
      "https://sites.google.com/view/ridemensajeriaecologica/inicio?authuser=0",
    link: "",
    images: [
      "https://i.gyazo.com/19b33e928652464b69007f5487cb37f4.png",
      "https://i.gyazo.com/b136d647cb8ae11298003db2cb1e4b1c.png",
    ],
    github: "",
  },
  {
    title: "De Feria CR",
    description:
      "I participated in the development of De Feria, a web application facilitating the location of farmer's markets throughout Costa Rica. The project, built in Python with the Django framework and backed by a PostgreSQL database, focused on providing users with an intuitive and efficient experience.",
    company: "Deferia",
    companyLink:
      "https://sites.google.com/view/ridemensajeriaecologica/inicio?authuser=0",
    link: "",
    images: [
      "https://i.gyazo.com/a1c80c9c43a3cf4c3a5d82848d202547.png",
      "https://i.gyazo.com/f5eec304f5eaf74f10b9186e3c6fc6f9.png",
      "https://i.gyazo.com/65a90954acf4829350f675bb3e907d4b.png",
      "https://i.gyazo.com/ef2d4a52bbcb4a6c72fc5ace0461add1.png",
    ],
    github: "",
  },
];

export function Projects() {
  return (
    <>
      <article id="projects" className="h-full">
        <div className="pt-24 mb-10 text-white flex items-center">
          <FaCode className="text-lg" />
          <h2 className="text-2xl ml-2 font-bold">Projects</h2>
        </div>
        <div className="">
          {PROJECTS.map((project, index) => {
            return (
              <div className="mb-28">
                <Project key={index} project={project} />
              </div>
            );
          })}
        </div>
      </article>
    </>
  );
}

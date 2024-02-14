import { FaLinkedin, FaGithub, FaDownload } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import TypeIt from "typeit-react";
import { Technologies } from "./Components/Technologies";
import { Button } from "@nextui-org/react";
import { Download } from "@mui/icons-material";

export function Home() {
  return (
    <>
      <div id="home" className="pt-20 h-svh section">
        <div className="flex justify-center sm:justify-start">
          <img
            className="border-large border-yellow-400 rounded-full mb-10 shadow sm:w-60 sm:h-60 w-40 h-40"
            src="https://i.gyazo.com/8126c3d2189ad5c6b6c1e18baf2bb5e8.jpg"
            alt=""
          />
        </div>
        <div>
          <h3 className="font-semibold flex text-white text-3xl">
            Hi, I'm Wilmer Araya{" "}
            <a
              href="https://www.linkedin.com/in/wilmer-araya-063536225/"
              target="_blank"
            >
              <FaLinkedin className="text-white text-2xl mx-5" />
            </a>
            <a href="https://github.com/WilmerAraya" target="_blank">
              <FaGithub className="text-white text-2xl" />
            </a>
          </h3>
          <div className="flex justify-between">
            <TypeIt
              className=" text-yellow-400 text-lg font-semibold"
              options={{ loop: true }}
              getBeforeInit={(instance) => {
                instance
                  .type("Software Engineer")
                  .pause(750)
                  .delete(17)
                  .pause(500)
                  .type("Full Stack Developer");

                // Remember to return it!
                return instance;
              }}
            />
            <h4 className=" text-gray-400 text-md flex items-center">
              <FaLocationDot className="mr-2" /> Costa Rica
            </h4>
          </div>
          <div className="text-gray-400 text-lg mt-10">
            <p>
              I am a developer who finished his degree at the University of
              Costa Rica in 2023. I have experience in both back-end and
              front-end technologies, as well as databases, testing, software
              quality, agile methodologies, among other things.
            </p>
            <p className="mt-2">
              My goal is to stay up-to-date with the most relevant technologies
              and apply my knowledge to create user-friendly software that adds
              value.
            </p>
          </div>
          <div className="flex justify-center mt-10">
            <a
              href="https://drive.google.com/uc?export=download&id=12ziw-clCSv4C8cW7P9Rrm0SqAyU4L_gO"
              download={true}
            >
              <Button
                className="bg-yellow-400 font-semibold"
                startContent={<FaDownload />}
              >
                Download CV
              </Button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

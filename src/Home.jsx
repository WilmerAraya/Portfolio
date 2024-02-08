import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import TypeIt from "typeit-react";
import { Technologies } from "./Components/Technologies";

export function Home() {
  return (
    <>
      <div id="home" className="pt-20 h-svh section">
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
            {/* <h4 className=" text-yellow-400 text-lg font-semibold">
              Full Stack Developer
            </h4> */}
            <h4 className=" text-gray-400 text-md flex items-center">
              <FaLocationDot className="mr-2" /> San José, Costa Rica
            </h4>
          </div>
        </div>
        <div className="animate__animated animate__bounceInUp animate__slow">
          <div className="mt-10 flex justify-center">
            <img
              src="https://raw.githubusercontent.com/WilmerAraya/WilmerAraya/WilmerAraya-assets/coding.svg"
              alt=""
            />
          </div>
          <div className="flex justify-center">
            <h1 className="text-yellow-400 text-2xl font-semibold mt-10 mb-5">
              Languages & Tools
            </h1>
          </div>
          <Technologies />
        </div>
      </div>
    </>
  );
}

import {
  FaAngular,
  FaReact,
  FaBootstrap,
  FaPython,
  FaHtml5,
  FaJava,
  FaNodeJs,
} from "react-icons/fa";

import {
  SiBlazor,
  SiCplusplus,
  SiCsharp,
  SiCss3,
  SiDotnet,
  SiFirebase,
  SiGit,
  SiJira,
  SiLinux,
  SiMongodb,
  SiPostgresql,
  SiSelenium,
  SiTailwindcss,
} from "react-icons/si";
import { RiJavascriptFill } from "react-icons/ri";
import { TbSql } from "react-icons/tb";

import { Technology } from "./Technology";

export function Technologies() {
  return (
    <>
      <div className="mb-20">
        <h1 className="text-center text-2xl text-yellow-300 mb-3">Backend</h1>
        <div className="flex text-white text-5xl justify-center flex-wrap">
          <Technology technology={<FaJava />} name={"Java"} />
          <Technology technology={<FaPython />} name={"Python"} />
          <Technology technology={<SiCplusplus />} name={"C++"} />
          <Technology technology={<FaNodeJs />} name={"Node Js"} />
          <Technology technology={<SiCsharp />} name={"C#"} />
          <Technology technology={<SiDotnet />} name={".Net Framework"} />
        </div>
      </div>
      <div>
        <h1 className="text-center text-2xl text-yellow-300 mb-3">Frontend</h1>
        <div className="flex text-white text-5xl justify-center flex-wrap">
          <Technology technology={<RiJavascriptFill />} name={"Javascript"} />
          <Technology technology={<FaAngular />} name={"Angular"} />
          <Technology technology={<FaReact />} name={"React"} />
          <Technology technology={<SiBlazor />} name={"Blazor"} />
          <Technology technology={<FaBootstrap />} name={"Bootstrap"} />
          <Technology technology={<SiTailwindcss />} name={"Tailwind CSS"} />
          <Technology technology={<FaHtml5 />} name={"HTML5"} />
          <Technology technology={<SiCss3 />} name={"CSS3"} />
        </div>
      </div>
      <div className="mt-20">
        <h1 className="text-center text-2xl text-yellow-300 mb-3">Others</h1>
        <div className="flex text-white text-5xl justify-center flex-wrap">
          <Technology technology={<TbSql />} name={"SQL"} />
          <Technology technology={<SiFirebase />} name={"Firebase"} />
          <Technology technology={<SiMongodb />} name={"Mongo DB"} />
          <Technology technology={<SiPostgresql />} name={"Postgre SQL"} />
          <Technology technology={<SiJira />} name={"Jira software"} />
          <Technology technology={<SiSelenium />} name={"Selenium"} />
          <Technology technology={<SiGit />} name={"GIT"} />
          <Technology technology={<SiLinux />} name={"Linux"} />
        </div>
      </div>
    </>
  );
}

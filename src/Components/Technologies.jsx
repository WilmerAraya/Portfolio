import {
  FaAngular,
  FaReact,
  FaBootstrap,
  FaPython,
  FaHtml5,
  FaJava,
} from "react-icons/fa";

import { SiTailwindcss } from "react-icons/si";
import { RiJavascriptFill } from "react-icons/ri";
import { TbSql } from "react-icons/tb";

import { Technology } from "./Technology";

export function Technologies() {
  return (
    <>
      <div className="flex text-white text-5xl justify-between flex-wrap">
        <Technology technology={<FaJava />} name={"Java"} />
        <Technology technology={<RiJavascriptFill />} name={"Javascript"} />
        <Technology technology={<FaAngular />} name={"Angular"} />
        <Technology technology={<FaReact />} name={"React"} />
        <Technology technology={<FaBootstrap />} name={"Bootstrap"} />
        <Technology technology={<SiTailwindcss />} name={"Tailwind CSS"} />
        <Technology technology={<FaPython />} name={"Python"} />
        <Technology technology={<FaHtml5 />} name={"HTML5"} />
        <Technology technology={<TbSql />} name={"SQL"} />
      </div>
    </>
  );
}

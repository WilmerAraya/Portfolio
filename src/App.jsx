import { NextUIProvider } from "@nextui-org/react";

import { NavBar } from "./NavBar";
import { Home } from "./Home";
import { Projects } from "./Projects";

import { Footer, FooterCopyright } from "flowbite-react";
import { Skills } from "./Skills";
import { Contact } from "./Contact";

export function App() {
  return (
    <>
      <NextUIProvider>
        <NavBar />
        <div className="sm:max-w-3xl mx-10 sm:mx-auto">
          <Home />
          <Skills />
          <Projects />
          <Contact />
          <Footer container className="bg-transparent">
            <FooterCopyright href="#" by="Wilmer Araya" year={2024} />
          </Footer>
        </div>
      </NextUIProvider>
    </>
  );
}

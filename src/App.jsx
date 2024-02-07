import { NextUIProvider } from "@nextui-org/react";

import { NavBar } from "./NavBar";
import { Home } from "./Home";
import { Projects } from "./Projects";

import { Footer, FooterCopyright } from "flowbite-react";

export function App() {
  return (
    <>
      <NextUIProvider>
        <NavBar />
        <div className="container sm:max-w-2xl mx-auto">
          <Home />
          <Projects />
          <Footer container className="bg-transparent">
            <FooterCopyright href="#" by="Wilmer Araya" year={2024} />
          </Footer>
        </div>
      </NextUIProvider>
    </>
  );
}

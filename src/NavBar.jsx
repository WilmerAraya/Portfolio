import React, { useState } from "react";
import { Link } from "react-scroll";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";

export function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useScrollPosition(({ prevPos, currPos }) => {
    const sections = document.querySelectorAll(".section");

    sections.forEach((section) => {
      const top = section.offsetTop;
      const bottom = top + section.offsetHeight;

      if (currPos.y < -top + 100 && currPos.y > -bottom) {
        setActiveSection(section.id);
      }
    });
  });

  return (
    <Navbar className="navbar" onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent className="sm:hidden">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex gap-4 cursor-pointer"
        justify="center"
      >
        <NavbarItem>
          <Link
            className={activeSection === "home" ? "active " : "" + "text-white"}
            to="home"
            smooth={true}
            duration={500}
          >
            About me
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className={
              activeSection === "projects" ? "active " : "" + "text-white"
            }
            to="projects"
            smooth={true}
            duration={500}
          >
            Projects
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu className="bg-black/30 text-white">
        <NavbarMenuItem>
          <Link to="home" className="text-white text-xl underline">
            About me
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link to="projects" className="text-white text-xl underline">
            Projects
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}

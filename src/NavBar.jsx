import React from "react";
import { Link } from "react-scroll";
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
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = ["About me", "Projects"];

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
          <Link className="text-white" to="home" smooth={true} duration={500}>
            About me
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link
            className="text-white"
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

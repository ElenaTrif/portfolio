'use client'

import React, { useState } from "react";
import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import NextLink from "next/link";
import { PortfolioIcon } from "./Icons";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <NextUINavbar maxWidth="2xl" position="sticky" className="w-full">
      <NavbarContent>
        <NavbarBrand>
          <NextLink className="flex justify-start items-center gap-2" href="/">
            <PortfolioIcon />
            <p className="font-bold text-inherit">NovikovaWeb</p>
          </NextLink>
        </NavbarBrand>
        <ul className="hidden sm:flex gap-2 md:gap-6 justify-start ml-2">
          <NavbarMenuItem>
            <NextLink href="#about">
              <p>About</p>
            </NextLink>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <NextLink href="#portfolio">
              <p>Portfolio</p>
            </NextLink>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <NextLink href="#skills">
              <p>Skills</p>
            </NextLink>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <NextLink href="#contact">
              <p>Contact</p>
            </NextLink>
          </NavbarMenuItem>
        </ul>
        <NavbarMenuToggle
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
      </NavbarContent>

      <NavbarMenu show={isMenuOpen}>
        <NavbarMenuItem>
          <NextLink href="#about">
            <p>About me</p>
          </NextLink>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <NextLink href="#portfolio">
            <p>Portfolio</p>
          </NextLink>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <NextLink href="#skills">
            <p>Skills</p>
          </NextLink>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <NextLink href="#contact">
            <p>Contact</p>
          </NextLink>
        </NavbarMenuItem>
      </NavbarMenu>
    </NextUINavbar>
  );
};

export default Navbar;

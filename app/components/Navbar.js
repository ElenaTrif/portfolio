'use client';

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
import { useTranslation } from "react-i18next"; // Importer le hook useTranslation
import i18n from "i18next"; // Importer i18n pour changer la langue

const changeLanguage = (lang) => {
  i18n.changeLanguage(lang); // Change la langue active
};

const Navbar = () => {
  const { t } = useTranslation(); // Initialiser la traduction
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
              <p>{t('navbar.about')}</p> {/* Traduction pour "À propos" */}
            </NextLink>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <NextLink href="#portfolio">
              <p>{t('navbar.portfolio')}</p> {/* Traduction pour "Projets" */}
            </NextLink>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <NextLink href="#formation">
              <p>{t('navbar.formation')}</p> {/* Traduction pour "Formation" */}
            </NextLink>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <NextLink href="#skills">
              <p>{t('navbar.skills')}</p> {/* Traduction pour "Compétences" */}
            </NextLink>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <NextLink href="#contact">
              <p>{t('navbar.contact')}</p> {/* Traduction pour "Contact" */}
            </NextLink>
          </NavbarMenuItem>
        </ul>
        <div className="hidden sm:flex items-center gap-4 ml-auto">
          {/* Boutons pour changer la langue */}
          <button
            onClick={() => changeLanguage('fr')}
            className="px-2 py-1 text-sm bg-gray-200 rounded hover:bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            FR
          </button>
          <button
            onClick={() => changeLanguage('ru')}
            className="px-2 py-1 text-sm bg-gray-200 rounded hover:bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            RU
          </button>
        </div>
        <NavbarMenuToggle
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
      </NavbarContent>

      <NavbarMenu show={isMenuOpen}>
        <NavbarMenuItem>
          <NextLink href="#about">
            <p>{t('navbar.about')}</p>
          </NextLink>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <NextLink href="#portfolio">
            <p>{t('navbar.portfolio')}</p>
          </NextLink>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <NextLink href="#formation">
            <p>{t('navbar.formation')}</p>
          </NextLink>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <NextLink href="#skills">
            <p>{t('navbar.skills')}</p>
          </NextLink>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <NextLink href="#contact">
            <p>{t('navbar.contact')}</p>
          </NextLink>
        </NavbarMenuItem>
        {/* Ajout des boutons de langue dans le menu mobile */}
        <NavbarMenuItem>
          <div className="flex gap-2 justify-center">
            <button
              onClick={() => changeLanguage('fr')}
              className="px-2 py-1 text-sm bg-gray-200 rounded hover:bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              FR
            </button>
            <button
              onClick={() => changeLanguage('ru')}
              className="px-2 py-1 text-sm bg-gray-200 rounded hover:bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              RU
            </button>
          </div>
        </NavbarMenuItem>
      </NavbarMenu>
    </NextUINavbar>
  );
};

export default Navbar;

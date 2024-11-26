'use client';

import React, { useState, useEffect, useRef } from "react";
import NextLink from "next/link";
import { Avatar } from "@nextui-org/react";
import { useTranslation } from "react-i18next";
import i18n from "i18next";

const Navbar = () => {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState(null);
  const [activeLanguage, setActiveLanguage] = useState(null); // Langue active initiale à null
  const menuRef = useRef(null);

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") || "fr"; // Valeur par défaut en français
    setLanguage(savedLanguage);
    setActiveLanguage(savedLanguage); // Initialisation de activeLanguage
    i18n.changeLanguage(savedLanguage);

    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false); // Fermer le menu si on clique à l'extérieur
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  if (language === null) {
    return null; // Ne pas rendre la navbar tant que la langue n'est pas déterminée
  }

  const changeLanguage = (lang) => {
    console.time("LanguageChange"); // Démarre le chronométrage
    localStorage.setItem("language", lang);
    setLanguage(lang);
    setActiveLanguage(lang); // Met à jour la langue active
    i18n.changeLanguage(lang, () => {
      console.timeEnd("LanguageChange"); // Termine le chronométrage
      console.log(`Language changed to ${lang}`);
    });
    setIsMenuOpen(false);
  };
  

  const handleMenuItemClick = (link) => {
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`w-full sticky top-0 z-50 transition-all duration-300 ${isMenuOpen
          ? "bg-black bg-opacity-80 backdrop-blur-md"
          : "bg-black bg-opacity-80 md:bg-opacity-80 lg:bg-opacity-80 backdrop-blur-md"
        }`}
    >
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <NextLink href="/" className="flex items-center gap-2">
              <Avatar src="/assets/logo22.png" size="sm" />
              <span className="text-lg font-bold text-gray-900 dark:text-gray-100">
                NovikovaWeb
              </span>
            </NextLink>
          </div>

          {/* Boutons de langue pour tous les appareils */}
          <div className="flex items-center space-x-4">
            <button
              onClick={() => changeLanguage("fr")}
              className={`px-2 py-1 text-sm rounded transition-colors ${activeLanguage === "fr"
                  ? "bg-gray-300 dark:bg-gray-700 font-bold text-black dark:text-white hover:bg-gray-400 dark:hover:bg-gray-600"
                  : "bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700"
                }`}
            >
              FR
            </button>
            <button
              onClick={() => changeLanguage("ru")}
              className={`px-2 py-1 text-sm rounded transition-colors ${activeLanguage === "ru"
                  ? "bg-gray-300 dark:bg-gray-700 font-bold text-black dark:text-white hover:bg-gray-400 dark:hover:bg-gray-600"
                  : "bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700"
                }`}
            >
              RU
            </button>
          </div>

          {/* Menu principal pour desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <NextLink
              href="#about"
              className="text-xl md:text-lg text-gray-700 dark:text-gray-200 hover:underline"
            >
              {t("navbar.about")}
            </NextLink>
            <NextLink
              href="#portfolio"
              className="text-xl md:text-lg text-gray-700 dark:text-gray-200 hover:underline"
            >
              {t("navbar.portfolio")}
            </NextLink>
            <NextLink
              href="#formation"
              className="text-xl md:text-lg text-gray-700 dark:text-gray-200 hover:underline"
            >
              {t("navbar.formation")}
            </NextLink>
            <NextLink
              href="#skills"
              className="text-xl md:text-lg text-gray-700 dark:text-gray-200 hover:underline"
            >
              {t("navbar.skills")}
            </NextLink>
            <NextLink
              href="#contact"
              className="text-xl md:text-lg text-gray-700 dark:text-gray-200 hover:underline"
            >
              {t("navbar.contact")}
            </NextLink>
          </div>

          {/* Icône mobile */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 dark:text-gray-200 focus:outline-none"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              title={isMenuOpen ? "Close menu" : "Open menu"}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Menu hamburger */}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Menu mobile */}
      {isMenuOpen && (
        <div
          ref={menuRef}
          className="md:hidden absolute top-16 left-0 w-full bg-black bg-opacity-80 backdrop-blur-md text-white transition duration-300 ease-in-out"
        >
          <div className="flex flex-col items-center py-4 space-y-4">
            <NextLink
              href="#about"
              onClick={handleMenuItemClick}
              className="text-xl"
            >
              {t("navbar.about")}
            </NextLink>
            <NextLink
              href="#portfolio"
              onClick={handleMenuItemClick}
              className="text-xl"
            >
              {t("navbar.portfolio")}
            </NextLink>
            <NextLink
              href="#formation"
              onClick={handleMenuItemClick}
              className="text-xl"
            >
              {t("navbar.formation")}
            </NextLink>
            <NextLink
              href="#skills"
              onClick={handleMenuItemClick}
              className="text-xl"
            >
              {t("navbar.skills")}
            </NextLink>
            <NextLink
              href="#contact"
              onClick={handleMenuItemClick}
              className="text-xl"
            >
              {t("navbar.contact")}
            </NextLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

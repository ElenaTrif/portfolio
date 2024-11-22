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
  const menuRef = useRef(null);

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") || "fr";
    setLanguage(savedLanguage);
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

  if (!language) {
    return null;
  }

  const changeLanguage = (lang) => {
    localStorage.setItem("language", lang);
    setLanguage(lang);
    i18n.changeLanguage(lang);
    setIsMenuOpen(false);
  };

  const handleMenuItemClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`w-full sticky top-0 z-50 transition-all duration-300 ${
        isMenuOpen
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

          {/* Boutons de langue pour mobile et desktop */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={() => changeLanguage("fr")}
              className="px-2 py-1 text-sm bg-gray-200 rounded hover:bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              FR
            </button>
            <button
              onClick={() => changeLanguage("ru")}
              className="px-2 py-1 text-sm bg-gray-200 rounded hover:bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              RU
            </button>
          </div>

          {/* Menu principal pour desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <NextLink href="#about" className="text-gray-700 dark:text-gray-200 hover:underline">
              {t("navbar.about")}
            </NextLink>
            <NextLink href="#portfolio" className="text-gray-700 dark:text-gray-200 hover:underline">
              {t("navbar.portfolio")}
            </NextLink>
            <NextLink href="#formation" className="text-gray-700 dark:text-gray-200 hover:underline">
              {t("navbar.formation")}
            </NextLink>
            <NextLink href="#skills" className="text-gray-700 dark:text-gray-200 hover:underline">
              {t("navbar.skills")}
            </NextLink>
            <NextLink href="#contact" className="text-gray-700 dark:text-gray-200 hover:underline">
              {t("navbar.contact")}
            </NextLink>
          </div>

          {/* Icône mobile */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}  // Permet d'ouvrir ou fermer le menu mobile
              className="text-gray-700 dark:text-gray-200 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Menu hamburger pour ouvrir */}
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
            <NextLink href="#about" onClick={handleMenuItemClick}>
              {t("navbar.about")}
            </NextLink>
            <NextLink href="#portfolio" onClick={handleMenuItemClick}>
              {t("navbar.portfolio")}
            </NextLink>
            <NextLink href="#formation" onClick={handleMenuItemClick}>
              {t("navbar.formation")}
            </NextLink>
            <NextLink href="#skills" onClick={handleMenuItemClick}>
              {t("navbar.skills")}
            </NextLink>
            <NextLink href="#contact" onClick={handleMenuItemClick}>
              {t("navbar.contact")}
            </NextLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

'use client';

import React, { useState, useEffect } from "react";
import { Image } from "@nextui-org/react";
import { title, subtitle } from "../tailwind-config";
import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";
import { GithubIcon } from "./Icons";
import { useTranslation } from "react-i18next";
import i18n from "i18next";

const Header = () => {
  const { t } = useTranslation(); // Initialiser la traduction
  const [language, setLanguage] = useState(null); // État pour la langue

  useEffect(() => {
    // Charger la langue depuis localStorage ou définir une langue par défaut
    const savedLanguage = localStorage.getItem("language") || "fr";
    setLanguage(savedLanguage);
    i18n.changeLanguage(savedLanguage);
  }, []);

  // Afficher un fallback si la langue n'est pas encore définie
  if (language === null) return null;

  return (
    <div className="md:w-full flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-10 py-8 lg:py-10">
      {/* Première image */}
      <div className="lg:w-1/2 flex justify-center items-center mb-4 lg:mb-0 w-full">
        <Image
          isZoomed
          isBlurred
          className="w-full sm:w-full md:w-[480px] lg:w-[480px] h-full object-cover"
          alt={t("header.altFirstImage")} // Utilisation de la traduction
          src="/assets/me2.webp"
        />
      </div>

      {/* Texte principal */}
      <div className="md:w-1/2 text-center z-10">
        <h1 className={title()}>{t("header.title.part1")} </h1>
        <h1 className={title({ color: "violet" })}>{t("header.title.part2")} </h1>
        <h1 className={title()}>{t("header.title.part3")}</h1>
        <h2 className={subtitle({ class: "mt-4" })}>
          {t("header.subtitle")} {/* Traduction pour le sous-titre */}
        </h2>

        {/* Boutons */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-3 mt-6">
  <Link
    href="#portfolio"
    className={`${buttonStyles({
      color: "primary",
      radius: "full",
      variant: "shadow",
      size: "lg",
    })} min-w-[150px]`} // Ajout d'une largeur minimale
  >
    {t("header.projectsButton")}
  </Link>
  <Link
    isExternal
    className={`${buttonStyles({
      variant: "bordered",
      radius: "full",
      size: "lg",
    })} border-primary-500 min-w-[150px]`} // Même largeur minimale
    href="https://github.com/ElenaTrif"
  >
    <GithubIcon size={20} />
    GitHub
  </Link>
</div>

      </div>

      {/* Deuxième image */}
      <div className="hidden lg:flex lg:w-1/2 justify-center items-center mb-4 lg:mb-0">
        <Image
          isZoomed
          isBlurred
          className="w-96 lg:w-[480px]"
          alt={t("header.altSecondImage")} // Traduction pour la description de l'image
          src="/assets/me5.webp"
        />
      </div>
    </div>
  );
};

export default Header;

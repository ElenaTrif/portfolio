'use client';

import React, { useState, useEffect } from "react";
import { title } from "../tailwind-config";
import { FaEnvelope, FaGithub } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import i18n from "i18next";

const ContactForm = () => {
  const { t } = useTranslation(); // Hook pour la traduction
  const [language, setLanguage] = useState(null);

  useEffect(() => {
    // Charger la langue depuis localStorage (ou définir une langue par défaut)
    const savedLanguage = localStorage.getItem("language") || "fr";
    setLanguage(savedLanguage);
    i18n.changeLanguage(savedLanguage);
  }, []);

  if (language === null) return null; // Retourne null jusqu'à ce que la langue soit chargée

  return (
    <div className="mt-16" id="contact">
      <h1 className={`${title()} relative`}>
        {t('contact.title')} {/* Traduction du titre "Contactez-moi" */}
        <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-b from-[#FF1CF7] to-[#b249f8]"></span>
      </h1>
      <div className="flex items-center my-4">
        <FaEnvelope className="mr-2 z-10" />
        <a href="mailto:novicovalena@yahoo.fr" style={{ zIndex: 10 }}>
          novicovalena@yahoo.fr
        </a>
      </div>
      <div className="flex items-center my-4">
        <FaGithub className="mr-2 z-10" />
        <a href="https://github.com/ElenaTrif" style={{ zIndex: 10 }}>
          GitHub
        </a>
      </div>
    </div>
  );
};

export default ContactForm;

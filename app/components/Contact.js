'use client';

import React, { useState, useEffect } from "react";
import { title } from "../tailwind-config";
import { FaEnvelope, FaGithub, FaPhone, FaWhatsapp, FaTelegram } from "react-icons/fa";
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
      <h2 className={`${title()} relative`}>
        {t('contact.title')} {/* Traduction du titre "Contactez-moi" */}
        <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-b from-[#FF1CF7] to-[#b249f8]"></span>
      </h2>
      {/* Email */}
      <div className="flex items-center my-4">
        <FaEnvelope className="mr-2 z-10" />
        <a href="mailto:novicovalena@yahoo.fr" style={{ zIndex: 10 }}>
          novicovalena@yahoo.fr
        </a>
      </div>

      {/* GitHub */}
      <div className="flex items-center my-4">
        <FaGithub className="mr-2 z-10" />
        <a href="https://github.com/ElenaTrif" style={{ zIndex: 10 }}>
          GitHub
        </a>
      </div>

      {/* Téléphone */}
      <div className="flex items-center my-4">
        <FaPhone className="mr-2 z-10" />
        <a href="tel:+33658366870" style={{ zIndex: 10 }}>
          +33 6 58 36 68 70
        </a>
      </div>

      {/* WhatsApp */}
      <div className="flex items-center my-4">
        <FaWhatsapp className="mr-2 z-10" />
        <a href="https://wa.me/33658366870" style={{ zIndex: 10 }}>
          {t('contact.whatsapp')} {/* Traduction de "Envoyer un message sur WhatsApp" */}
        </a>
      </div>

      {/* Telegram */}
      <div className="flex items-center my-4">
        <FaTelegram className="mr-2 z-10" />
        <a href="https://t.me/eletrifa" style={{ zIndex: 10 }}>
          {t('contact.telegram')} {/* Traduction de "Envoyer un message sur Telegram" */}
        </a>
      </div>
    </div>
  );
};

export default ContactForm;

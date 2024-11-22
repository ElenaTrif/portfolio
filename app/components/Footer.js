'use client';

import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next"; // Importer le hook useTranslation
import i18n from "i18next"; // Importer i18n pour changer la langue

const Footer = () => {
  const { t } = useTranslation(); // Initialiser la traduction
  const [language, setLanguage] = useState(null); // État pour la langue

  useEffect(() => {
    // Charger la langue depuis localStorage (ou définir une langue par défaut)
    const savedLanguage = localStorage.getItem('language') || 'fr';
    setLanguage(savedLanguage); // Mettre à jour l'état local
    i18n.changeLanguage(savedLanguage); // Appliquer la langue dans i18n
  }, []); // Cette effet se lance uniquement après le premier rendu côté client

  // Afficher un fallback si la langue n'est pas encore définie
  if (language === null) return null;

  return (
    <footer className="bg-black text-white py-4 px-8 text-center z-10">
      <p>© 2024 NovikovaWeb. {t('footer.rightsReserved')}</p>
    </footer>
  );
};

export default Footer;

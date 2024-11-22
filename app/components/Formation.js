'use client';

import React, { useState, useEffect } from "react";
import { title } from "../tailwind-config";
import { Card, CardHeader, CardBody, CardFooter, Divider, Image } from "@nextui-org/react";
import { useTranslation } from "react-i18next"; // Importer le hook useTranslation
import i18n from "i18next"; // Importer i18n pour changer la langue

const Formation = () => {
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
    <div className="mt-16" id="formation">
      <h1 className={`${title()} relative`}>
        {t('navbar.formation')} {/* Traduction pour "Formation" */}
        <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-b from-[#FF1CF7] to-[#b249f8]"></span>
      </h1>
      <Card className="max-w-[400px] mt-10">
        <CardHeader className="flex gap-3">
          <Image
            alt={t('formation.openclassroomsAlt')} // Traduction pour l'alt text de l'image
            height={40}
            radius="sm"
            src="/assets/skills/openclassrooms.png"
            width={40}
          />
          <div className="flex flex-col">
            <p className="text-md font-bold">{t('formation.integrateur')}</p> {/* Traduction pour "Intégrateur développeur web" */}
            <p className="text-small text-default-500">{t('formation.openclassrooms')}</p> {/* Traduction pour "Openclassrooms" */}
          </div>
        </CardHeader>
        <Divider />
        <CardBody>
          <p>{t('formation.description')}</p> {/* Traduction pour "Formation en ligne, Titre professionnel niveau 5." */}
        </CardBody>
        <Divider />
        <CardFooter>
          <p>{t('formation.dates')}</p> {/* Traduction pour "Jul, 2023 - Mai, 2024" */}
        </CardFooter>
      </Card>
    </div>
  );
};

export default Formation;

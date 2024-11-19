'use client';
import React, { useState, useEffect } from "react";
import { title } from "../tailwind-config";
import { Card, CardHeader, CardBody, Divider, Chip } from "@nextui-org/react";
import { useTranslation } from "react-i18next"; // Importer le hook useTranslation
import i18n from "i18next"; // Importer i18n pour changer la langue

const AboutMe = () => {
  const { t } = useTranslation(); // Initialiser la traduction
  const [language, setLanguage] = useState(null); // État pour la langue

  useEffect(() => {
    // Charger la langue depuis localStorage (ou définir une langue par défaut)
    const savedLanguage = localStorage.getItem('language') || 'fr';
    setLanguage(savedLanguage); // Mettre à jour l'état local
    i18n.changeLanguage(savedLanguage); // Appliquer la langue dans i18n
  }, []); // Cette effet se lance uniquement après le premier rendu côté client

  // Fonction pour changer la langue
  const changeLanguage = (lang) => {
    localStorage.setItem('language', lang); // Sauvegarder la langue dans localStorage
    setLanguage(lang); // Mettre à jour l'état de la langue
    i18n.changeLanguage(lang); // Appliquer la nouvelle langue via i18n
  };

  // Afficher un fallback si la langue n'est pas encore définie
  if (language === null) return null;

  return (
    <div className="space-y-6 mt-12" id="about">
      <h1 className={`${title()} relative`}>
        {t('aboutme.title')} {/* Traduction pour "A propos de moi" */}
        <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-b from-[#FF1CF7] to-[#b249f8]"></span>
      </h1>
      <br />
      <br />
      <Card className="max-w-[1000px] lg:w-[50%]">
        <CardHeader className="flex gap-3">
          <Chip
            variant="shadow"
            classNames={{
              base: "bg-gradient-to-br from-indigo-500 to-pink-500 border-small border-white/50 shadow-pink-500/30",
              content: "drop-shadow shadow-black text-white",
            }}
          >
            #
          </Chip>
          <div className="flex flex-col">
            <p className="text-lg">{t('aboutme.whoAmI')}</p> {/* Traduction pour "Qui je suis" */}
          </div>
        </CardHeader>
        <Divider />
        <CardBody className="flex gap-3">
          <p dangerouslySetInnerHTML={{ __html: t('aboutme.intro') }} /> {/* Utilisation de dangerouslySetInnerHTML */}
        </CardBody>
      </Card>
      <Card className="max-w-[1000px] lg:w-[50%] lg:ml-auto">
        <CardHeader className="flex gap-3">
          <Chip
            variant="shadow"
            classNames={{
              base: "bg-gradient-to-br from-indigo-500 to-pink-500 border-small border-white/50 shadow-pink-500/30",
              content: "drop-shadow shadow-black text-white",
            }}
          >
            !
          </Chip>
          <div className="flex flex-col">
            <p className="text-lg">{t('aboutme.myPassion')}</p> {/* Traduction pour "Ma passion pour le web" */}
          </div>
        </CardHeader>
        <Divider />
        <CardBody className="flex gap-3">
          <p dangerouslySetInnerHTML={{ __html: t('aboutme.passion') }} /> {/* Utilisation de dangerouslySetInnerHTML */}
        </CardBody>
      </Card>
      <Card className="max-w-[1000px] lg:w-[50%]">
        <CardHeader className="flex gap-3">
          <Chip
            variant="shadow"
            classNames={{
              base: "bg-gradient-to-br from-indigo-500 to-pink-500 border-small border-white/50 shadow-pink-500/30",
              content: "drop-shadow shadow-black text-white",
            }}
          >
            §
          </Chip>
          <div className="flex flex-col">
            <p className="text-lg">{t('aboutme.myCommitment')}</p> {/* Traduction pour "Mon engagement" */}
          </div>
        </CardHeader>
        <Divider />
        <CardBody className="flex gap-3">
          <p dangerouslySetInnerHTML={{ __html: t('aboutme.commitment') }} /> {/* Utilisation de dangerouslySetInnerHTML */}
        </CardBody>
      </Card>
      <Card className="max-w-[1000px] lg:w-[50%] lg:ml-auto">
        <CardHeader className="flex gap-3">
          <Chip
            variant="shadow"
            classNames={{
              base: "bg-gradient-to-br from-indigo-500 to-pink-500 border-small border-white/50 shadow-pink-500/30",
              content: "drop-shadow shadow-black text-white",
            }}
          >
            @
          </Chip>
          <div className="flex flex-col">
            <p className="text-lg">{t('aboutme.contactMe')}</p> {/* Traduction pour "Contactez-moi" */}
          </div>
        </CardHeader>
        <Divider />
        <CardBody className="flex gap-3">
          <p dangerouslySetInnerHTML={{ __html: t('aboutme.contact') }} /> {/* Utilisation de dangerouslySetInnerHTML */}
        </CardBody>
      </Card>
    </div>
  );
};

export default AboutMe;

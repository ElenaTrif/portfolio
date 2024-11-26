'use client';

import React, { useState, useEffect } from "react";
import { title } from "../tailwind-config";
import { Card, CardHeader, CardBody, CardFooter, Divider, Image } from "@nextui-org/react";
import { useTranslation } from "react-i18next";

const Formation = () => {
  const { t, i18n } = useTranslation(); // Initialiser la traduction
  const [isLoaded, setIsLoaded] = useState(false); // Contrôle de l'hydratation
  const [content, setContent] = useState({}); // État pour stocker les traductions

  useEffect(() => {
    setIsLoaded(true); // Confirmer que le composant est chargé côté client

    // Mettre à jour le contenu traduit
    const updateContent = () => {
      setContent({
        title: t("navbar.formation"),
        integrateur: t("formation.integrateur"),
        openclassrooms: t("formation.openclassrooms"),
        openclassroomsAlt: t("formation.openclassroomsAlt"),
        description: t("formation.description"),
        dates: t("formation.dates"),
      });
    };

    updateContent(); // Mettre à jour au premier rendu
  }, [t, i18n.language]); // Réagir au changement de langue

  // Afficher un fallback si la traduction n'est pas encore prête
  if (!isLoaded || !content.title) return null;

  return (
    <div className="mt-16" id="formation">
      <h1 className={`${title()} relative`}>
        {content.title}
        <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-b from-[#FF1CF7] to-[#b249f8]"></span>
      </h1>
      <Card className="max-w-[400px] mt-10">
        <CardHeader className="flex gap-3">
          <Image
            alt={content.openclassroomsAlt} // Traduction pour l'alt text de l'image
            height={40}
            radius="sm"
            src="/assets/skills/openclassrooms.png"
            width={40}
          />
          <div className="flex flex-col">
            <p className="text-md font-bold">{content.integrateur}</p> {/* Traduction pour "Intégrateur développeur web" */}
            <p className="text-small text-default-500">{content.openclassrooms}</p> {/* Traduction pour "Openclassrooms" */}
          </div>
        </CardHeader>
        <Divider />
        <CardBody>
          <p>{content.description}</p> {/* Traduction pour "Formation en ligne, Titre professionnel niveau 5." */}
        </CardBody>
        <Divider />
        <CardFooter>
          <p>{content.dates}</p> {/* Traduction pour "Jul, 2023 - Mai, 2024" */}
        </CardFooter>
      </Card>
    </div>
  );
};

export default Formation;

'use client';

import React, { useState, useEffect } from "react";
import { title } from "../tailwind-config";
import { Card, Image } from "@nextui-org/react";
import { useTranslation } from "react-i18next"; // Importer le hook useTranslation
import i18n from "i18next"; // Importer i18n pour changer la langue

const Skills = () => {
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

  const skills = [
    {
      title: "HTML",
      imageSrc: "/assets/skills/html-3.png"
    },
    {
      title: "CSS",
      imageSrc: "/assets/skills/css.png"
    },
    {
      title: "React",
      imageSrc: "/assets/skills/react.png"
    },
    {
      title: "JavaScript",
      imageSrc: "/assets/skills/js-2.png"
    },
    {
      title: "Sass",
      imageSrc: "/assets/skills/sass2.png"
    },
    {
      title: "Node",
      imageSrc: "/assets/skills/node.png"
    },
    {
      title: "Figma",
      imageSrc: "/assets/skills/figma.png"
    },
    {
      title: "MongoDB",
      imageSrc: "/assets/skills/mongodb.png"
    },
    {
      title: "Next Js",
      imageSrc: "/assets/skills/next1.png"
    },
    {
      title: "Tailwind",
      imageSrc: "/assets/skills/tailwind1.png"
    },
  ];

  return (
    <div className="mt-16" id="skills">
      <h2 className={`${title()} relative`}>
        {t('skills.title')} {/* Traduction du titre "Compétences" */}
        <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-b from-[#FF1CF7] to-[#b249f8]"></span>
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
        {skills.map((skill, index) => (
          <Card key={index} className="w-full h-[150px] flex flex-col items-center justify-center px-16 md:px-12 lg:px-16">
            <Image
              alt={skill.title}
              className="object-contain"
              src={skill.imageSrc}
              style={{ minWidth: '50px' }}
            />
            <p className="mt-2 text-center">{skill.title}</p>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Skills;

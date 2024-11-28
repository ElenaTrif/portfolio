'use client';

import React, { useState, useEffect } from "react";
import { Card, CardHeader, CardFooter, Image } from "@nextui-org/react";
import { button as buttonStyles } from "@nextui-org/theme";
import { GithubIcon } from "./Icons";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Chip } from "@nextui-org/react";
import { useTranslation } from "react-i18next";
import { title } from "../tailwind-config";

const Projects = () => {
  const { t, i18n } = useTranslation(); // Initialiser la traduction
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false); // Contrôler le rendu après hydratation
  const [projects, setProjects] = useState([]); // État pour stocker les projets traduits

  useEffect(() => {
    setIsLoaded(true); // Le contenu est chargé côté client
  }, []);

  // Mettre à jour les projets traduits à chaque changement de langue
  useEffect(() => {
    setProjects([
      {
        id: 0,
        title: t("projects.svetlanaTitle"),
        description: t("projects.svetlanaDesc"),
        imageSrc: "/assets/projets/sveta.webp",
        alt: t("projects.svetlanaAlt"),
        githubLink: "https://github.com/ElenaTrif/svetlana-studio",
        websiteLink: "https://svetlana-studio-5lvn.vercel.app",
        descButton: t("projects.demoSite"),
        titleModal: t("projects.svetlanaModalTitle"),
        descModal: t("projects.svetlanaModalDesc"),
        languages: ["Next.js", "SEO", "Setmore.com"],
      },
      {
        id: 1,
        title: t("projects.argentBankTitle"),
        description: t("projects.argentBankDesc"),
        imageSrc: "/assets/projets/bank-tree.webp",
        alt: t("projects.argentBankAlt"),
        githubLink: "https://github.com/ElenaTrif/ArgentBank",
        websiteLink: "https://github.com/ElenaTrif/ArgentBank",
        descButton: t("projects.codeSource"),
        titleModal: t("projects.argentBankModalTitle"),
        descModal: t("projects.argentBankModalDesc"),
        languages: ["React", "Redux", "API", "Swagger"],
      },
      {
        id: 2,
        title: t("projects.kasaTitle"),
        description: t("projects.kasaDesc"),
        imageSrc: "/assets/projets/kasa.webp",
        alt: t("projects.kasaAlt"),
        githubLink: "https://github.com/ElenaTrif/kasa",
        websiteLink: "https://github.com/ElenaTrif/kasa",
        descButton: t("projects.codeSource"),
        titleModal: t("projects.kasaModalTitle"),
        descModal: t("projects.kasaModalDesc"),
        languages: ["React", "SASS", "Figma"],
      },
      {
        id: 3,
        title: t("projects.sophieBluelTitle"),
        description: t("projects.sophieBluelDesc"),
        imageSrc: "/assets/projets/sophie-bluel.webp",
        alt: t("projects.sophieBluelAlt"),
        githubLink: "https://github.com/ElenaTrif/Portfolio-architecte-sophie-bluel",
        websiteLink: "https://github.com/ElenaTrif/Portfolio-architecte-sophie-bluel",
        descButton: t("projects.codeSource"),
        titleModal: t("projects.sophieBluelModalTitle"),
        descModal: t("projects.sophieBluelModalDesc"),
        languages: ["JavaScript", "NodeJs"],
      },
      {
        id: 4,
        title: t("projects.ohmyfoodTitle"),
        description: t("projects.ohmyfoodDesc"),
        imageSrc: "/assets/projets/ohmyfood.webp",
        alt: t("projects.ohmyfoodAlt"),
        githubLink: "https://github.com/ElenaTrif/ohmyfood",
        websiteLink: "https://ohmyfood-4gwn6re07-elenas-projects-e3d2b6db.vercel.app",
        descButton: t("projects.demoSite"),
        titleModal: t("projects.ohmyfoodModalTitle"),
        descModal: t("projects.ohmyfoodModalDesc"),
        languages: ["HTML", "CSS", "SASS"],
      },
      {
        id: 5,
        title: t("projects.printItTitle"),
        description: t("projects.printItDesc"),
        imageSrc: "/assets/projets/colors.webp",
        alt: t("projects.printItAlt"),
        githubLink: "https://github.com/ElenaTrif/print-it",
        websiteLink: "https://print-it-two.vercel.app",
        descButton: t("projects.demoSite"),
        titleModal: t("projects.printItModalTitle"),
        descModal: t("projects.printItModalDesc"),
        languages: ["JavaScript", "HTML", "CSS"],
      },
      {
        id: 6,
        title: t("projects.ninaCarducciTitle"),
        description: t("projects.ninaCarducciDesc"),
        imageSrc: "/assets/projets/nina.webp",
        alt: t("projects.ninaCarducciAlt"),
        githubLink: "https://github.com/ElenaTrif/ninacarducci",
        websiteLink: "https://ninacarducci-gkx2kvm6b-elenas-projects-e3d2b6db.vercel.app",
        descButton: t("projects.demoSite"),
        titleModal: t("projects.ninaCarducciModalTitle"),
        descModal: t("projects.ninaCarducciModalDesc"),
        languages: ["SEO", "Lighthouse", "Wave"],
      },
    ]);
  }, [t, i18n.language]);

  const handleProjectClick = (index) => {
    setIsOpen(true);
    setSelectedProject(projects[index]);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
    setSelectedProject(null);
  };

  if (!isLoaded || projects.length === 0) {
    return null; // Ne rien rendre tant que le contenu n'est pas chargé
  }

  return (
    <div className="mt-16" id="portfolio">
      <h2 className={`${title()} relative`}>
        {t("projects.title")}
        <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-b from-[#FF1CF7] to-[#b249f8]"></span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 mt-10">
        {projects.map((project, index) => (
          <Card
            key={index}
            isFooterBlurred
            isPressable
            className="w-full h-[300px]"
            onClick={() => handleProjectClick(index)}
          >
            <CardHeader className="absolute bg-white/70 z-10 flex-col items-start text-left">
              <h4 className="text-black/90 font-bold text-xl">{project.title}</h4>
              <p className="text-tiny text-black/60 uppercase font-bold">{project.description}</p>
            </CardHeader>
            <Image
              removeWrapper
              alt={project.title}
              className="z-0 w-full h-full object-cover"
              src={project.imageSrc}
            />
            <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
              <div className="flex flex-grow gap-1 items-center">
                <a
                  href={project.githubLink}
                  className={`${buttonStyles({
                    variant: "bordered",
                    radius: "full",
                    size: "sm",
                    color: "white"
                  })} border-white-500`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                >
                  <GithubIcon size={20} />
                  {t("projects.github")}
                </a>
              </div>
              <a
                href={project.websiteLink}
                className={buttonStyles({
                  color: "primary",
                  radius: "full",
                  variant: "shadow",
                  size: "sm",
                })}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
              >
                {project.descButton}
              </a>
            </CardFooter>
          </Card>
        ))}
      </div>

      {isOpen && (
        <Modal isOpen={isOpen} onClose={handleCloseModal}>
          <ModalContent>
            <ModalHeader>{selectedProject.titleModal}</ModalHeader>
            <ModalBody>
              <p>{selectedProject.descModal}</p>
              <div className="mt-4 space-x-2">
                {selectedProject.languages.map((language, index) => (
                  <Chip key={index}>{language}</Chip>
                ))}
              </div>
            </ModalBody>
            <ModalFooter>
              <Button color="secondary" variant="light" onClick={handleCloseModal}>
                {t("projects.close")}
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      )}
    </div>
  );
};

export default Projects;

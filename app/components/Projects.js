"use client"

import React, { useState, useMemo } from "react";
import { Card, CardHeader, CardFooter, Image } from "@nextui-org/react";
import { button as buttonStyles } from "@nextui-org/theme";
import { GithubIcon } from "./Icons";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Chip } from "@nextui-org/react";
import { title } from "../tailwind-config";

const Projects = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);


  const projects = useMemo(() => [
    {
      id: 1,
      title: "Argent Bank",
      description: "Mise en place d'une application bancaire avec React et Redux.",
      imageSrc: "/assets/projets/bank-tree.webp",
      alt: "Un verre transparent avec des monnaies d'ou pousse une plante verte.",
      githubLink: "https://github.com/ElenaTrif/ArgentBank",
      websiteLink: "https://github.com/ElenaTrif/ArgentBank",
      descButton: "Code Source",
      titleModal: "Projet Argent Bank",
      descModal: "Développement front-end d'une application bancaire avec React et Redux, intégration avec un back-end via des appels API.",
      languages: ["React", "Redux", "API", "Swagger"],
    },
    {
      id: 2,
      title: "Kasa",
      description: "Application de location immobilière faite avec React.",
      imageSrc: "/assets/projets/kasa.webp",
      alt: "Une pièce d'un appartement avec un canapé d'angle, une table et une télévision.",
      githubLink: "https://github.com/ElenaTrif/kasa",
      websiteLink: "https://github.com/ElenaTrif/kasa",
      descButton: "Code Source",
      titleModal: "Projet Kasa",
      descModal: "Développement d'une application web de location immobilière en utilisant React et React Router, en suivant les maquettes fournies et en utilisant des données simulées extraites d'un fichier JSON.",
      languages: ["React", "SASS", "Figma"],
    },
    {
      id: 3,
      title: "Sophie Bluel",
      description: "Portfolio de designer réalisé en HTML, CSS, JavaScript.",
      imageSrc: "/assets/projets/sophie-bluel.webp",
      alt: "Portrait d'une femme architecte Sophie Bluel.",
      githubLink: "https://github.com/ElenaTrif/Portfolio-architecte-sophie-bluel",
      websiteLink: "https://github.com/ElenaTrif/Portfolio-architecte-sophie-bluel",
      descButton: "Code Source",
      titleModal: "Projet Sophie Bluel",
      descModal: "Création d'une page web dynamique pour le site d'une architecte d'intérieur en utilisant JavaScript et en communicant avec une API.",
      languages: ["JavaScript", "NodeJs"],
    },
    {
      id: 4,
      title: "Ohmyfood",
      description: "Developpement du site des menus des restaurants avec HTML et SASS.",
      imageSrc: "/assets/projets/ohmyfood.webp",
      alt: "Une assiette contenant un repas gastronomique.",
      githubLink: "https://github.com/ElenaTrif/ohmyfood",
      websiteLink: "https://ohmyfood-4gwn6re07-elenas-projects-e3d2b6db.vercel.app",
      descButton: "Demo site",
      titleModal: "Projet Ohmyfood",
      descModal: "Amélioration de l'interface mobile-first d'une start-up, en intégrant une maquette responsive et en mettant en œuvre des animations CSS pour améliorer l'expérience utilisateur, tout en utilisant Sass et Git/GitHub.",
      languages: ["HTML", , "CSS", "SASS"],
    },
    {
      id: 5,
      title: "Print it",
      description: "Dynamisation du site statique d'une imprimerie avec JavaScript.",
      imageSrc: "/assets/projets/colors.webp",
      alt: "Rayures de différentes couleurs vives.",
      githubLink: "https://github.com/ElenaTrif/print-it",
      websiteLink: "https://print-it-two.vercel.app",
      descButton: "Demo site",
      titleModal: "Projet Print it",
      descModal: "Initiation au langage JavaScript en dynamisant un site web d'une imprimerie avec un carrousel interactif, démontrant les fondamentaux du développement web interactif.",
      languages: ["JavaScript", "HTML", "CSS"],
    },
    {
      id: 6,
      title: "Nina Carducci",
      description: "Amélioration de la performance du site avec SEO, Lighthouse et Wave.",
      imageSrc: "/assets/projets/nina.webp",
      alt: "Un homme souriant dans la foule avec la main levée.",
      githubLink: "https://github.com/ElenaTrif/ninacarducci",
      websiteLink: "https://ninacarducci-gkx2kvm6b-elenas-projects-e3d2b6db.vercel.app",
      descButton: "Demo site",
      titleModal: "Projet Nina Carducci",
      descModal: "Optimisation du référencement d'un site de photographe, en identifiant et en améliorant ses performances, son accessibilité et en mettant en place le référencement local, tout en fournissant un rapport détaillé des actions effectuées.",
      languages: ["SEO", "Lighthouse", "Wave"],
    },
  ], []);

  const handleProjectClick = (index) => {
    setIsOpen(true);
    setSelectedProject(projects[index]);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
    setSelectedProject(null);
  };

  return (
    <div className="mt-16" id="portfolio">
      <h1 className={`${title()} relative`}>
        Mes projets
        <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-b from-[#FF1CF7] to-[#b249f8]"></span>
      </h1>
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
                  GitHub
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
                Fermer
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      )}
    </div>
  );
};

export default Projects;

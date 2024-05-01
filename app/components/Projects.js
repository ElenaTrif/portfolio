"use client"

import React, { useState } from "react";
import { Card, CardHeader, CardFooter, Image } from "@nextui-org/react";
import { button as buttonStyles } from "@nextui-org/theme";
import { GithubIcon } from "./Icons";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button } from "@nextui-org/react";

const Projects = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);


  const projects = [
    {
      id: 1,
      title: "Argent Bank",
      description: "Mise en place d'une application bancaire avec React et Redux.",
      imageSrc: "/assets/bank-tree.jpeg",
      githubLink: "https://github.com/ElenaTrif/ArgentBank",
      websiteLink: "https://github.com/ElenaTrif/ArgentBank",
      titleModal: "Projet Argent Bank",
      descModal: "Développement front-end d'une application bancaire avec React et Redux, intégration avec un back-end via des appels API.",
    },
    {
      id: 2,
      title: "Kasa",
      description: "Application de location immobilière faite avec React.",
      imageSrc: "/assets/kasa.webp",
      githubLink: "https://github.com/ElenaTrif/kasa",
      websiteLink: "https://github.com/ElenaTrif/kasa",
      titleModal: "Projet Kasa",
      descModal: "Développement d'une application web de location immobilière en utilisant React et React Router, en suivant les maquettes fournies et en utilisant des données simulées extraites d'un fichier JSON.",
    },
    {
      id: 3,
      title: "Sophie Bluel",
      description: "Portfolio de designer réalisé en HTML, CSS, JavaScript.",
      imageSrc: "/assets/sophie-bluel.png",
      githubLink: "https://github.com/ElenaTrif/Portfolio-architecte-sophie-bluel",
      websiteLink: "https://github.com/ElenaTrif/Portfolio-architecte-sophie-bluel",
      titleModal: "Projet Sophie Bluel",
      descModal: "Création d'une page web dynamique pour le site d'une architecte d'intérieur en utilisant JavaScript et en communicant avec une API.",
    },
    {
      id: 4,
      title: "Ohmyfood",
      description: "Developpement du site des menus des restaurants avec HTML et SASS.",
      imageSrc: "/assets/ohmyfood.jpg",
      githubLink: "https://github.com/ElenaTrif/ohmyfood",
      websiteLink: "https://ohmyfood-4gwn6re07-elenas-projects-e3d2b6db.vercel.app",
      titleModal: "Projet Ohmyfood",
      descModal: "Amélioration de l'interface mobile-first d'une start-up, en intégrant une maquette responsive et en mettant en œuvre des animations CSS pour améliorer l'expérience utilisateur, tout en utilisant Sass et Git/GitHub.",
    },
    {
      id: 5,
      title: "Print it",
      description: "Dynamisation du site statique d'une imprimerie avec JavaScript.",
      imageSrc: "/assets/colors.jpg",
      githubLink: "https://github.com/ElenaTrif/print-it",
      websiteLink: "https://print-it-two.vercel.app",
      titleModal: "Projet Print it",
      descModal: "Initiation au langage JavaScript en dynamisant un site web d'une imprimerie avec un carrousel interactif, démontrant les fondamentaux du développement web interactif.",
    },
    {
      id: 6,
      title: "Nina Carducci",
      description: "Amélioration de la performance du site avec SEO, Lighthouse et Wave.",
      imageSrc: "/assets/nina.webp",
      githubLink: "https://github.com/ElenaTrif/ninacarducci",
      websiteLink: "https://ninacarducci-gkx2kvm6b-elenas-projects-e3d2b6db.vercel.app",
      titleModal: "Projet Nina Carducci",
      descModal: "Optimisation du référencement d'un site de photographe, en identifiant et en améliorant ses performances, son accessibilité et en mettant en place le référencement local, tout en fournissant un rapport détaillé des actions effectuées.",
    },
  ];

  const handleProjectClick = (index) => {
    setIsOpen(true);
    setSelectedProject(projects[index]);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
    setSelectedProject(null);
  };

  return (
    <div className="mt-12">
      <h1 className="text-3xl font-bold mb-8">Portfolio</h1>
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
              >
                Demo Site
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
              {/* Ajoutez d'autres informations sur le projet ici */}
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

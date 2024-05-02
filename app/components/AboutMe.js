import React from "react";
import { title } from "../tailwind-config";
import { Card, CardHeader, CardBody, Divider, Chip } from "@nextui-org/react";

const AboutMe = () => {
  return (
    <div className="space-y-6 mt-12" id="about">
      <h1 className={`${title()} relative`}>
        A propos de moi
        <span className="absolute bottom-0 left-0 w-full h-1 bg-purple-500"></span>
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
            <p className="text-lg">Qui je suis</p>
          </div>
        </CardHeader>
        <Divider />
        <CardBody className="flex gap-3">
          <p>Je m&apos;appelle Elena Novikova, une développeuse web spécialisée dans la conception de sites web interactifs et intuitifs.</p>
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
            #
          </Chip>
          <div className="flex flex-col">
            <p className="text-lg">Ma passion pour le web</p>
          </div>
        </CardHeader>
        <Divider />
        <CardBody className="flex gap-3">
          <p>Depuis que j&apos;ai découvert ma passion pour le développement web, j&apos;ai consacré mon temps et mon énergie à perfectionner mes compétences dans ce domaine fascinant.</p>
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
            #
          </Chip>
          <div className="flex flex-col">
            <p className="text-lg">Mon engagement</p>
          </div>
        </CardHeader>
        <Divider />
        <CardBody className="flex gap-3">
          <p>Ma passion pour le développement web ne se limite pas seulement à écrire du code. Je suis également passionnée par l&apos;apprentissage continu et l&apos;exploration de nouvelles technologies et tendances du secteur. Toujours à l&apos;affût des dernières innovations, je m&apos;efforce d&apos;intégrer les meilleures pratiques et les outils les plus avancés dans mes projets pour garantir des résultats de haute qualité.</p>
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
            <p className="text-lg">Contactez-moi</p>
          </div>
        </CardHeader>
        <Divider />
        <CardBody className="flex gap-3">
          <p>Si vous êtes intéressé par un projet web passionnant ou si vous souhaitez simplement discuter de vos idées, n&apos;hésitez pas à me contacter. Je suis impatiente de collaborer avec vous et de transformer vos idées en réalité numérique !</p>
        </CardBody>
      </Card>
    </div>
  );
};

export default AboutMe;

import React from "react";
import { title } from "../tailwind-config";
import { Card, CardHeader, CardBody, Divider, Chip } from "@nextui-org/react";

const AboutMe = () => {
	return (
		<div className="space-y-6">
			<h1 className={title()}>About me</h1>
			<br />
			<br />
			<Card className="max-w-[1000px]">
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
					<p>Je m'appelle Elena Novikova, une développeuse web passionnée par la création d'expériences numériques innovantes et engageantes.</p>
				</CardBody>
			</Card>
			<Card className="max-w-[1000px]">
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
					<p>Depuis que j'ai découvert ma passion pour le développement web, j'ai consacré mon temps et mon énergie à perfectionner mes compétences dans ce domaine fascinant.</p>
				</CardBody>
			</Card>
			<Card className="max-w-[1000px]">
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
					<p>Ma passion pour le développement web ne se limite pas seulement à écrire du code. Je suis également passionnée par l'apprentissage continu et l'exploration de nouvelles technologies et tendances du secteur. Toujours à l'affût des dernières innovations, je m'efforce d'intégrer les meilleures pratiques et les outils les plus avancés dans mes projets pour garantir des résultats de haute qualité.</p>
				</CardBody>
			</Card>
			<Card className="max-w-[1000px]">
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
					<p>Si vous êtes intéressé par un projet web passionnant ou si vous souhaitez simplement discuter de vos idées, n'hésitez pas à me contacter. Je suis impatiente de collaborer avec vous et de transformer vos idées en réalité numérique !</p>
				</CardBody>
			</Card>
		</div>
	);
};

export default AboutMe;

import React from "react";
import { title } from "../tailwind-config";
import { Card, Image } from "@nextui-org/react";

const Skills = () => {
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
      title: "MongoDb",
      imageSrc: "/assets/skills/mongodb.png"
    }
  ];

  return (
    <div className="mt-16" id="skills">
      <h1 className={`${title()} relative`}>
        Compétences
        <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-b from-[#FF1CF7] to-[#b249f8]"></span>
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
        {skills.map((skill, index) => (
          <Card key={index} className="w-full h-[150px] flex flex-col items-center justify-center px-16 md:px-12 lg:px-16">
            <Image
              alt={skill.title}
              className="object-contain"
              src={skill.imageSrc}
            />
            <p className="mt-2 text-center">{skill.title}</p>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Skills;

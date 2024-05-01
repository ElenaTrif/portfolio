import React from "react";
import { title } from "../tailwind-config";

const Skills = () => {
  return (
    <div className="bg-black text-white p-8">
      <h1 className={title()}>Skills</h1>
      <ul className="list-disc">
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        {/* Ajoutez vos compétences ici */}
      </ul>
    </div>
  );
};

export default Skills;

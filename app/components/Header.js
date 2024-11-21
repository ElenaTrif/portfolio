import React from "react";
import { Image } from "@nextui-org/react";
import { title, subtitle } from "../tailwind-config";
import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";
import { GithubIcon } from "./Icons";

const Header = () => {
  return (

    <div className="md:w-full flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-10 py-8 lg:py-10">
    {/* Première image */}
    <div className="lg:w-1/2 flex justify-center items-center mb-4 lg:mb-0 w-full">
      <Image
        isZoomed
        isBlurred
        className="w-full sm:w-full md:w-[480px] lg:w-[480px] h-full object-cover"
        alt="Portrait de Novikova Elena"
        src="/assets/me2.webp"
      />
    </div>
      <div className="md:w-1/2 text-center z-10">
        <h1 className={title()}>Transformez </h1>
        <h1 className={title({ color: "violet" })}>vos idées </h1>
        <h1 className={title()}>en réalité digitale.</h1>
        <h2 className={subtitle({ class: "mt-4" })}>
          L&apos;art du développement web, à votre service.
        </h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-3 mt-6">
          <Link
            href="#portfolio"
            className={buttonStyles({ color: "primary", radius: "full", variant: "shadow", size: "lg" })}
          >
            Mes projets
          </Link>
          <Link
            isExternal
            className={`${buttonStyles({ variant: "bordered", radius: "full", size: "lg" })} border-primary-500`}
            href="https://github.com/ElenaTrif"
          >
            <GithubIcon size={20} />
            GitHub
          </Link>
        </div>
      </div>
      <div className="hidden lg:flex lg:w-1/2 justify-center items-center mb-4 lg:mb-0">
        <Image
          isZoomed
          isBlurred
          className="w-96 lg:w-[480px]"
          alt="Ordinateur sur la table, les mains tapent sur le clavier"
          src="/assets/me5.jpg"
        />
      </div>
    </div>


  );
};

export default Header;

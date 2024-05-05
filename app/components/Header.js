import React from "react";
import { Image } from "@nextui-org/react";
import { title, subtitle } from "../tailwind-config";
import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";
import { GithubIcon } from "./Icons";

const Header = () => {
  return (

    <div className="md:w-full flex flex-col md:flex-row items-center justify-center gap-4 md:gap-10 py-8 md:py-10">
      <div className="md:w-1/2 flex justify-center items-center mb-4 md:mb-0">
        <Image
          isZoomed
          isBlurred
          width={360}
          alt="Portrait de Novikova Elena"
          src="/assets/me.webp"
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
      <div className="hidden md:block md:w-1/2 flex justify-center items-center mb-4 md:mb-0">
        <Image
          isZoomed
          isBlurred
          width={360}
          alt="Ordinateur sur la table, les mains tapent sur le clavier"
          src="/assets/code.webp"
        />
      </div>
    </div>


  );
};

export default Header;

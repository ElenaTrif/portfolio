import React from "react";
import { title } from "../tailwind-config";
import { FaEnvelope, FaGithub } from "react-icons/fa";

const ContactForm = () => {
  return (
    <div className="mt-16" id="contact">
      <h1 className={`${title()} relative`}>
        Contactez-moi
        <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-b from-[#FF1CF7] to-[#b249f8]"></span>
      </h1>
      <div className="flex items-center my-4">
        <FaEnvelope className="mr-2 z-10" />
        <a href="mailto:novicovalena@yahoo.fr" style={{ zIndex: 10 }}>novicovalena@yahoo.fr</a>
      </div>
      <div className="flex items-center my-4">
        <FaGithub className="mr-2 z-10" />
        <a href="https://github.com/ElenaTrif" style={{ zIndex: 10 }}>GitHub</a>
      </div>
    </div>
  );
};

export default ContactForm;

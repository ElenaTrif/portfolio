import React from "react";
import { title } from "../tailwind-config";

const Contact = () => {
  return (
    <div className="bg-black text-white p-8">
      <h1 className={title()}>Contactez-moi</h1>
      {/* Ajoutez un formulaire de contact ou vos coordonnées ici */}
      <form>
        <div className="mb-4">
          <label className="block text-lg mb-2" htmlFor="name">Nom :</label>
          <input className="w-full p-2 rounded bg-gray-800 text-white" type="text" id="name" name="name" />
        </div>
        <div className="mb-4">
          <label className="block text-lg mb-2" htmlFor="email">Email :</label>
          <input className="w-full p-2 rounded bg-gray-800 text-white" type="email" id="email" name="email" />
        </div>
        <div className="mb-4">
          <label className="block text-lg mb-2" htmlFor="message">Message :</label>
          <textarea className="w-full p-2 rounded bg-gray-800 text-white" id="message" name="message" rows="4"></textarea>
        </div>
        <button className="bg-pink-500 text-white py-2 px-4 rounded hover:bg-pink-600 transition duration-300">Envoyer</button>
      </form>
    </div>
  );
};

export default Contact;

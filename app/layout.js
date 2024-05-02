import "./globals.css";
import { Providers } from "./providers"; // Importez le composant Providers depuis votre fichier providers.js
import Image from "next/image"; // Importez le composant Image depuis next/image

export const metadata = {
  title: "Portfolio Novikova Elena",
  description: "Site portfolio de la développeuse web Novikova Elena",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='dark'>
      <body className="bg-gradient-to-b from-purple-900 to-indigo-900 min-h-screen relative">
        <div className="fixed top-0 w-full h-full overflow-hidden pointer-events-none z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-opacity-50 bg-black"></div>
          <Image
            className="absolute top-0 left-0 w-full h-full object-cover"
            src="/assets/skills/nuit.png"
            alt="Voie lactée"
            layout="fill"
          />
        </div>
        <Providers> {/* Utilisez le composant Providers ici */}
          {children}
        </Providers>
      </body>
    </html>
  );
}

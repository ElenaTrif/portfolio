import "./globals.css";
import { Providers } from "./providers"; // Importez le composant Providers depuis votre fichier providers.js
import Image from "next/image"; // Importez le composant Image depuis next/image

export const metadata = {
  title: "NovikovaWeb | Développeur Web Frontend Freelance | Création de Sites et Applications | Solutions Digitales, IT - Novikova Elena",
  description: "NovikovaWeb, spécialiste en développement web freelance, frontend, création de sites responsive, applications web, solutions IT sur mesure, SEO, React, Next.js, Tailwind CSS. Basée en France et en Russie, je propose des services à distance pour tous vos projets digitaux avec des technologies innovantes.",
  keywords: "NovikovaWeb, développeur web freelance, solutions IT, création de sites web, applications web, React, Next.js, Tailwind CSS, SEO, développement frontend, solutions web, services informatiques, développement sur mesure, développeur en France et Russie, Elena Novikova",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    title: "NovikovaWeb | IT et Développement Web Freelance",
    description: "Découvrez le portfolio de Novikova Elena, développeuse web freelance spécialisée dans la création de sites web, applications et solutions digitales. Explorez mes projets réalisés en React, Next.js et bien plus.",
    url: "https://novikovaweb.vercel.app",
    site_name: "NovikovaWeb - IT et Développement Web Freelance",
    profile: {
      firstName: "Elena",
      lastName: "Novikova",
      username: "NovikovaWeb", // Branding utilisé ici
      gender: "female",
    },
    images: [
      {
        url: "https://novikovaweb.vercel.app/assets/me2.webp",
        width: 800,
        height: 600,
        alt: "NovikovaWeb | Portfolio Développeur Web Frontend Freelance - Vue élégante d'une développeuse web devant l'ordinateur",
      },
    ],
  },
  links: {
    github: "https://github.com/ElenaTrif",
    telegram: "https://t.me/eletrifa",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className="dark">
      <head>
        {/* Métadonnées de base */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="author" content="Elena Novikova" />
        <meta name="google-site-verification" content="fwpgdHLJA6PDcR0s7lWzJRlT6wNwANGNIrQHtwaTDr8" />

        {/* OpenGraph (SEO et réseaux sociaux) */}
        <meta property="og:type" content={metadata.openGraph.type} />
        <meta property="og:locale" content={metadata.openGraph.locale} />
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:site_name" content={metadata.openGraph.site_name} />
        <meta property="og:image" content={metadata.openGraph.images[0].url} />
        <meta property="og:image:width" content={metadata.openGraph.images[0].width.toString()} />
        <meta property="og:image:height" content={metadata.openGraph.images[0].height.toString()} />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.openGraph.title} />
        <meta name="twitter:description" content={metadata.openGraph.description} />
        <meta name="twitter:image" content={metadata.openGraph.images[0].url} />
        <meta name="twitter:site" content="@elena-novi81620" />
        <meta name="twitter:creator" content="@elena-novi81620" />

        {/* Favicon et Apple Touch Icon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#4c51bf" />

        {/* JSON-LD: Person */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: `
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "NovikovaWeb",
            "url": "https://novikovaweb.netlify.app",
            "image": "https://novikovaweb.netlify.app/assets/me2.webp",
            "sameAs": [
              "https://twitter.com/elena-novi81620",
              "https://github.com/ElenaTrif",
              "https://t.me/eletrifa"
            ],
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Nice",
              "addressLocality": "Nice",
              "addressRegion": "Provence-Alpes-Côte d'Azur",
              "postalCode": "06000",
              "addressCountry": "FR"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+33658366870",
              "contactType": "customer service",
              "areaServed": "FR",
              "availableLanguage": "French"
            },
            "openingHours": "Mo-Su 00:00-23:59",
            "description": "Développeuse web freelance, spécialisée dans la création de sites web, applications et solutions digitales. Basée à Nice, France, je travaille à distance avec des technologies comme React, Next.js, et Tailwind CSS.",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "57"
            },
            "review": [
              {
                "@type": "Review",
                "author": {
                  "@type": "Person",
                  "name": "Béatrice L."
                },
                "datePublished": "2024-11-12",
                "reviewBody": "Un service de qualité et un site magnifique. Merci Elena !",
                "name": "Développement d'une boutique en ligne",
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": "5",
                  "bestRating": "5"
                }
              },
              {
                "@type": "Review",
                "author": {
                  "@type": "Person",
                  "name": "Jean Lyon"
                },
                "datePublished": "2024-10-20",
                "reviewBody": "Excellente collaboration, site livré rapidement et parfaitement optimisé.",
                "name": "Site vitrine pour entreprise",
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": "5",
                  "bestRating": "5"
                }
              }
            ]
          }
          `
        }} />

        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: `
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
          {
            "@type": "Question",
            "name": "Quels services propose NovikovaWeb ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Création de sites web, développement frontend, solutions IT sur mesure, applications web."
            }
          },
          {
            "@type": "Question",
            "name": "Comment puis-je contacter Elena Novikova ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Vous pouvez me contacter via mon site web, par email, par téléphone ou sur Telegram."
            }
          }
        ]
  }
  `
        }} />


        <title>{metadata.title}</title>
      </head>
      <body className="bg-gradient-to-b from-purple-900 to-indigo-900 min-h-screen relative">
        {/* Background avec image */}
        <div className="fixed top-0 w-full h-full overflow-hidden pointer-events-none z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-opacity-50 bg-black"></div>
          <Image
            className="absolute top-0 left-0 w-full h-full object-cover"
            src="/assets/nuit.png"
            alt="Vue d'une nuit étoilée avec une légère transparence noire"
            width={1920}
            height={1080}
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
        </div>

        {/* Contenu principal */}
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}

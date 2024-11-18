import i18n from "i18next"; // Importer i18next
import { initReactI18next } from "react-i18next"; // Intégration avec React
import LanguageDetector from "i18next-browser-languagedetector"; // Détection de la langue

// Traductions
const resources = {
  fr: {
    translation: {
      navbar: {
        about: "À propos de moi",
        portfolio: "Projets",
        formation: "Formation",
        skills: "Compétences",
        contact: "Contact",
      },
      about: {
        title: "À propos de moi",
        description: "Je m'appelle Elena Novikova, une développeuse web...",
      },
    },
  },
  ru: {
    translation: {
      navbar: {
        about: "Обо мне",
        portfolio: "Проекты",
        formation: "Образование",
        skills: "Навыки",
        contact: "Контакты",
      },
      about: {
        title: "Обо мне",
        description: "Меня зовут Елена Новикова, я веб-разработчик...",
      },
    },
  },
};

// Initialisation de i18n
i18n
  .use(LanguageDetector) // Détection automatique de la langue
  .use(initReactI18next) // Intégration avec React
  .init({
    resources, // Ressources de traduction
    fallbackLng: "fr", // Langue par défaut
    interpolation: {
      escapeValue: false, // React échappe déjà les valeurs par défaut
    },
    detection: {
      order: ["querystring", "cookie", "localStorage", "navigator", "htmlTag"], // Priorité de détection
      caches: ["localStorage", "cookie"], // Où stocker la préférence
    },
  });

export default i18n; // Exporter i18n pour l'utiliser partout

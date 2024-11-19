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
      aboutme: {
        title: "A propos de moi",
        whoAmI: "Qui je suis",
        myPassion: "Ma passion pour le web",
        myCommitment: "Mon engagement",
        contactMe: "Contactez-moi",
        intro: "Je m'appelle Elena Novikova, une développeuse web spécialisée dans la conception de sites web interactifs et intuitifs.",
        passion: "Depuis que j'ai découvert ma passion pour le développement web, j'ai consacré mon temps et mon énergie à perfectionner mes compétences dans ce domaine fascinant.",
        commitment: "Ma passion pour le développement web ne se limite pas seulement à écrire du code. Je suis également passionnée par l'apprentissage continu et l'exploration de nouvelles technologies et tendances du secteur. Toujours à l'affût des dernières innovations, je m'efforce d'intégrer les meilleures pratiques et les outils les plus avancés dans mes projets pour garantir des résultats de haute qualité.",
        contact: "Si vous êtes intéressé par un projet web passionnant ou si vous souhaitez simplement discuter de vos idées, n'hésitez pas à me contacter. Je suis impatiente de collaborer avec vous et de transformer vos idées en réalité numérique !"
      }
    }
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
      aboutme: {
        title: "Обо мне",
        whoAmI: "Кто я",
        myPassion: "Моя страсть к веб-разработке",
        myCommitment: "Мое обязательство",
        contactMe: "Свяжитесь со мной",
        intro: "Меня зовут Елена Новикова, я веб-разработчик, специализирующийся на создании интерактивных и интуитивно понятных веб-сайтов.",
        passion: "С тех пор как я открыла для себя свою страсть к веб-разработке, я посвятила свое время и энергию совершенствованию своих навыков в этой увлекательной области.",
        commitment: "Моя страсть к веб-разработке не ограничивается только написанием кода. Я также увлечена постоянным обучением и изучением новых технологий и трендов в отрасли. Всегда в поиске последних инноваций, я стараюсь интегрировать лучшие практики и самые передовые инструменты в мои проекты для обеспечения высококачественных результатов.",
        contact: "Если вы заинтересованы в увлекательном веб-проекте или просто хотите обсудить свои идеи, не стесняйтесь связаться со мной. Я с нетерпением жду возможности сотрудничества и превращения ваших идей в цифровую реальность!"
      }
    }
  }
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

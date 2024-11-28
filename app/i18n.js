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
        myPassion: "Mes intérêts professionnels",
        myCommitment: "Mon approche et mon expérience",
        contactMe: "Contactez-moi",
        intro: "Je m'appelle Elena, une développeuse web passionnée avec une expertise dans la création d'interfaces utilisateur modernes, intuitives et performantes. Mon approche repose sur la rigueur, la créativité et l’attention aux détails.",
        passion: "Avec une maîtrise de <span class='text-yellow-500 font-bold'>React</span>, <span class='text-yellow-500 font-bold'>Next.js</span>, <span class='text-yellow-500 font-bold'>Redux</span>, ainsi que des outils comme <span class='text-yellow-500 font-bold'>Tailwind CSS</span>, <span class='text-yellow-500 font-bold'>Material UI</span>, je transforme vos idées en produits numériques de haute qualité. Mes compétences en intégration <span class='text-yellow-500 font-bold'>HTML/SCSS/JavaScript</span> et en optimisation <span class='text-yellow-500 font-bold'>SEO</span> garantissent des sites rapides, fonctionnels et bien référencés.",
        commitment: "Mon parcours inclut la maîtrise de la création de designs adaptatifs pour garantir une expérience utilisateur parfaite sur tous les écrans. J'adore explorer de nouvelles technologies, comme <span class='text-orange-500 font-bold'>Postman</span>, <span class='text-orange-500 font-bold'>Swagger</span>, ou encore des méthodologies modernes de gestion de projet. En complément, je propose la création de comptes professionnels Google (<span class='text-orange-500 font-bold'>Google Business Profile</span>) pour assurer la présence de votre entreprise sur Google, Google Maps, et les recherches locales.",
        contact: "Si vous êtes intéressé par un projet web passionnant ou si vous souhaitez simplement discuter de vos idées. N'hésitez pas à me contacter, je reste accessible à tout moment pour répondre à vos besoins."
      },
      projects: {
        title: "Mes projets",
        svetlanaTitle: "Svetlana Studio",
        svetlanaDesc: "Un site élégant en Next.js pour un institut de beauté.",
        svetlanaAlt: "Aperçu du site Svetlana Studio",
        svetlanaModalTitle: "Projet Svetlana Studio",
        svetlanaModalDesc: "Ce projet consistait à concevoir et développer un site web entièrement responsive et optimisé pour le SEO pour Svetlana Studio avec Next.js. Le site inclut une fonctionnalité de prise de rendez-vous intégrée via Setmore.",
        argentBankTitle: "Argent Bank",
        argentBankDesc: "Mise en place d'une application bancaire avec React et Redux.",
        argentBankAlt: "Un verre transparent avec des monnaies d'où pousse une plante verte.",
        argentBankModalTitle: "Projet Argent Bank (c'est un projet de formation)",
        argentBankModalDesc: "Développement front-end d'une application bancaire en utilisant React et Redux, avec une API.",
        kasaTitle: "Kasa",
        kasaDesc: "Application de location de logements avec React.",
        kasaAlt: "Un appartement moderne.",
        kasaModalTitle: "Projet Kasa (c'est un projet de formation)",
        kasaModalDesc: "Application de location de logements utilisant React pour la gestion des réservations.",
        sophieBluelTitle: "Sophie Bluel",
        sophieBluelDesc: "Portfolio pour une architecte, créé avec JavaScript et NodeJs.",
        sophieBluelAlt: "Portfolio d'architecte.",
        sophieBluelModalTitle: "Projet Sophie Bluel (c'est un projet de formation)",
        sophieBluelModalDesc: "Portfolio d'une architecte optimisé avec JavaScript et NodeJs.",
        ohmyfoodTitle: "OhMyFood",
        ohmyfoodDesc: "Création d'un site de commande de plats avec HTML, CSS et SASS.",
        ohmyfoodAlt: "Image de plats.",
        ohmyfoodModalTitle: "Projet OhMyFood (c'est un projet de formation)",
        ohmyfoodModalDesc: "Un projet de site de commande de plats en ligne avec des technologies de base.",
        printItTitle: "Print It",
        printItDesc: "Site de personnalisation de t-shirts.",
        printItAlt: "Image de t-shirts imprimés.",
        printItModalTitle: "Projet Print It (c'est un projet de formation)",
        printItModalDesc: "Développement d'un site permettant de créer des designs personnalisés pour des t-shirts.",
        ninaCarducciTitle: "Portfolio Nina Carducci",
        ninaCarducciDesc: "Portfolio d'architecte optimisé pour le SEO.",
        ninaCarducciAlt: "Image d'un portfolio d'architecte.",
        ninaCarducciModalTitle: "Projet Nina Carducci (c'est un projet de formation)",
        ninaCarducciModalDesc: "Création d'un portfolio professionnel optimisé pour le SEO.",
        close: "Fermer",
        github: "Voir sur GitHub",
        demoSite: "Voir le site",
        codeSource: "Code Source" // Ajout du texte pour le bouton "Code Source"
      },
      header: {
        imageAlt1: "Portrait de Novikova Elena",
        imageAlt2: "Ordinateur sur la table, les mains tapent sur le clavier",
        title: {
          part1: "Transformez",
          part2: "vos idées",
          part3: "en réalité digitale.",
        },
        subtitle: "L'art du développement web, à votre service.",
        projectsButton: "Mes projets",
        githubButton: "GitHub",
      },
      formation: {
        integrateur: "Intégrateur développeur web",
        openclassroomsAlt: "Logo Openclassrooms",
        openclassrooms: "Openclassrooms",
        description: "Formation en ligne, Titre professionnel niveau 5.",
        dates: "Juil, 2023 - Mai, 2024",
      },
      skills: {
        title: "Compétences", // Ajout de la traduction pour le titre des compétences
      },
      contact: {
        title: "Contactez-moi",
        whatsapp: "Envoyer un message sur WhatsApp",
        telegram: "Envoyer un message sur Telegram"
      },
      footer: {
        rightsReserved: "Tous droits réservés."
      },
    }
  },
  ru: {
    translation: {
      navbar: {
        about: "О себе",
        portfolio: "Проекты",
        formation: "Образование",
        skills: "Навыки",
        contact: "Контакты",
      },
      aboutme: {
        title: "О себе",
        whoAmI: "Кто я",
        myPassion: "Мои профессиональные интересы",
        myCommitment: "Мой подход и опыт",
        contactMe: "Как со мной связаться",
        intro: "Меня зовут Елена, я  создаю современные, интуитивно понятные и высокопроизводительные пользовательские интерфейсы. Мой подход основан на внимании к деталям, креативности и профессионализме.",
        passion: "Обладая опытом работы с <span class='text-yellow-500 font-bold'>React</span>, <span class='text-yellow-500 font-bold'>Next.js</span>, <span class='text-yellow-500 font-bold'>Redux</span>, а также такими инструментами, как <span class='text-yellow-500 font-bold'>Tailwind CSS</span>, <span class='text-yellow-500 font-bold'>Material UI</span>, я превращаю ваши идеи в высококачественные цифровые продукты. Мои навыки включают интеграцию <span class='text-yellow-500 font-bold'>HTML, SCSS, JavaScript</span>, а также профессиональную <span class='text-yellow-500 font-bold'>SEO</span>-оптимизацию, что гарантирует создание быстрых, функциональных и хорошо индексируемых сайтов.",
        commitment: "Мой опыт охватывает разработку адаптивного дизайна, обеспечивающего комфортное использование сайта на всех типах устройств. Я активно изучаю новые технологии, такие как <span class='text-orange-500 font-bold'>Postman</span>, <span class='text-orange-500 font-bold'>Swagger</span>, а также современные методологии управления проектами. Кроме того, я предлагаю услуги по созданию профессиональных аккаунтов Google (<span class='text-orange-500 font-bold'>Google Business Profile</span>), чтобы ваш бизнес стал видимым в поисковой системе Google, на Google Maps и в локальных запросах.",
        contact: "Если вас интересует захватывающий веб-проект или вы хотите обсудить свои идеи, я всегда готова к диалогу. Обращайтесь в любое удобное для вас время — я на связи и готова помочь в реализации ваших целей."
      },
      projects: {
        title: "Мои проекты",
        svetlanaTitle: "Svetlana Studio",
        svetlanaDesc: "Элегантный сайт на Next.js для института красоты.",
        svetlanaAlt: "Превью сайта Svetlana Studio",
        svetlanaModalTitle: "Проект Svetlana Studio",
        svetlanaModalDesc: "Этот проект включал разработку полностью адаптивного и SEO-оптимизированного сайта для Svetlana Studio с использованием Next.js. Сайт включает функцию записи на прием через Setmore.",
        argentBankTitle: "Argent Bank",
        argentBankDesc: "Разработка банковского приложения с использованием React и Redux.",
        argentBankAlt: "Прозрачный стакан с монетами, из которых растет зеленое растение.",
        argentBankModalTitle: "Проект Argent Bank (учебный проект)",
        argentBankModalDesc: "Фронтенд-разработка банковского приложения с использованием React и Redux, с API.",
        kasaTitle: "Kasa",
        kasaDesc: "Приложение для аренды жилья с использованием React.",
        kasaAlt: "Современная квартира.",
        kasaModalTitle: "Проект Kasa (учебный проект)",
        kasaModalDesc: "Приложение для аренды жилья с использованием React для управления бронированиями.",
        sophieBluelTitle: "Sophie Bluel",
        sophieBluelDesc: "Портфолио архитектора, созданное с использованием JavaScript и NodeJs.",
        sophieBluelAlt: "Портфолио архитектора.",
        sophieBluelModalTitle: "Проект Sophie Bluel (учебный проект)",
        sophieBluelModalDesc: "Портфолио архитектора, оптимизированное с использованием JavaScript и NodeJs.",
        ohmyfoodTitle: "OhMyFood",
        ohmyfoodDesc: "Создание сайта для заказа еды с использованием HTML, CSS и SASS.",
        ohmyfoodAlt: "Изображение блюд.",
        ohmyfoodModalTitle: "Проект OhMyFood (учебный проект)",
        ohmyfoodModalDesc: "Проект сайта для заказа еды с использованием базовых технологий.",
        printItTitle: "Print It",
        printItDesc: "Сайт для персонализации футболок.",
        printItAlt: "Изображение футболок с принтами.",
        printItModalTitle: "Проект Print It (учебный проект)",
        printItModalDesc: "Разработка сайта для создания персонализированных дизайнов для футболок.",
        ninaCarducciTitle: "Портфолио Nina Carducci",
        ninaCarducciDesc: "Портфолио архитектора, оптимизированное для SEO.",
        ninaCarducciAlt: "Изображение портфолио архитектора.",
        ninaCarducciModalTitle: "Проект Nina Carducci (учебный проект)",
        ninaCarducciModalDesc: "Создание профессионального портфолио, оптимизированного для SEO.",
        close: "Закрыть",
        github: "Посмотреть на GitHub",
        demoSite: "Посмотреть сайт",
        codeSource: "Исходный код" // Traduction en russe pour "Code Source"
      },
      header: {
        imageAlt1: "Портрет Елены Новиковой",
        imageAlt2: "Компьютер на столе, руки печатают на клавиатуре",
        title: {
          part1: "Преобразите",
          part2: "свои идеи",
          part3: "в цифровую реальность.",
        },
        subtitle: "Искусство веб-разработки к вашим услугам.",
        projectsButton: "Мои проекты",
        githubButton: "GitHub",
      },
      formation: {
        integrateur: "Разработчик веб-приложений",
        openclassroomsAlt: "Логотип Openclassrooms",
        openclassrooms: "Openclassrooms",
        description: "Онлайн-обучение, профессиональный сертификат уровня 5.",
        dates: "Июль 2023 - Май 2024",
      },
      skills: {
        title: "Навыки", // Traduction en russe pour le titre des compétences
      },
      contact: {
        title: "Свяжитесь со мной",
        whatsapp: "Отправить сообщение через WhatsApp",
        telegram: "Отправить сообщение через Telegram"
      },
      footer: {
        rightsReserved: "Все права защищены."
      },
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
    lng: "fr",
    interpolation: {
      escapeValue: false, // React échappe déjà les valeurs par défaut
    },
    detection: {
      order: ["querystring", "cookie", "localStorage", "navigator", "htmlTag"], // Priorité de détection
      caches: ["localStorage", "cookie"], // Où stocker la préférence
    },
  });

export default i18n; // Exporter i18n pour l'utiliser partout

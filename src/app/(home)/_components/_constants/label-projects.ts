export interface ProjectProps {
    name: string;
    imageURL: string;
    gitUrl: string;
    deploy?: string;
    alt: string;
    description: string;
    technologies: string[];
}

export const LABELSPROJECTS: ProjectProps[] = [
    {
        name: "Micro-saas Todo",
        gitUrl: "https://github.com/Hundlee/micro-saas-todo-app",
        deploy: "https://micro-saas-todo-app-eosin.vercel.app/",
        imageURL: "./micro-saas-todo.png",
        alt: "micro-saas-todo",
        description: "micro-saas para organizar tarefas diarias",
        technologies: [
            "typescript-icon.svg",
            "react.svg",
            "next-js.svg",
            "tailwind-css.svg",
            "file-type-light-prisma.svg",
        ],
    },
    {
        name: "Portfólio",
        gitUrl: "https://github.com/Hundlee/portfolio",
        imageURL: "./portifolioProject.png",
        alt: "Portfólio",
        description: "Portfólio",
        technologies: [
            "typescript-icon.svg",
            "react.svg",
            "next-js.svg",
            "tailwind-css.svg",
        ],
    },
    {
        name: "DailyExpend",
        gitUrl: "https://github.com/Hundlee/daily-expend",
        imageURL: "./dailyExpend.png",
        deploy: "https://daily-expend.vercel.app/",
        alt: "dailyExpend",
        description: "Monitorar gastos. Integrado com banco de dados",
        technologies: [
            "typescript-icon.svg",
            "react.svg",
            "next-js.svg",
            "tailwind-css.svg",
            "file-type-light-prisma.svg",
        ],
    },
    {
        name: "ChatReact",
        imageURL: "./chatReact.png",
        gitUrl: "https://github.com/Hundlee/chatReact",
        deploy: "https://chat-react-kohl.vercel.app/",
        alt: "ChatReact",
        description: "Chat criado com ReactJs e com Firebase",
        technologies: [
            "javascript-js.svg",
            "react.svg",
            "file-type-firebase.svg",
            "file-type-sass.svg",
        ],
    },
    {
        name: "Chat Clinica",
        imageURL: "./clinicaChat.png",
        gitUrl: "https://github.com/Hundlee/chatClinica",
        deploy: "https://chat-clinica.vercel.app/",
        alt: "Chat Clinica",
        description: "Chat para atendimento de uma clinica",
        technologies: [
            "react.svg",
            "javascript-js.svg",
            "file-type-html.svg",
            "file-type-css.svg",
            "file-type-firebase.svg",
        ],
    },
    {
        name: "Conversor de Moedas",
        imageURL: "./converterApp.png",
        gitUrl: "https://github.com/Hundlee/CorverterApp",
        deploy: "https://corverter-app.vercel.app/",
        alt: "ChatReact",
        description: "Criando com JS",
        technologies: [
            "javascript-js.svg",
            "file-type-html.svg",
            "file-type-css.svg",
        ],
    },
    {
        name: "Gerador de Senha",
        imageURL: "./passwordGenerator.png",
        gitUrl: "https://github.com/Hundlee/Random-Password-Generator",
        deploy: "https://random-password-generator-gamma-nine.vercel.app/",
        alt: "Gerador de Senha",
        description: "Criando com JS",
        technologies: [
            "javascript-js.svg",
            "file-type-html.svg",
            "file-type-css.svg",
        ],
    },
    {
        name: "FORLIFE",
        imageURL: "./forLIFE.png",
        gitUrl: "https://github.com/Hundlee/site-responsivo-saude",
        deploy: "https://site-responsivo-saude.vercel.app/",
        alt: "forlife",
        description: "landing page, site de saúde",
        technologies: [
            "javascript-js.svg",
            "file-type-html.svg",
            "file-type-sass.svg",
            "file-type-css.svg",
        ],
    },
    {
        name: "Snake game",
        imageURL: "./snakegamee.png",
        gitUrl: "https://github.com/Hundlee/snakegame",
        deploy: "https://snakegame-opal.vercel.app/",
        alt: "snakeGame",
        description: "Jogo da cobra feito com JS",
        technologies: [
            "javascript-js.svg",
            "file-type-html.svg",
            "file-type-css.svg",
        ],
    },
    {
        name: "Gerenciar usuários",
        imageURL: "./backend.png",
        gitUrl: "https://github.com/Hundlee/users-manage-backend",
        alt: "Gerenciar usuarios",
        description: "Criar usuário | Backend",
        technologies: [
            "typescript-icon.svg",
            "nodejs.svg",
            "file-type-light-prisma.svg",
            "mongodb-original.svg",
            "fastify.svg",
        ],
    },
    {
        name: "Bot Telegram Crypto",
        imageURL: "./backend.png",
        gitUrl: "https://github.com/Hundlee/bot-telegram-crypto",
        alt: "BotTelegram",
        description: "Monitor valores de Cryptomoedas",
        technologies: ["typescript-icon.svg", "nodejs.svg", "grammyY.svg"],
    },
    {
        name: "ContextAPI",
        imageURL: "./contextAPI.png",
        gitUrl: "https://github.com/Hundlee/reactContextAPI",
        deploy: "https://react-context-api-kappa.vercel.app",
        alt: "contextAPI",
        description: "Criar dados, usando context API",
        technologies: ["typescript-icon.svg", "react.svg", "file-type-css.svg"],
    },
];

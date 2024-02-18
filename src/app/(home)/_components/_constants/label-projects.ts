export interface ProjectProps {
    name: string;
    imageURL: string;
    gitUrl: string;
    deploy: string;
    alt: string;
    description: string;
    technologies: string[];
}

export const LABELSPROJECTS: ProjectProps[] = [
    {
        name: "Portfólio",
        gitUrl: "https://github.com/Hundlee/portfolio",
        imageURL: "./portifolioProject.png",
        deploy: "https://github.com/Hundlee/portfolio",
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
        gitUrl: "https://github.com/Hundlee/CorverterApp",
        deploy: "https://corverter-app.vercel.app/",
        alt: "Gerador de Senha",
        description: "Criando com JS",
        technologies: [
            "javascript-js.svg",
            "file-type-html.svg",
            "file-type-css.svg",
        ],
    },
];

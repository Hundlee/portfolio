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
        name: "Portfolio",
        gitUrl: "https://github.com/Hundlee/portfolio",
        imageURL: "./portifolioProject.png",
        deploy: "https://github.com/Hundlee/portfolio",
        alt: "Portfolio",
        description: "Portfolio",
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
        description: "Chat criando com ReactJs com o banco de dados Firebase",
        technologies: [
            "javascript-js.svg",
            "react.svg",
            "file-type-firebase.svg",
            "file-type-sass.svg",
        ],
    },
];

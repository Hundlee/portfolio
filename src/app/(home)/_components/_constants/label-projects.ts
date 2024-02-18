export interface ProjectProps {
    name: string;
    url: string;
    deploy: string;
    alt: string;
    description: string;
    technologies: string[];
}

export const LABELSPROJECTS: ProjectProps[] = [
    {
        name: "Portfolio",
        url: "https://github.com/Hundlee/portfolio",
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
];

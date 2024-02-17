interface BackendProps {
    name: string;
    url: string;
    alt: string;
    description: string;
}

interface FrontendProps {
    name: string;
    url: string;
    alt: string;
    description: string;
}

export const LABELFRONTEND: FrontendProps[] = [
    {
        name: "NextJs",
        url: "./next-js.svg",
        alt: "nextjsIcon",
        description: "Framework React para construção de páginas web.",
    },
    {
        name: "ReactJs",
        url: "./react.svg",
        alt: "reactjsIcon",
        description:
            "Biblioteca modular, o que significa que os componentes podem ser facilmente reutilizados e compartilhados entre diferentes partes da aplicação",
    },
    {
        name: "TailwindCSS",
        url: "./tailwind-css.svg",
        alt: "tailwindIcon",
        description:
            "Framework CSS que auxilia na construção e design de páginas web.",
    },
    {
        name: "HTML",
        url: "./file-type-html.svg",
        alt: "htmlIcon",
        description:
            "HTML é o componente básico da web, ele permite inserir o conteúdo e estabelecer a estrutura básica de um website.",
    },
    {
        name: "CSS",
        url: "./file-type-css.svg",
        alt: "cssIcon",
        description:
            "CSS é chamado de linguagem Cascading Style Sheet e é usado para estilizar elementos escritos em uma linguagem de marcação como HTML.",
    },
    {
        name: "Javascript",
        url: "./javascript-js.svg",
        alt: "javascriptIcon",
        description: "JavaScript é uma linguagem de programação",
    },
    {
        name: "Typescript",
        url: "./typescript-icon.svg",
        alt: "typescriptIcon",
        description:
            "TypeScript é um superconjunto de JavaScript que adiciona digitação estática opcional e recursos avançados ao JavaScript.",
    },
    {
        name: "Sass",
        url: "./file-type-sass.svg",
        alt: "sassIcon",
        description: "O SASS é uma linguagem de extensão do CSS",
    },
];

export const LABELBACKEND: BackendProps[] = [
    {
        name: "NodeJs",
        url: "./nodejs.svg",
        alt: "nodejsIcon",
        description:
            "Node.js é um ambiente de execução JavaScript que permite executar aplicações desenvolvidas com a linguagem de forma autônoma, sem depender de um navegador.",
    },
    {
        name: "Prisma",
        url: "./file-type-light-prisma.svg",
        alt: "PrismaIcon",
        description: "Prisma é um ORM da próxima geração de open-source",
    },
    {
        name: "MongoDB",
        url: "./mongodb-original.svg",
        alt: "mongodbIcon",
        description:
            "banco de dados de documentos com a escalabilidade e flexibilidade que você deseja junto com a consulta e indexação que você precisa.",
    },
    {
        name: "Fastify",
        url: "./fastify.svg",
        alt: "fastifyIcon",
        description:
            "Fastify é um framework Back-End para JavaScript e pode ser utilizado com o ecossistema Node.JS",
    },
    {
        name: "Express",
        url: "./express-original.svg",
        alt: "expressIcon",
        description: "Express é um framework Back-End para JavaScript",
    },
];

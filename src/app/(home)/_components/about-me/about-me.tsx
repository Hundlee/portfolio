const AboutMe = () => {
    return (
        <div
            className="w-full h-auto flex flex-col items-center justify-center mt-20"
            id="about-me"
        >
            <h1 className="text-3xl mb-5 uppercase text-yellow-300">
                Sobre mim
            </h1>
            <div>
                <h2 className="max-w-[22rem] hyphens-auto text-sm text-gray-200 text-justify sm:max-w-[30rem] md:max-w-[600px] md:text-xl lg:text-xl lg:max-w-[55rem] xl:max-w-[65rem] 2xl:max-w-[85rem] 2xl:text-2xl">
                    Olá! Meu nome é{" "}
                    <span className="text-white font-semibold">
                        Gabriel Mesquita
                    </span>
                    . Tenho 20 anos e sou um desenvolvedor FullStack apaixonado
                    por programação. Com mais de 2 anos de experiência dedicada
                    ao estudo e prática em desenvolvimento web. Estou
                    constantemente buscando desafios e oportunidades para
                    expandir meu conjunto de habilidades e aprimorar minha
                    experiência profissional. Sou comprometido com o
                    desenvolvimento de aplicações robustas e escaláveis, e estou
                    sempre aberto a colaborações e parcerias que possam
                    enriquecer minha jornada na tecnologia.
                </h2>
            </div>
        </div>
    );
};

export default AboutMe;

const AboutMe = () => {
    return (
        <div
            className="w-full h-auto flex flex-col items-center justify-center mt-10"
            id="about-me"
        >
            <h1 className="text-3xl mb-10 uppercase">Sobre mim</h1>
            <div>
                <h2 className="max-w-[22rem] text-sm text-gray-200 text-justify sm:max-w-[30rem] md:max-w-[600px] md:text-xl lg:text-xl lg:max-w-[55rem] xl:max-w-[65rem] 2xl:max-w-[85rem] 2xl:text-2xl">
                    Olá! Meu nome é{" "}
                    <span className="text-white font-semibold">
                        Gabriel Mesquita
                    </span>{" "}
                    e tenho 20 anos. Sou completamente apaixonado por
                    programação e tenho me dedicado a estudar essa área há mais
                    de 2 anos, com um foco especial em Frontend. No entanto, meu
                    objetivo é me tornar um desenvolvedor FullStack. Estou
                    constantemente buscando novos desafios e oportunidades para
                    crescer profissionalmente. Estou aberto a colaborações e
                    parcerias que possam enriquecer minha jornada na tecnologia.
                    Estou animado para ver onde essa trajetória me levará e
                    estou confiante de que estou no caminho certo para alcançar
                    meus objetivos.
                </h2>
            </div>
        </div>
    );
};

export default AboutMe;

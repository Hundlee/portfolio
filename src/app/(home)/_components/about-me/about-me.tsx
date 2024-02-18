const AboutMe = () => {
    return (
        <div
            className="w-full h-[600px] flex flex-col items-center justify-center sm:h-[50vh] "
            id="about-me"
        >
            <h1 className="text-3xl mb-10 uppercase">Sobre mim</h1>
            <div>
                <h2 className="max-w-[300px] text-gray-200 text-justify sm:max-w-[400px] md:max-w-[600px]">
                    Olá a todos! Meu nome é{" "}
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

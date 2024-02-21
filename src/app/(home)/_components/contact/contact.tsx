/* eslint-disable @next/next/no-img-element */
const Contact = () => {
    return (
        <footer
            className="w-full h-[20rem] flex items-center justify-center bg-black "
            id="contact"
        >
            <section className="w-[43rem] flex flex-col justify-between items-center sm:flex-row sm:w-[30rem] md:w-[43rem] xl:w-[62rem] 2xl:w-[85rem]">
                <div>
                    <ul className="flex flex-row sm:flex-col">
                        <li className="my-3 hover:scale-105 duration-150 px-2">
                            <a
                                href="https://www.linkedin.com/in/gabriel-mesquita-9614782b4/"
                                target="_blank"
                                className="flex flex-col gap-2 items-center sm:flex-row"
                            >
                                <img
                                    src="/linkedin.svg"
                                    alt="linkedinIcon"
                                    className="w-[2rem] h-[2rem]"
                                />
                                <span className="font-semibold">Linkedin</span>
                            </a>
                        </li>
                        <li className="my-3 hover:scale-105 duration-150 px-2">
                            <a
                                href="https://github.com/Hundlee"
                                target="_blank"
                                className="flex flex-col gap-2 items-center sm:flex-row"
                            >
                                <img
                                    src="/github.svg"
                                    alt="gitHubIcon"
                                    className="w-[2rem] h-[2rem]"
                                />
                                <span className="font-semibold">GitHub</span>
                            </a>
                        </li>
                        <li className="my-3 hover:scale-105 duration-150 px-2">
                            <a
                                href="https://wa.me/558594038930"
                                target="_blank"
                                className="flex flex-col gap-2 items-center sm:flex-row"
                            >
                                <img
                                    src="/whatsapp.svg"
                                    alt="whatsappIcon"
                                    className="w-[2rem] h-[2rem]"
                                />
                                <span className="font-semibold">Whatsapp</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <a href="#">
                    {" "}
                    <img
                        src="/logo.png"
                        alt="logo"
                        className="w-[15rem] hidden xl:block"
                    />
                </a>
                <div>
                    <ul className="mr-2 flex gap-2 text-lg font-semibold sm:flex-col sm:text-xl">
                        <li className="my-2">
                            <a
                                href="#"
                                className="hover:underline duration-300"
                            >
                                Inicio <span className="sm:hidden"> |</span>
                            </a>
                        </li>
                        <li className="my-2">
                            <a
                                href="#about-me"
                                className="hover:underline duration-300"
                            >
                                Sobre mim <span className="sm:hidden"> |</span>
                            </a>
                        </li>
                        <li className="my-2">
                            <a
                                href="#tools"
                                className="hover:underline duration-300"
                            >
                                Ferramentas{" "}
                                <span className="sm:hidden"> |</span>
                            </a>
                        </li>
                        <li className="my-2">
                            <a
                                href="#projects"
                                className="hover:underline duration-300"
                            >
                                Projetos
                            </a>
                        </li>
                    </ul>
                </div>
            </section>
        </footer>
    );
};

export default Contact;

/* eslint-disable @next/next/no-img-element */
const Contact = () => {
    return (
        <footer
            className="w-full h-[20rem] flex items-center justify-center bg-black"
            id="contact"
        >
            <section className="w-[85rem] flex justify-between items-center">
                <div>
                    <ul>
                        <li className="my-3 hover:scale-105 duration-150">
                            <a
                                href="https://www.linkedin.com/in/gabriel-mesquita-9614782b4/"
                                target="_blank"
                                className="flex gap-2 items-center"
                            >
                                <img
                                    src="/linkedin.svg"
                                    alt="linkedinIcon"
                                    className="w-[2rem] h-[2rem]"
                                />
                                <span className="font-semibold">Linkedin</span>
                            </a>
                        </li>
                        <li className="my-3 hover:scale-105 duration-150">
                            <a
                                href="https://github.com/Hundlee"
                                target="_blank"
                                className="flex gap-2 items-center"
                            >
                                <img
                                    src="/github.svg"
                                    alt="gitHubIcon"
                                    className="w-[2rem] h-[2rem]"
                                />
                                <span className="font-semibold">GitHub</span>
                            </a>
                        </li>
                        <li className="my-3 hover:scale-105 duration-150">
                            <a
                                href="https://wa.me/558594038930"
                                target="_blank"
                                className="flex gap-2 items-center"
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
                <img
                    src="/logo.png"
                    alt="logo"
                    className="w-[15rem] hidden lg:block"
                />
                <div>
                    <ul className="mr-2">
                        <li className="text-xl font-semibold my-2">
                            <a href="#">Inicio</a>
                        </li>
                        <li className="text-xl font-semibold my-2">
                            <a href="#about-me">Sobre mim</a>
                        </li>
                        <li className="text-xl font-semibold my-2">
                            <a href="#recursos">Recursos</a>
                        </li>
                        <li className="text-xl font-semibold my-2">
                            <a href="#projects">Projetos</a>
                        </li>
                    </ul>
                </div>
            </section>
        </footer>
    );
};

export default Contact;

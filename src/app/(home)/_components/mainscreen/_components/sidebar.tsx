/* eslint-disable @next/next/no-img-element */
import { Button } from "@/_components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/_components/ui/sheet";
import { MenuIcon } from "lucide-react";

const Sidebar = () => {
    return (
        <div>
            <Sheet>
                <SheetTrigger asChild>
                    <Button>
                        <MenuIcon />
                    </Button>
                </SheetTrigger>
                <SheetContent className="bg-gray-900 border-none flex flex-col items-center justify-between">
                    <SheetHeader className=" w-full border-b p-6">
                        <SheetTitle className="text-white text-xl ">
                            Menu
                        </SheetTitle>
                    </SheetHeader>
                    <div>
                        <ul className="flex flex-col uppercase w-full">
                            <Button variant="outline" className="mb-2" asChild>
                                <a
                                    href="#about-me"
                                    className="w-72 hover:text-zinc-800 duration-200 ease-in-out font-semibold text-black"
                                >
                                    Sobre mim
                                </a>
                            </Button>
                            <Button variant="outline" className="mb-2" asChild>
                                <a
                                    href="#tools"
                                    className="w-72 hover:text-zinc-800 duration-200 ease-in-out  font-semibold text-black "
                                >
                                    Ferramentas
                                </a>
                            </Button>
                            <Button variant="outline" className="mb-2" asChild>
                                <a
                                    href="#projects"
                                    className="w-72 hover:text-zinc-800 duration-200 ease-in-out  font-semibold text-black"
                                >
                                    Projetos
                                </a>
                            </Button>
                            <Button variant="outline" className="mb-2" asChild>
                                <a
                                    href="#contact"
                                    className="w-72 hover:text-zinc-800 duration-200 ease-in-out  font-semibold text-black"
                                >
                                    Contato
                                </a>
                            </Button>
                        </ul>
                    </div>
                    <div className="w-full flex items-center justify-center border-t border-opacity-5">
                        <ul className="flex flex-row p-5">
                            <li className="my-3 hover:scale-105 duration-150 px-2">
                                <a
                                    href="https://www.linkedin.com/in/gabriel-mesquita-9614782b4/"
                                    target="_blank"
                                    className="flex flex-col gap-2 items-center"
                                >
                                    <img
                                        src="/linkedin.svg"
                                        alt="linkedinIcon"
                                        className="w-[2rem] h-[2rem]"
                                    />
                                    <span className="font-semibold">
                                        Linkedin
                                    </span>
                                </a>
                            </li>
                            <li className="my-3 hover:scale-105 duration-150 px-2">
                                <a
                                    href="https://github.com/Hundlee"
                                    target="_blank"
                                    className="flex flex-col gap-2 items-center "
                                >
                                    <img
                                        src="/github.svg"
                                        alt="gitHubIcon"
                                        className="w-[2rem] h-[2rem]"
                                    />
                                    <span className="font-semibold">
                                        GitHub
                                    </span>
                                </a>
                            </li>
                            <li className="my-3 hover:scale-105 duration-150 px-2">
                                <a
                                    href="https://wa.me/558594038930"
                                    target="_blank"
                                    className="flex flex-col gap-2 items-center"
                                >
                                    <img
                                        src="/whatsapp.svg"
                                        alt="whatsappIcon"
                                        className="w-[2rem] h-[2rem]"
                                    />
                                    <span className="font-semibold">
                                        Whatsapp
                                    </span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </SheetContent>
            </Sheet>
        </div>
    );
};

export default Sidebar;

"use client";

/* eslint-disable @next/next/no-img-element */
import { Button } from "@/_components/ui/button";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/_components/ui/sheet";
import { MenuIcon } from "lucide-react";
import Image from "next/image";

const Header = () => {

    return (
        <header className="w-full h-auto bg-transparent relative">
            <div className="flex flex-row items-center justify-between bg-transparent">
                <Image
                    src={`/logo.png`}
                    alt="logo"
                    width={120}
                    height={120}
                    className="flex items-center justify-center absolute top-0 left-5"
                />

                <div className="md:hidden absolute top-8 right-5">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button>
                                <MenuIcon />
                            </Button>
                        </SheetTrigger>
                        <SheetContent className="bg-gray-900 border-none flex flex-col items-center justify-between">
                            <SheetHeader className="text-left p-5">
                                <SheetTitle className="text-white text-xl">
                                    Menu
                                </SheetTitle>
                            </SheetHeader>
                            <div className="text-center">
                                <ul className="text-xl text-zinc-500 uppercase font-medium p-5 ">
                                    <li>
                                        <a
                                            href="#about-me"
                                            className=" hover:text-zinc-300 duration-200 ease-in-out"
                                        >
                                            Sobre mim
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#tools"
                                            className=" hover:text-zinc-300 duration-200 ease-in-out"
                                        >
                                            Ferramentas
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#projects"
                                            className=" hover:text-zinc-300 duration-200 ease-in-out"
                                        >
                                            Projetos
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#contact"
                                            className=" hover:text-zinc-300 duration-200 ease-in-out"
                                        >
                                            Contato
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <ul className="flex flex-row">
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

                <ul className="hidden text-xl gap-8 text-zinc-500 uppercase font-medium absolute right-10 top-12 md:flex ">
                    <li>
                        <a
                            href="#about-me"
                            className="pl-2 hover:text-zinc-300 duration-200 ease-in-out"
                        >
                            Sobre mim
                        </a>
                    </li>
                    <li>
                        <a
                            href="#tools"
                            className="pl-2 hover:text-zinc-300 duration-200 ease-in-out"
                        >
                            Ferramentas
                        </a>
                    </li>
                    <li>
                        <a
                            href="#projects"
                            className="pl-2 hover:text-zinc-300 duration-200 ease-in-out"
                        >
                            Projetos
                        </a>
                    </li>
                    <li>
                        <a
                            href="#contact"
                            className="pl-2 hover:text-zinc-300 duration-200 ease-in-out"
                        >
                            Contato
                        </a>
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default Header;

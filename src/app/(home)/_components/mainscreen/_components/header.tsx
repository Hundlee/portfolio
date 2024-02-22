"use client";

/* eslint-disable @next/next/no-img-element */

import Image from "next/image";
import { useEffect, useState } from "react";
import Sidebar from "./sidebar";

const Header = () => {
    const [isHeaderVisible, setIsHeaderVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset;

            if (scrollTop === 0) {
                setIsHeaderVisible(true);
            } else {
                setIsHeaderVisible(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`w-full h-auto fixed transition-all ${
                isHeaderVisible ? "top-0" : "-top-full"
            }`}
        >
            <div className="flex flex-row items-center justify-between bg-transparent">
                <Image
                    src={`/logo.png`}
                    alt="logo"
                    width={120}
                    height={120}
                    className="flex items-center justify-center"
                />

                <div className="md:hidden mr-5">
                    <Sidebar />
                </div>

                <ul className="hidden text-xl gap-8 text-zinc-500 uppercase font-medium md:flex mr-5">
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

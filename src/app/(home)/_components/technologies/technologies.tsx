import { Avatar, AvatarFallback, AvatarImage } from "@/_components/ui/avatar";
import { Button } from "@/_components/ui/button";
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/_components/ui/hover-card";
import Image from "next/image";
import { LABELBACKEND, LABELFRONTEND } from "../_constants/label-tech";
import { Inter } from "next/font/google";

const inter = Inter({ weight: "800", subsets: ["latin"] });

const Tecnologies = () => {
    return (
        <div
            className="w-[100vw] mt-10 h-auto flex flex-col items-center justify-center md:h-[55rem] lg:h-[35rem]"
            id="recursos"
        >
            <h1 className="text-3xl mb-10 uppercase">Recursos</h1>
            <div className="flex flex-col gap-5 ">
                <section className="w-[22rem] h-[25rem] border border-solid border-l-purple-50 flex flex-col rounded-xl bg-white gap-2 sm:w-[30rem] sm:h-[30rem] md:w-[45rem] md:h-[22rem] lg:w-[55rem] lg:h-[10rem] xl:w-[65rem] xl:h-[12rem] 2xl:w-[85rem] 2xl:h-[12rem] ">
                    <h2
                        className={`p-3 text-2xl text-black text-center ${inter.className}`}
                    >
                        FrontEnd
                    </h2>
                    <div className="flex justify-center">
                        <article className="grid grid-cols-3 gap-10 mt-5 md:grid-cols-4 lg:flex">
                            {LABELFRONTEND.map((item, index) => (
                                <HoverCard key={index}>
                                    <HoverCardTrigger>
                                        <Button variant="link">
                                            <Image
                                                src={item.url}
                                                width={80}
                                                height={80}
                                                alt={item.alt}
                                                className="mt-5"
                                            />
                                        </Button>
                                    </HoverCardTrigger>
                                    <HoverCardContent className="w-60">
                                        <div className="flex justify-between space-x-4">
                                            <Avatar>
                                                <AvatarImage src={item.url} />
                                                <AvatarFallback>
                                                    {item.alt}
                                                </AvatarFallback>
                                            </Avatar>
                                            <div className="space-y-1">
                                                <h4 className="text-sm font-semibold">
                                                    {item.name}
                                                </h4>
                                                <p className="text-sm">
                                                    {item.description}
                                                </p>
                                            </div>
                                        </div>
                                    </HoverCardContent>
                                </HoverCard>
                            ))}
                        </article>
                    </div>
                </section>

                <section className="w-[22rem] h-[25rem] border border-solid border-l-purple-50 flex flex-col rounded-xl bg-white md:w-[45rem] md:h-[22rem]  lg:w-[55rem] lg:h-[10rem] xl:w-[65rem] xl:h-[12rem] 2xl:w-[85rem] 2xl:h-[12rem] ">
                    <h2
                        className={`p-3 text-2xl text-black font-semibold text-center ${inter.className}`}
                    >
                        Backend
                    </h2>
                    <div className="flex justify-center">
                        <article className="grid grid-cols-3 gap-10 mt-5 lg:grid-cols-6">
                            {LABELBACKEND.map((item, index) => (
                                <HoverCard key={index}>
                                    <HoverCardTrigger>
                                        <Button variant="link">
                                            <Image
                                                src={item.url}
                                                width={80}
                                                height={80}
                                                alt={item.alt}
                                                className="mt-5"
                                            />
                                        </Button>
                                    </HoverCardTrigger>
                                    <HoverCardContent className="w-60">
                                        <div className="flex justify-between space-x-4">
                                            <Avatar>
                                                <AvatarImage src={item.url} />
                                                <AvatarFallback>
                                                    {item.alt}
                                                </AvatarFallback>
                                            </Avatar>
                                            <div className="space-y-1">
                                                <h4 className="text-sm font-semibold">
                                                    {item.name}
                                                </h4>
                                                <p className="text-sm">
                                                    {item.description}
                                                </p>
                                            </div>
                                        </div>
                                    </HoverCardContent>
                                </HoverCard>
                            ))}
                        </article>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Tecnologies;

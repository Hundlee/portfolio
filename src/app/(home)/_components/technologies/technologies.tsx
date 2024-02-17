import { Avatar, AvatarFallback, AvatarImage } from "@/_components/ui/avatar";
import { Button } from "@/_components/ui/button";
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/_components/ui/hover-card";
import Image from "next/image";
import { LABELBACKEND, LABELFRONTEND } from "../_constants/label";
import { Inter } from "next/font/google";

const inter = Inter({ weight: "500", subsets: ["latin"] });

const Tecnologies = () => {
    return (
        <div
            className="w-[100vw] h-[80vh] flex flex-col items-center justify-center"
            id="recursos"
        >
            <h1 className="text-3xl mb-10 uppercase">Recursos</h1>
            <div className="flex gap-5">
                <section className="w-[30vw] h-[45vh] border border-solid border-l-purple-50 flex flex-col rounded-xl bg-white gap-2">
                    <h2
                        className={`p-3 text-2xl text-black font-semibold text-center ${inter.className}`}
                    >
                        FrontEnd
                    </h2>
                    <div className="flex justify-center">
                        <article className="grid grid-cols-3 gap-5 mt-10">
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

                <section className="w-[30vw] h-[45vh] border border-solid border-l-purple-50 flex flex-col rounded-xl bg-white ">
                    <h2
                        className={`p-3 text-2xl text-black font-semibold text-center ${inter.className}`}
                    >
                        Backend
                    </h2>
                    <div className="flex justify-center">
                        <article className="grid grid-cols-3 gap-2 mt-10">
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

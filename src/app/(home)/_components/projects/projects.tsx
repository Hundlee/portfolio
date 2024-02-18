/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { LABELSPROJECTS } from "../_constants/label-projects";

const Projects = () => {
    return (
        <div className="max-w-[70vw] h-[60rem] flex flex-col items-center ">
            <h1 className="text-3xl uppercase">Projetos</h1>

            <div className="mt-20 grid grid-cols-3 gap-5 ">
                {LABELSPROJECTS.map((item, index) => (
                    <div
                        className="w-[27.5rem] h-[22rem] bg-white rounded-xl flex flex-col items-center hover:scale-105 duration-300"
                        key={index}
                    >
                        <img
                            src={item.imageURL}
                            alt={item.alt}
                            width={420}
                            height={200}
                            className="mt-2 rounded-xl"
                        />
                        <div className="w-full">
                            <h1 className="text-black ml-2 mt-4 font-semibold text-2xl">
                                {item.name}
                            </h1>
                            <p className="text-gray-400 ml-2 text-sm">
                                {item.description}
                            </p>
                        </div>
                        <div
                            className="w-full mt-3 flex justify-between p-2 items-center
                 "
                        >
                            <article className="flex gap-2">
                                {item.technologies.map((tec, index) => (
                                    <Image
                                        src={tec}
                                        alt="logo"
                                        width={20}
                                        height={20}
                                        key={index}
                                    />
                                ))}
                            </article>
                            <button
                                className="w-[120px] h-[40px] bg-blue-600 rounded-3xl
                     "
                            >
                                <a
                                    href="https://github.com/Hundlee/portfolio"
                                    target="_blank"
                                >
                                    Ver mais
                                </a>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;

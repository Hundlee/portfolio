import Image from "next/image";
import { LABELSPROJECTS } from "../_constants/label-projects";

const Projects = () => {
    return (
        <div className="w-full h-[60rem] flex flex-col items-center ">
            <h1 className="text-3xl uppercase">Projetos</h1>
            <div className="w-[85rem] mt-20 grid grid-cols-4">
                {LABELSPROJECTS.map((item, index) => (
                    <div
                        className="w-[30rem] h-[23rem] bg-white rounded-xl flex flex-col items-center hover:scale-105 duration-300"
                        key={index}
                    >
                        <Image
                            src="/teste.png"
                            alt="logo"
                            width={460}
                            height={200}
                            className="mt-2 rounded-xl"
                        />
                        <div className="w-full">
                            <h1 className="text-black ml-2 mt-4 font-semibold text-2xl">
                                {item.name}
                            </h1>
                            <p className="text-gray-400 ml-2">
                                {item.description}
                            </p>
                        </div>
                        <div
                            className="w-full mt-3 flex justify-between p-2 items-center
                 "
                        >
                            <article className="flex gap-2">
                                {item.technologies.map((item, index) => (
                                    <Image
                                        src={item}
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

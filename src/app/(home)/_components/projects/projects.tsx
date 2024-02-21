/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { LABELSPROJECTS } from "../_constants/label-projects";

const Projects = () => {
    return (
        <div
            className="w-full h-auto flex flex-col items-center mt-20"
            id="projects"
        >
            <h1 className="text-3xl text-yellow-300 uppercase">Projetos</h1>

            <div className="mt-10 mb-20 flex flex-col gap-10 xl:grid xl:grid-cols-2 2xl:grid-cols-3 2xl:gap-5">
                {LABELSPROJECTS.map((item, index) => (
                    <div
                        className="w-[22rem] h-[19.5rem] bg-white rounded-xl flex flex-col items-center hover:scale-105 duration-300 sm:w-[30rem] sm:h-[23rem] md:w-[45rem] md:h-[30rem] xl:w-[31rem] xl:h-[23rem] 2xl:w-[27.5rem] 2xl:h-[21.5rem]"
                        key={index}
                    >
                        <img
                            src={item.imageURL}
                            alt={item.alt}
                            className="mt-2 rounded-xl w-[340px] max-h-[160px] sm:max-h-[225px] sm:w-[460px] md:w-[700px] md:max-h-[335px] xl:w-[470px] xl:max-h-[225px] 2xl:max-h-[200px] 2xl:w-[420px]"
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
                            <div>
                                {item.deploy && (
                                    <button
                                        className="w-20 h-10 bg-blue-800 rounded-3xl mr-2 hover:opacity-80 duration-200
                                                 "
                                    >
                                        <a href={item.deploy} target="_blank">
                                            Deploy
                                        </a>
                                    </button>
                                )}
                                <button
                                    className="w-20 h-10 bg-gray-900 rounded-3xl hover:opacity-80 duration-200
                     "
                                >
                                    <a href={item.gitUrl} target="_blank">
                                        Github
                                    </a>
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;

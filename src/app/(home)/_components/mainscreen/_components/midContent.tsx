const MidContent = () => {
    return (
        <section className="w-full h-full flex items-center justify-center flex-col">
            <div>
                <div className="flex w-full justify-between">
                    <h2 className="uppercase text-zinc-500 text-sm select-none sm:text-xl md:text-2xl">
                        Olá sou
                    </h2>
                    <div className="border-b-4 border-solid border-yellow-300 w-[65%] mb-2 mr-4 select-none sm:w-[70%] sm:mb-3 md:w-[75%] md:mb-3"></div>
                </div>
                <div className="relative">
                    <h1 className="uppercase text-6xl text-white font-bold select-none tracking-widest sm:text-8xl md:text-9xl">
                        Gabriel
                    </h1>
                    <p className="text-sm uppercase text-yellow-300 absolute right-3 select-none tracking-widest [text-shadow:_0_1px_5px_black] md:text-2xl">
                        Desenvolvedor <br /> fullstack
                    </p>
                </div>
            </div>
        </section>
    );
};

export default MidContent;

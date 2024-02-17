const MidContent = () => {
    return (
        <section className="w-full h-full flex items-center justify-center flex-col">
            <div>
                <div className="flex w-full justify-between">
                    <h2 className="uppercase text-zinc-500 text-2xl select-none">
                        Olá sou
                    </h2>
                    <div className="border-b-4 border-solid border-yellow-300 w-[75%] mb-3 mr-4 select-none"></div>
                </div>
                <div className="relative">
                    <h1 className="uppercase text-9xl text-white font-bold select-none tracking-widest">
                        Gabriel
                    </h1>
                    <p className="text-2xl uppercase text-yellow-300 absolute right-3 select-none tracking-widest [text-shadow:_0_1px_5px_black]">
                        Desenvolvedor <br /> FrontEnd
                    </p>
                </div>
            </div>
        </section>
    );
};

export default MidContent;

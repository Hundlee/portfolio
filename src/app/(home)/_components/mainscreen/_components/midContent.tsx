const MidContent = () => {
    return (
        <div className="flex items-center justify-center">
            <div className="flex flex-col items-center justify-center w-fit">
                <div className="flex w-full justify-between">
                    <h2 className="uppercase text-gray-300 text-xl">Olá sou</h2>
                    <h3 className="text-yellow-300 text-nowrap tracking-[-1rem]">
                        ----------------
                    </h3>
                </div>
                <div className="relative">
                    <h1 className="uppercase text-9xl text-white font-bold">
                        Gabriel
                    </h1>
                    <p className="text-2xl uppercase text-yellow-300 absolute right-0 ">
                        Desenvolvedor <br /> fullstack
                    </p>
                </div>
            </div>
        </div>
    );
};

export default MidContent;

import SocialIcons from "./social-icons";

const MidContent = () => {
    return (
        <section className="w-full h-full flex items-center justify-center flex-col">
            <div>
                <div className="flex w-full justify-between">
                    <h2 className="uppercase text-gray-400 text-2xl select-none">
                        Olá sou
                    </h2>
                    <div className="border-b-4 border-solid border-yellow-300 w-[80%] mb-3 select-none"></div>
                </div>
                <div className="relative">
                    <h1 className="uppercase text-9xl text-white font-bold select-none tracking-widest">
                        Gabriel
                    </h1>
                    <p className="text-2xl uppercase text-yellow-300 absolute right-0 select-none drop-shadow-sm">
                        Desenvolvedor
                    </p>
                </div>
            </div>

            <SocialIcons />
        </section>
    );
};

export default MidContent;

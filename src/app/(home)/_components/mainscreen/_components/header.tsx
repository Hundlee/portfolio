import Image from "next/image";

const Header = () => {
    return (
        <header className="relative">
            <div className="flex flex-row items-center justify-between bg-transparent">
                <Image
                    src={`/logo.png`}
                    alt="logo"
                    width={120}
                    height={120}
                    className="flex items-center justify-center absolute left-6 top-3"
                />
                <ul className="flex flex-row gap-8 text-zinc-500 uppercase font-medium absolute right-10 top-12 ">
                    <li>
                        <a
                            href=""
                            className="pl-2 hover:text-zinc-300 duration-200 ease-in-out"
                        >
                            Sobre mim
                        </a>
                    </li>
                    <li>
                        <a
                            href=""
                            className="pl-2 hover:text-zinc-300 duration-200 ease-in-out"
                        >
                            Projetos
                        </a>
                    </li>
                    <li>
                        <a
                            href=""
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

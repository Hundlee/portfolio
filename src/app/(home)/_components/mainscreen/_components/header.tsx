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
                <ul className="flex flex-row gap-8 text-white uppercase font-sans font-normal absolute right-8 top-12">
                    <li>
                        <a href="" className="p-2">
                            Sobre mim
                        </a>
                    </li>
                    <li>
                        <a href="" className="p-2">
                            Projetos
                        </a>
                    </li>
                    <li>
                        <a href="" className="p-2">
                            Contato
                        </a>
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default Header;

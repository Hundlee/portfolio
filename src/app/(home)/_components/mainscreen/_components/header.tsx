import Image from "next/image";

const Header = () => {
    return (
        <div className="flex flex-row items-center justify-between mx-20 mt-5 bg-transparent">
            <Image
                src={`/logo.png`}
                alt="logo"
                width={100}
                height={100}
                className="flex items-center justify-center"
            />
            <ul className="flex flex-row gap-8 text-white uppercase font-sans font-normal">
                <li>
                    <a href="">Sobre mim</a>
                </li>
                <li>
                    <a href="">Projetos</a>
                </li>
                <li>
                    <a href="">Contato</a>
                </li>
            </ul>
        </div>
    );
};

export default Header;

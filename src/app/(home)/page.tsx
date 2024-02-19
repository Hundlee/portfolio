import AboutMe from "./_components/about-me/about-me";
import MainScreen from "./_components/mainscreen/mainScreen";
import { Poppins } from "next/font/google";
import Tecnologies from "./_components/technologies/technologies";
import Projects from "./_components/projects/projects";
import Contact from "./_components/contact/contact";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function Home() {
    return (
        <main className={poppins.className}>
            <div className="w-full flex flex-col items-center overflow-y-hidden">
                <MainScreen />
                <AboutMe />
                <Tecnologies />
                <Projects />
                <Contact />
            </div>
        </main>
    );
}

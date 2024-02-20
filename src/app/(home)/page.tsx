import AboutMe from "./_components/about-me/about-me";
import MainScreen from "./_components/mainscreen/mainScreen";
import Tools from "./_components/tools/tools";
import Projects from "./_components/projects/projects";
import Contact from "./_components/contact/contact";

export default function Home() {
    return (
        <div className="w-full flex flex-col items-center overflow-y-hidden">
            <MainScreen />
            <AboutMe />
            <Tools />
            <Projects />
            <Contact />
        </div>
    );
}

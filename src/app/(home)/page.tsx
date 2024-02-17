import AboutMe from "./_components/about-me/aboutme";
import MainScreen from "./_components/mainscreen/mainScreen";
import { Poppins } from "next/font/google";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function Home() {
    return (
        <main className={poppins.className}>
            <MainScreen />
            <AboutMe />
        </main>
    );
}

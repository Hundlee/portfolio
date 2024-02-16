import MainScreen from "./_components/mainscreen/mainScreen";
import { Poppins } from "next/font/google";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function Home() {
    return (
        <main className={poppins.className}>
            <div className="flex items-center justify-center w-full h-full">
                <MainScreen />
            </div>
        </main>
    );
}

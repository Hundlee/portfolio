import Header from "./_components/header";
import MidContent from "./_components/midContent";

const MainScreen = () => {
    return (
        <div className="w-[100vw] h-[100vh]  overflow-hidden">
            <Header />
            <MidContent />
        </div>
    );
};

export default MainScreen;

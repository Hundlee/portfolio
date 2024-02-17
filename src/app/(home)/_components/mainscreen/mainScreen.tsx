import Header from "./_components/header";
import MidContent from "./_components/midContent";

const MainScreen = () => {
    return (
        <div className="w-[100vw] h-[100vh] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#474747]">
            <Header />
            <MidContent />
        </div>
    );
};

export default MainScreen;

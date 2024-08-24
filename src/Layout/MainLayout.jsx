import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const MainLayout = () => {
    return (
        <div>
            <Navbar/>
            <div className="min-h-[calc(100vh-100px)]">
            <Outlet/>
            </div>
            <Footer/>
        </div>
    );
};

export default MainLayout;
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { useEffect, useState } from "react";
import { PulseLoader } from "react-spinners";

const MainLayout = () => {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 3000)
    }, [])

    if(loading) {
        return (
            <div className="flex justify-center items-center h-screen bg-gray-800 opacity-75"><PulseLoader color="#ffffff" /></div>
        )
    }
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
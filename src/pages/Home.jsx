import { Helmet } from "react-helmet";
import App from "../App";
import Background from "../components/Background/Background";
import EstateSection from "../components/EstateSection/EstateSection";


const HomePage = () => {
    return (
        <div className="min-h-[calc(100vh-100px)]">
        <Helmet>
        <title>HomeNest | Home</title>
      </Helmet>
            <Background/>
            <App/>
            <EstateSection/>
   </div>
    );
};

export default HomePage;
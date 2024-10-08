import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import { AuthContext } from "../../provider/AuthProvider";
import LoadingSpinner from "../../Shared/LoadingSpinner";

const EstateSection = () => {
  const [cards, setCards] = useState([]);
  const {loading} = useContext(AuthContext)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("./Estate.json");
        const data = await response.json();
        setCards(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();

    // Initialize AOS
    AOS.init({
      duration: 1000, // Animation duration
      easing: 'ease-in-out', // Animation easing
      once: false, // Whether animation should happen only once
    });
  }, []);

  // Define the animations you want to use
  const animations = ["fade-down", "fade-up"];

  if(loading) return <LoadingSpinner/>

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-6 mt-20 sm:mt-36 md:mt-40 lg:mt-56 mx-auto">
      {cards.map((card, index) => (
        <div
          key={card.id}
          data-aos={animations[index % animations.length]} // Alternate animations
          className="flex flex-col bg-transparent text-gray-100 shadow-md rounded-md w-full mx-auto"
        >
          <img
            src={card.image}
            alt={card.estate_title}
            className="object-cover w-full h-36 rounded-t-md"
          />
          <div className="flex flex-col justify-between p-4 h-full">
            <div className="space-y-2">
              <h2 className="text-lg font-semibold tracking-wide">
                {card.estate_title}
              </h2>
              <p className="text-gray-400 text-xs">
                <strong>Location:</strong> {card.location}
              </p>
              <p className="text-gray-400 text-xs">
                <strong>Price:</strong> {card.price}
              </p>
              <p className="text-gray-400 text-xs">
                <strong>Area:</strong> {card.area}
              </p>
              <p className="text-gray-400 text-xs">
                <strong>Status:</strong> {card.status}
              </p>
              <div className="text-gray-400 text-xs">
                <strong>Facilities:</strong>
                <ul className="list-disc list-inside">
                  {card.facilities.map((facility, index) => (
                    <li key={index}>{facility}</li>
                  ))}
                </ul>
              </div>
            </div>
            <button
              type="button"
              className="w-full p-3 mt-4 font-semibold text-white bg-gray-700 rounded-md shadow-sm hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 transition duration-150 ease-in-out"
            >
              <Link to={`/card/${card?.id}`} className="block w-full h-full">
                View Property
              </Link>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EstateSection;

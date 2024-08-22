import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const EstateSection = () => {
  const [cards, setCards] = useState([]);

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
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-6 mt-20 sm:mt-36 md:mt-40 lg:mt-56 mx-auto">
      {cards.map((card) => (
        <div
          key={card.id}
          className="flex flex-col bg-transparent text-gray-100 shadow-md rounded-md w-full  mx-auto"
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
              className="w-full p-2 mt-4 font-semibold tracking-wide rounded-md bg-violet-400 text-gray-900 text-xs"
            >
             <Link to={`/card/${card.id}`}>
             {card.view_property_button}
             </Link>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EstateSection;

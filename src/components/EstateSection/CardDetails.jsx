import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import Banner from "./Banner";
import { Link, useParams } from "react-router-dom";

const CardDetails = () => {
  const [cardDetails, setCardDetails] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/Estate.json");
        const data = await response.json();
        const card = data.find((card) => card.id === id);
        setCardDetails(card);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [id]);

  if (!cardDetails) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  const {
    image,
    estate_title,
    location,
    price,
    area,
    status,
    facilities,
    description,
  } = cardDetails;

  return (
    <div className="min-h-screen bg-gray-100 p-6 lg:p-12">
      <Helmet>
        <title>HomeNest | {estate_title}</title>
      </Helmet>
      <Banner estate={cardDetails} />

      <div className="max-w-7xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="relative">
          <img
            src={image}
            alt={estate_title}
            className="w-full h-64 sm:h-80 lg:h-96 object-cover"
          />
          <div className="absolute inset-0 flex items-end p-6 bg-gradient-to-t from-gray-900 via-transparent to-transparent">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white bg-gray-900 bg-opacity-50 p-4 rounded-md">
              {estate_title}
            </h1>
          </div>
        </div>

        <div className="p-6 lg:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h2 className="text-lg font-semibold text-gray-700 mb-2">Location:</h2>
              <p className="text-gray-600">{location}</p>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-700 mb-2">Price:</h2>
              <p className="text-gray-600">{price}</p>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-700 mb-2">Area:</h2>
              <p className="text-gray-600">{area}</p>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-700 mb-2">Status:</h2>
              <p className="text-gray-600">{status}</p>
            </div>
          </div>

          <div className="mt-6">
            <h2 className="text-lg font-semibold text-gray-700 mb-2">Description:</h2>
            <p className="text-gray-600 mb-6">{description}</p>
          </div>

          <div className="mt-6">
            <h2 className="text-lg font-semibold text-gray-700 mb-2">Facilities:</h2>
            <div className="flex flex-wrap gap-2">
              {facilities.map((facility, index) => (
                <span
                  key={index}
                  className="px-4 py-2 text-sm bg-gray-200 rounded-full text-gray-700"
                >
                  {facility}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-6 flex justify-center">
          <button
  type="button"
  className="w-full p-3 mt-4 font-semibold text-white bg-gray-700 rounded-md shadow-sm hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 transition duration-150 ease-in-out"
>
  <Link to='/contact' className="block w-full h-full">
    View Property
  </Link>
</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;

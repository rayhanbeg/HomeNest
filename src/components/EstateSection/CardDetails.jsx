import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

const CardDetails = () => {
  const [cardDetails, setCardDetails] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/Estate.json");
        const data = await response.json();
        setCardDetails(data[0]); // Display the first card's details as an example
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  if (!cardDetails) {
    return <div>Loading...</div>;
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
    <div className="min-h-screen mt-12 p-4 lg:p-8">
       <Helmet>
        <title>HomeNest | Card/Details</title>
      </Helmet>
      <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-between">
        <div className="bg-base-200 w-full lg:w-[48%] flex items-center justify-center rounded-xl overflow-hidden">
          <img
            src={image}
            alt={estate_title}
            className="w-full h-auto max-h-[300px] md:max-h-[400px] lg:max-h-[512px] object-cover rounded-xl"
          />
        </div>
        <div className="w-full lg:w-[48%] mt-8 lg:mt-0 space-y-6 lg:space-y-8">
          <h1 className="text-3xl lg:text-4xl font-bold">{estate_title}</h1>
          <h5 className="text-lg lg:text-xl font-semibold">Location: {location}</h5>
          <hr />
          <h2 className="text-lg lg:text-xl font-semibold">Price: {price}</h2>
          <hr />
          <h2 className="text-lg lg:text-xl font-semibold">Area: {area}</h2>
          <hr />
          <h2 className="text-lg lg:text-xl font-semibold">Status: {status}</h2>
          <hr />
          <p className="text-base lg:text-lg">
            <span className="font-bold">Description: </span>
            {description}
          </p>
          <div className="flex flex-wrap gap-2">
            <h1 className="text-lg lg:text-xl font-bold">Facilities:</h1>
            {facilities.map((facility, index) => (
              <button
                key={index}
                className="px-3 py-1 text-sm bg-[#f4fcf3] rounded-full text-[#23be0a]">
                {facility}
              </button>
            ))}
          </div>
          <div className="flex gap-4 mt-4">
            <button
              onClick={() => alert("View Property clicked")}
              className="px-6 py-2 bg-violet-500 text-white font-semibold rounded-md hover:bg-violet-600">
              View Property
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;

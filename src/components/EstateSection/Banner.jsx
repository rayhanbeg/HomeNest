import React from 'react';

const Banner = ({ estate }) => {
  return (
    <div
      className="relative my-20 lg:my-12 bg-cover bg-center h-24 md:h-32 lg:h-64 flex items-center justify-center rounded-lg shadow-lg"
      style={{ backgroundImage: `url(${estate?.image})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>

      {/* Banner content */}
      <div className="relative text-center text-white px-4">
        <h1 className="text-lg md:text-3xl lg:text-5xl font-bold mb-2">{estate?.estate_title}</h1>
        <p className="text-lg md:text-xl lg:text-2xl">{estate?.location}</p>
        <p className="text-lg md:text-2xl font-semibold text-green-300">{estate?.price}</p>
      </div>
    </div>
  );
};

export default Banner;

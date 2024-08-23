import React from 'react';

const Banner = ({ estate }) => {
  return (
    <div
      className="relative my-10 bg-cover bg-center h-64 flex items-center justify-center rounded-lg shadow-lg"
      style={{ backgroundImage: `url(${estate?.image})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>

      {/* Banner content */}
      <div className="relative text-center text-white px-4">
        <h1 className="text-4xl font-bold mb-2">{estate?.name}</h1>
        <p className="text-2xl mb-2">{estate?.location}</p>
        <p className="text-xl font-semibold text-green-400">{estate?.price}</p>
      </div>
    </div>
  );
};

export default Banner;

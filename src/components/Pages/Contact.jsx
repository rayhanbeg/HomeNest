import { Helmet } from "react-helmet";
import MapComponent from "../Map/Map";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <>
      <section className="py-12 mt-36">
        <Helmet>
          <title>HomeNest | Contact Us</title>
        </Helmet>
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">
            <div className="space-y-6">
              <h1 className="text-5xl font-extrabold">Get in Touch</h1>
              <p className="text-lg text-gray-600">We’d love to hear from you. Reach out to us using the form or contact details below.</p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-6 h-6 mr-4 text-blue-600"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-lg">Dhaka-1230, Bangladesh</span>
                </div>
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-6 h-6 mr-4 text-blue-600"
                  >
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                  </svg>
                  <span className="text-lg">+8801746982658</span>
                </div>
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-6 h-6 mr-4 text-blue-600"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                  </svg>
                  <span className="text-lg">mdrayhan40301@gmail.com</span>
                </div>
              </div>
            </div>
            <form
              noValidate=""
              className="flex flex-col space-y-6"
            >
              <label className="block">
                <span className="text-lg font-medium">Full Name</span>
                <input
                  type="text"
                  placeholder="Rayhan Rafi"
                  className="block w-full rounded-md border border-gray-300 p-3 mt-1 shadow-sm focus:ring focus:ring-opacity-50"
                  required
                />
              </label>
              <label className="block">
                <span className="text-lg font-medium">Email Address</span>
                <input
                  type="email"
                  placeholder="rafiraihan271@gmail.com"
                  className="block w-full rounded-md border border-gray-300 p-3 mt-1 shadow-sm focus:ring focus:ring-opacity-50"
                  required
                />
              </label>
              <label className="block">
                <span className="text-lg font-medium">Message</span>
                <textarea
                  rows="4"
                  className="block w-full rounded-md border border-gray-300 p-3 mt-1 shadow-sm focus:ring focus:ring-opacity-50"
                  required
                ></textarea>
              </label>
              <button
              type="button"
              className="w-full p-3 mt-4 font-semibold text-white bg-gray-700 rounded-md shadow-sm hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 transition duration-150 ease-in-out"
            >
              <Link to="/" className="block w-full h-full">
                Send Message
              </Link>
            </button>
            </form>
          </div>
        </div>
      </section>
      <MapComponent />
    </>
  );
};

export default Contact;

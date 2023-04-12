import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-gray-900  ">
      <div className="w-full max-w-6xl  mx-auto mb-2">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-5 gap-x-20 py-5 px-5">
         
            <div className="flex justify-center items-center">
              <img className="w-20 h-20 text-center" src="/logo.png" alt="" />
            </div>
            
         
          <div>
            <h2 className="text-white font-extrabold text-2xl">
              Usefull Link
            </h2>
            <ul className="mt-2  text-white ">
              <li>
                {" "}
                <Link to='/'>Home</Link>
              </li>
              <li>
                {" "}
                <Link to="/statistics">Statistics</Link>
              </li>
              <li>
                {" "}
                <Link to ="/applied">Applied Jobs</Link>
              </li>
              <li>
                {" "}
                <Link to="/blog">Blog</Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-white font-extrabold text-2xl ">
              Contact Now
            </h2>
            <ul className="mt-3  text-white">
              <li className="mb-1">
                <Link to="">
                  Dhaka, Bangladesh 
                </Link>
              </li>
              <li className="mb-1">
                <Link to="">
                  +88 01750 000 000 
                </Link>
              </li>
              <li className="mb-1">
                <Link to="">
                  info@gmail.com 
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-white font-extrabold text-2xl ">
              Subscribe
            </h2>
            <p className=" text-white mt-3">
              Subscribe for our latest & Articles.
            </p>

            <form className="mt-2">
              <div className="relative">
                <input
                  type="search"
                  id="search"
                  className="block w-full p-2 pl-3 text-base  text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-amber-500 focus:border-amber-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-amber-500 dark:focus:border-amber-500"
                  placeholder="Email Address"
                  required
                />
                <button
                  type="submit"
                  className="text-white absolute right-0 bottom-0 h-full bg-primary_color1 hover:bg-primary_color2 focus:ring-4 focus:outline-none focus:ring-amber-300 font-medium rounded-lg text-4xl px-4 py-2 dark:bg-amber-600 dark:hover:bg-amber-700 dark:focus:ring-amber-800"
                >
                  <i className="fa-solid fa-paper-plane text-white"></i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

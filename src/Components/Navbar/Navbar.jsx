import React, { useState } from "react";
import { FaBars } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "gallery",
    },
    {
      id: 3,
      link: "style",
    },
    {
      id: 4,
      link: "contact",
    },
  ];
  return (
    <div className="flex justify-between items-center w-full h-16 px-4  bg-white fixed">
      <div>
        <h1 className="text-4xl font-bold ml-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-500">
          Dance App
        </h1>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-black hover:scale-105 duration-200 hover:text-yellow-500"
          >
            <Link to={link} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
      </ul>
      <div className="flex flex-col items-center gap-6 lg:flex-row">
        <button className="bg-gradient-to-r from-orange-400 to-red-400 text-xl text-white px-2.5 py-2 rounded-2xl text-center ">
          Register
        </button>
      </div>

      <div
        onClick={() => setToggle(!toggle)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {toggle ? (
          <FaTimes size={30} className="text-black" />
        ) : (
          <FaBars size={30} className="text-black" />
        )}
      </div>

      {toggle && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-white text-black">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl hover:text-yellow-500"
            >
              <Link
                onClick={() => setToggle(!toggle)}
                to={link}
                smooth
                duration={500}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;

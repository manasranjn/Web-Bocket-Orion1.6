import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div
      className="flex justify-between items-center
    h-16 px-10 bg-gray-600 text-white"
    >
      <h1 className="text-2xl text-green-600">Logo</h1>
      <ul className="flex gap-4">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li onClick={() => navigate("/services")} className="cursor-pointer">
          Services
          {/* <Link to="/services">Services</Link> */}
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <button
        className="px-4 py-2 bg-blue-600 rounded-md cursor-pointer"
        onClick={() => navigate("/login")}
      >
        Login
      </button>
    </div>
  );
};

export default Navbar;

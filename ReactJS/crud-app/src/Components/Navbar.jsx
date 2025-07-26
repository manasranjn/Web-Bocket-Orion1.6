import React from "react";
import { CiCirclePlus } from "react-icons/ci";
import { IoHomeOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between px-6 md:px-10 py-3 items-center bg-slate-600 text-white">
      <Link
        to="/"
        className="bg-blue-600 hover:bg-blue-500 px-4 md:px-6 py-1 md:py-2 text-sm md:text-base rounded-lg cursor-pointer active:scale-95 transition duration-150 flex gap-2 justify-center items-center"
      >
        Home <IoHomeOutline />
      </Link>
      <Link
        to="/create-post"
        className="bg-blue-600 hover:bg-blue-500 px-4 md:px-6 py-1 md:py-2 text-sm md:text-base rounded-lg cursor-pointer active:scale-95 transition duration-150 flex gap-2 justify-center items-center"
      >
        Create Post <CiCirclePlus />
      </Link>
    </div>
  );
};

export default Navbar;

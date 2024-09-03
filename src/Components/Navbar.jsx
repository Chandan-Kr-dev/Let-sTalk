import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

const Navbar = () => {
  const [showdropdown, setshowdropdown] = useState(false);
  return (
    <nav className="flex justify-between py-5 px-32 text-3xl bg-salte-200">
      <ul className="flex justify-center items-center gap-10 ">
        <a href='/' className="cursor-pointer hover:shadow-md hover:bg-slate-200 px-2 py-1 rounded-lg">Home</a>
        <a href="/about" className="cursor-pointer hover:shadow-md hover:bg-slate-200 px-2 py-1 rounded-lg">About</a>
        <a href="/blogs" className="cursor-pointer hover:shadow-md hover:bg-slate-200 px-2 py-1 rounded-lg">Blogs</a>
      </ul>
      <h1 href="/" className="text-6xl font-light tracking-tighter leading-none font-sans cursor-pointer">
        Let's<span className="font-extrabold">TALK</span>
      </h1>
      <div className="flex justify-center items-center gap-3">
        <div className="search flex justify-center items-center border-2 rounded-full p-2">
          <p className="text-4xl">
            <CiSearch />
          </p>
          <input
            className="bg-transparent text-black outline-none px-2 w-44 "
            type="text"
          />
        </div>
        <button className="bg-gradient-to-bl from-blue-400 to-blue-600 px-2 py-1 font-bold shadow-xl text-white rounded-lg">Login</button>
      </div>
    </nav>
  );
};

export default Navbar;

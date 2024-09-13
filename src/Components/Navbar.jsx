import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { RiShutDownLine } from "react-icons/ri";

const Navbar = () => {
  let LoggedIn;
  let Username;

  LoggedIn = window.localStorage.getItem("isLoggedIn");
  Username = window.localStorage.getItem("UserName");

  const signout = () => {
    window.localStorage.removeItem("isLoggedIn");
    window.localStorage.removeItem("UserName");
    window.location.reload();
  };

  return (
    <nav className="flex justify-between py-5 px-32 text-3xl bg-salte-200">
      <ul className="flex justify-center items-center gap-10 ">
        <a
          href="/"
          className="cursor-pointer hover:shadow-md hover:bg-slate-200 px-2 py-1 rounded-lg"
        >
          Home
        </a>
        {/* <a href="/about" className="cursor-pointer hover:shadow-md hover:bg-slate-200 px-2 py-1 rounded-lg">About</a> */}
        <a
          href="/blogs"
          className="cursor-pointer hover:shadow-md hover:bg-slate-200 px-2 py-1 rounded-lg"
        >
          Blogs
        </a>
      </ul>
      <h1
        href="/"
        className="text-6xl font-light tracking-tighter leading-none font-sans cursor-pointer"
      >
        Let's<span className="font-extrabold">TALK</span>
      </h1>
      <div className="flex justify-center items-center gap-3">
       
        {Username && LoggedIn && <h1>Hello! {Username}</h1>}
        {LoggedIn ? (
          <button
            className="bg-gradient-to-bl from-blue-400 to-blue-600 px-2 py-1 font-bold shadow-xl text-white rounded-lg"
            onClick={signout}
          >
            <RiShutDownLine />
          </button>
        ) : (
          <a
            href="/login"
            className="bg-gradient-to-bl from-blue-400 to-blue-600 px-2 py-1 font-bold shadow-xl text-white rounded-lg"
          >
            Login
          </a>
        )}

        
      </div>
    </nav>
  );
};

export default Navbar;

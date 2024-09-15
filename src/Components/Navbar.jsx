import { motion } from "framer-motion";
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
    <motion.nav
      initial={{ scale: 0, y: 50, opacity: 0 }}
      animate={{ scale: 1, y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="flex justify-between sticky top-0 z-[999] py-2 bg-slate-100 px-32 text-3xl "
    >
      <ul className="flex justify-center items-center gap-10 ">
        <a
          href="/"
          className="cursor-pointer hover:shadow-md hover:bg-slate-200 px-2 py-1 rounded-lg"
        >
          Home
        </a>

        <a
          href="/blogs"
          className="cursor-pointer hover:shadow-md hover:bg-slate-200 px-2 py-1 rounded-lg"
        >
          Blogs
        </a>
      </ul>

      <img className="h-20 invert" src="./logo-removebg-preview.png" alt="" />
      <div className="flex justify-center items-center gap-3">
        {Username && LoggedIn && <h1>Hii! {Username}</h1>}
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
    </motion.nav>
  );
};

export default Navbar;

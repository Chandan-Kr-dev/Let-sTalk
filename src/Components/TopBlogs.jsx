import React from "react";
import Card from "./Card";

const TopBlogs = () => {
  return (
    <section className="px-20 bg-gradient-to-br from-slate-100 to-slate-200  w-full h-screen py-10 ">
      <h1 className="text-center text-5xl font-bold">Our Top Blogs</h1>
      <div className="cards flex justify-center items-center gap-4 mt-20">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </section>
  );
};

export default TopBlogs;

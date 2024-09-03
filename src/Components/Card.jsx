import React, { useState } from "react";

const Card = () => {
  return (
    <div className="bg-slate-200 w-[450px] min-h-[600px] p-5 rounded-lg shadow-lg shadow-black hover:-translate-y-5 cursor-pointer transition ease-linear">
      <img
        className="rounded-lg h-[60%] w-full bg-cover bg-center"
        src="https://forestwoodfolkart.wordpress.com/wp-content/uploads/2017/08/rebel-computer-e1506488769124.jpg?w=825"
        alt=""
      />
      <h1 className="text-center text-2xl font-bold ">
        Bloggers – How Fast is Your Site?
      </h1>

      <p className="font-medium tracking-wide  mt-5">
        <span className="font-light ">August 3 ,2024-</span>It takes time to
        read blog posts and keep up with all the lovely bloggers who visit
        blogs. Readers want information and are impatient. They don’t appreciate
        rambling, which I can easily do.
      </p>
      <div className="flex flex-col mt-5 gap-10">
        <a href="#" className="  py-1 rounded-lg font-semibold">
          Read More...
        </a>
        <a href="#">Comments..</a>
      </div>
    </div>
  );
};

export default Card;

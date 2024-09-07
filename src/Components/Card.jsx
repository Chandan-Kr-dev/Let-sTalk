import React, { useState } from "react";

const Card = (props) => {

  

  return (
    <div className="bg-slate-200 w-[450px] min-h-[600px] p-5 rounded-lg shadow-lg shadow-black hover:-translate-y-5 cursor-pointer transition ease-linear">
      <img
        className="rounded-lg h-[60%] w-full bg-cover bg-center"
        src={props.img}
        alt=""
      />
      <h1 className="text-center text-2xl font-bold ">
        {props.title}
      </h1>

      <p className="font-medium tracking-wide  mt-5">
        <span className="font-light ">{props.date}-</span><span>{props.message}</span>
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

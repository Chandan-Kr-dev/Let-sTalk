import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Card = (props) => {
  const navigate = useNavigate();

  const specificData = (id) => {
    // e.preventDefault()
    // setblogId(id);
    try {
      axios
        .post(`${import.meta.env.VITE_DEV_URL}api/blog/${id}`)
        .then((response) => {
          console.log(response);
          navigate(`/blog/${id}`);
        })
        .catch((error) => console.error("Error ", error));
    } catch (error) {
      console.error("Error ", error);
    }
  };

  return (
    <div className="flex flex-col justify-between  bg-slate-200 w-[450px] min-h-[600px] p-5 rounded-lg shadow-lg shadow-black hover:-translate-y-5 cursor-pointer transition ease-linear">
      <div>
        <img
          className="rounded-lg  w-full bg-cover object-contain"
          src={props.img}
          alt=""
        />
        <h1 className="text-center text-2xl font-bold ">{props.title}</h1>

        <p className="font-medium tracking-wide  mt-5">
          <span className="font-light ">{props.date} - </span>
          {props.message}
        </p>
      </div>

      <div className="flex flex-col mt-5 gap-2">
        <button className="text-left font-bold" onClick={() => specificData(props.id)}>
          Read More....
        </button>

        <a href="/blogs">Comments..</a>
      </div>
    </div>
  );
};

export default Card;

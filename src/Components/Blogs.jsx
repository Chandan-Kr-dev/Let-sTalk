import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import TitledBlog from "./TitledBlog";
import moment from 'moment';

const Blogs = () => {
  const [showdesc, setshowdesc] = useState(false);
  // const [blogId, setblogId] = useState("");
  const navigate=useNavigate()

  const [blogs, setblogs] = useState([]);

  function truncateString(str, len) {
    return str.length > len ? str.substr(0, len - 3) + "..." : str;
  }

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_DEV_URL}api/blogs`
      );
      // console.log(response.data);
      setblogs(response.data);
      
    } catch (error) {
      console.error("Error ", error);
    }
  };

  const specificData = (id) => {
    // e.preventDefault()
    // setblogId(id);
    try {
      axios
        .post(`${import.meta.env.VITE_DEV_URL}api/blog/${id}`)
        .then((response) => {
          // console.log(response)
          navigate(`/blog/${id}`)

        })
        .catch((error) => console.error("Error ", error));
    } catch (error) {
      console.error("Error ", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  
 
  function formatCreatedAt(createdAt) {
    return moment(createdAt).format('YYYY-MM-DD');
  }

  return (
    <main className="bg-gradient-to-br from-slate-100 to-slate-200 min-h-screen px-10 py-10 space-y-4">
      <h1 className="text-center text-5xl mr-24  mb-10 font-bold">BLOGS</h1>
      <div className="blogss space-y-4">
        {blogs.map((blogg, i) => (
          
          <div
            key={i}
            className="blogs mx-32 p-8 border-black rounded-xl border-2 "
          >
            <div className="w-full min-h-96  grid grid-cols-4 ">
              <div className="left  w-full  ">
                <img
                  className="h-96 w-full bg-cover  rounded-lg  object-contain"
                  src={blogg.Image}
                  alt=""
                />
              </div>
              <div className="right  w-full col-span-2  p-10">
                <h1 className="text-3xl mb-3">
                  Name wrote :<span className="font-bold"> {blogg.Name}</span>{" "}
                </h1>
                <h1 className="text-4xl font-bold">
                  {truncateString(blogg.BlogTitle, 50)}
                </h1>
                <p className="text-2xl mt-5">
                  <span className="text-gray-500">{formatCreatedAt(blogg.createdAt)} - </span>
                  {truncateString(blogg.blog, 200)}
                </p>
                <button
                  onClick={() => specificData(blogg._id)}
                  className="text-2xl border-b-2 border-blue-400 mt-3 "
                >
                  Read more ...
                </button>

                {showdesc && (
                  <div className="description">
                    <p className="text-xl mt-3 ">{blogg.blog}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Blogs;

import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import TitledBlog from "./TitledBlog";
import moment from 'moment';
import { motion, stagger } from "framer-motion";


const Blogs = () => {
  const left={
    hidden:{
      opacity:0,
      x:-1000,
      // scale:0

    },
    show:{
      opacity:1,
      x:0,
      // scale:1
      
    },
    
  }
  const [showdesc, setshowdesc] = useState(false);
  // const [blogId, setblogId] = useState("");
  const navigate=useNavigate()

  const [blogs, setblogs] = useState([]);
  const [blogcomments, setblogcomments] = useState([])

  function truncateString(str, len) {
    return str.length > len ? str.substr(0, len - 3) + "..." : str;
  }

  const fetchComments=async()=>{
    try {
      await axios.get(`${import.meta.env.VITE_DEV_URL}api/getComments`)
      .then(res=>{
        // console.log(res.data)
        setblogcomments(res.data)
         })
    } catch (error) {
      console.error("Server Error",error )
    }
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
    fetchComments()
  }, []);

  
 
  function formatCreatedAt(createdAt) {
    return moment(createdAt).format('YYYY-MM-DD');
  }

  return (
    <main className="bg-gradient-to-br from-slate-100 to-slate-200 min-h-screen md:px-10 px-2 py-10 space-y-4">
      <h1 className="text-center md:text-5xl text-2xl  md:mr-24  mb-10 font-bold">BLOGS</h1>
      <div className="blogss space-y-4">
        {blogs.map((blogg, i) => (
          
          <motion.div
          variants={left}
          initial="hidden"
          animate="show"
          transition={{delay:0.9}}
            key={i}
            className="blogs md:mx-32 p-8 border-black rounded-xl border-2 "
          >
            <div className="w-full min-h-96  md:grid md:grid-cols-4 ">
              <div className="left  w-full  ">
                <img
                  className="md:h-96 w-full bg-cover  rounded-lg  object-contain"
                  src={blogg.Image}
                  alt=""
                />
              </div>
              <div className="right  w-full col-span-2  md:p-10 p-3">
                <h1 className="md:text-3xl text-sm mb-3">
                  Name wrote :<span className="font-bold"> {blogg.Name}</span>{" "}
                </h1>
                <h1 className="md:text-4xl text-xl text-center font-bold">
                  {truncateString(blogg.BlogTitle, 50)}
                </h1>
                <p className="md:text-2xl text-xs mt-5">
                  <span className="text-gray-500">{formatCreatedAt(blogg.createdAt)} - </span>
                  {truncateString(blogg.blog, 200)}
                </p>
                <button
                  onClick={() => specificData(blogg._id)}
                  className="md:text-2xl text-xs border-b-2 border-blue-400 mt-3 "
                >
                  Read more ...
                </button>

                
              </div>
              <div className="right  relative ">
                <span className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] underline md:text-2xl text-xs ">{blogcomments.filter(comment => comment.BlogId === blogg._id).length} Comments</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </main>
  );
};

export default Blogs;

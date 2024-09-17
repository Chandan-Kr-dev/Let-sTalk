import React, { useEffect, useRef, useState } from "react";
import Card from "./Card";
import axios from "axios";
import moment from "moment";
import { useInView } from "framer-motion";

const TopBlogs = () => {
  const [first, setfirst] = useState(false)
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: true 

  });

  function truncateString(str, len) {
    return str.length > len ? str.substr(0, len - 3) + "..." : str;
  }

  const [blogs, setblogs] = useState([]);
  const fetchdata = async () => {
    await axios.get(`${import.meta.env.VITE_DEV_URL}api/blogs`).then((res) => {
      // console.log(res.data);
      setblogs(res.data);
      // console.log(blogs);
      // console.log(blogs.length);
    });
  };

  

  useEffect(() => {
    fetchdata();
  }, []);

  function formatCreatedAt(createdAt) {
    return moment(createdAt).format("YYYY-MM-DD");
  }

  return (
    <section
      ref={ref}
      className="md:px-20 bg-gradient-to-br from-slate-100 to-slate-200  w-full min-h-screen md:py-10 py-5 "
    >
      <div
        style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? "1" : "0",
          transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.4s ",
        }}
        className="p-10 m-10 "
      >
        <h1 className="text-center md:text-5xl text-2xl font-bold font-Roboto">
          Our Top Blogs
        </h1>
        <div className="cards flex md:flex-row flex-col justify-center items-center gap-4 mt-20 ">
          {blogs.map((blogg, i) => (
            <div
            style={{
              transform: isInView ? "none" : "translateY(100px)",
              opacity: isInView ? "1" : "0",
              transition: "all 0.8s cubic-bezier(0.17, 0.55, 0.55, 1) 1s ",
              scale:isInView?"1":"0",
              
            }}
            
            key={i} hidden={i > 2}>
              <Card
                
                img={blogg.Image}
                title={blogg.BlogTitle}
                message={truncateString(blogg.blog, 300)}
                date={formatCreatedAt(blogg.createdAt)}
                id={blogg._id}
              />
            </div>
          ))}
          {/* <Card/> */}
        </div>
      </div>
    </section>
  );
};

export default TopBlogs;

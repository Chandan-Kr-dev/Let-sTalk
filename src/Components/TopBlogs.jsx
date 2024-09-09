import React, { useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";

const TopBlogs = () => {
  function truncateString(str, len) {
    return str.length > len ? str.substr(0, len - 3) + "..." : str;
  }

  
  const [blogs, setblogs] = useState([]);
  const fetchdata = async () => {
    await axios.get(`${import.meta.env.VITE_DEV_URL}api/blogs`).then((res) => {
      console.log(res.data);
      setblogs(res.data);
      console.log(blogs);
      console.log(blogs.length);
    });
  };

  useEffect(() => {
    fetchdata();
  }, []);
  return (
    <section className="px-20 bg-gradient-to-br from-slate-100 to-slate-200  w-full h-screen py-10 ">
      <h1 className="text-center text-5xl font-bold">Our Top Blogs</h1>
      <div className="cards flex justify-center items-center gap-4 mt-20">
        {blogs.map((blogg, i) => (
          <Card
            img={blogg.Image}
            title={blogg.BlogTitle}
            message={truncateString(blogg.blog,300)}
            date={blogg.createdAt}
          />
        ))}
        {/* <Card/> */}
      </div>
    </section>
  );
};

export default TopBlogs;

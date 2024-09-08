import axios from "axios";
import React, { useEffect, useState } from "react";


const Blogs = () => {
  
  
  const [showdesc, setshowdesc] = useState(false);

  
  const [blogs, setblogs] = useState([]);

  function truncateString(str, len) {
    return str.length > len ? str.substr(0, len - 3) + "..." : str;
  }

  const fetchData = async () => {
    
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_DEV_URL}api/blogs`
      );
      console.log(response.data);
      setblogs(response.data);
      console.log(blogs);
    } catch (error) {
      console.error("Error ", error);
    }
  };

  useEffect(()=>{
    fetchData()
  },[])


  
  // const showcommentbyId=async()=>{
  //   setshowcomment(!showcomment);
  //   const res=await axios.get(`${import.meta.env.VITE_DEV_URL}api/comments/${blogs._id}`)
  //   console.log(res)
  // }

  

  return (
    <main className="bg-gradient-to-br from-slate-100 to-slate-200 min-h-screen px-10 py-10 space-y-4">
      <h1 className="text-center text-5xl mr-24  mb-10 font-bold">BLOGS</h1>
      <div className="blogss space-y-4">
        {blogs.map((blogg, i) => (
          <div key={blogg.id} className="blogs mx-32 p-8 border-black rounded-xl border-2 ">
            <div className="w-full min-h-96  grid grid-cols-4 ">
              <div className="left  w-full  ">
                <img
                  className="h-96 w-full bg-cover  rounded-lg  object-contain"
                  src={blogg.Image}
                  alt=""
                />
              </div>
              <div className="right  w-full col-span-2  p-10">
                <h1 className="text-3xl mb-3">Name wrote : </h1>
                <h1 className="text-4xl font-bold">
                  {blogg.Title}
                </h1>
                <p className="text-2xl mt-5">
                  <span>{blogg.createdAt} - </span>
                  {truncateString(blogg.blog,200)}
                </p>
                <button
                  onClick={ ()=>setshowdesc(!showdesc)}

                  className="text-2xl border-b-2 border-blue-400 mt-3 "
                >
                  Read more ...
                </button>
                {/* <a className="text-2xl border-b-2 border-blue-400 mt-3" href={`/blogs/${blogg.id}`}>Read More...</a> */}
                {showdesc && (
                  <div className="description">
                    <p className="text-xl mt-3 ">
                      {blogg.blog}
                    </p>
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

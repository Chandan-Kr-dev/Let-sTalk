import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

const Landing = () => {
    const [hoverblog, sethoverblog] = useState(false)
  return (
    <section className="h-[80vh] w-full bg-gradient-to-br from-slate-100 to-slate-200 px-20">
      <div className="flex justify-center items-center h-[80%] w-full ">
        <div className="left  h-full w-[50%] py-52">
          <h1 className="text-8xl ">Let's Talk </h1>
          <p className="text-2xl mt-10 tracking-tight w-[80%]">
            Dive into a world of diverse topics, from technology to travel and
            everything in between. Discover new ideas, learn something new, and
            find inspiration in every post.
          </p>
          <a href="#AddBlog" onMouseOver={()=>sethoverblog(true)} onMouseLeave={()=>sethoverblog(false)} className="w-96  hover:shadow-md hover:text-2xl transition-all rounded-lg  flex justify-center items-center gap-2 bg-gradient-to-tr from-yellow-100 to-yellow-200 px-2 py-1 mt-20 text-xl">
            Create your first Blog Now{" "}
            <span>
              <FaArrowRight className={hoverblog && " rotate-90 transition-all text-4xl" } />
            </span>
          </a>
        </div>
        <div className="right  h-full w-[45%] ">
            <img className="m-52 p-8 rounded-lg shadow-xl hover:-translate-y-3 transition-all bg-white" src="https://i.pinimg.com/564x/3b/5f/05/3b5f05dcad776621dbe9f227d81518d6.jpg" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Landing;

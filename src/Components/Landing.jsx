import { easeInOut, easeOut, motion, stagger } from "framer-motion";
import LocomotiveScroll from "locomotive-scroll";

import React, { useEffect, useRef, useState } from "react";
import { FaArrowRight } from "react-icons/fa";


const Landing = () => {
  const scroll=new LocomotiveScroll()

  const container = {
    hidden: { 
      opacity:0,
      x:-100,
     },
    show: {
        opacity:1,
        x:0,
        transition: { duration:0.6,delay:0.9 ,stagger:1,easeOut }
    }
};

  const [hoverblog, sethoverblog] = useState(false);
  return (
    <section className="h-[100vh] w-full bg-gradient-to-br from-slate-100 to-slate-200 px-20">
      <div className="flex md:flex-row flex-col md:justify-center md:items-center h-[80%] w-full ">
      <motion.div
        initial={{y:200,opacity:0,scale:1.5}}
        animate={{y:0,opacity:1,scale:1}}
        transition={{duration:0.5,delay:0.9,ease:easeInOut}}
        
        className="right  h-full  md:w-[45%] w-full p-8  ">
          <img
            
            className="landimg md:m-52 p-8 rounded-lg shadow-xl hover:-translate-y-3 transition-all bg-white"
            src="https://i.pinimg.com/564x/3b/5f/05/3b5f05dcad776621dbe9f227d81518d6.jpg"
            alt=""
          />
        </motion.div>
        <div
          variants={container}
          initial="hidden"
          animate="show"
          
          className="left  h-full md:w-[50%] md:py-52 w-[100%] py-10 "
        >
          <motion.h1 variants={container}
          initial="hidden"
          animate="show"
           className=" md:text-8xl text-4xl font-Space_Grotesk tracking-tighter">
            Let's Talk{" "}
          </motion.h1>
          <motion.p variants={container}
          initial="hidden"
          animate="show" className="about md:text-2xl text-sm mt-10 tracking-tight md:w-[80%] w-full">
            Dive into a world of diverse topics, from technology to travel and
            everything in between. Discover new ideas, learn something new, and
            find inspiration in every post.
          </motion.p>
          <motion.button
          initial={{x:-1000,opacity:0}}
          animate={{x:0,opacity:1}}
          transition={{duration:0.9,delay:0.2,ease:[0.61, 1, 0.88, 1]}}
            
            onClick={()=>scroll.scrollTo("#AddBlog")}
            
            className="btnblog md:w-96  hover:shadow-md hover:text-2xl transition-all rounded-lg  flex justify-center items-center gap-2 bg-gradient-to-tr from-yellow-100 to-yellow-200 px-2 py-1 mt-20 text-xs md:text-xl"
          >
            Create your first Blog Now{" "}
            <span>
              <FaArrowRight
                className={hoverblog && " rotate-90 transition-all text-4xl"}
              />
            </span>
          </motion.button>
        </div>
        
      </div>
    </section>
  );
};

export default Landing;

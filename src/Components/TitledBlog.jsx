import axios from "axios";
import React, { useEffect, useState } from "react";
import { CiCirclePlus } from "react-icons/ci";
import { useParams } from "react-router-dom";
import moment from "moment";
import Swal from "sweetalert2";
import { motion } from "framer-motion";
import { easeInOut } from "framer-motion/dom";
import { split } from "postcss/lib/list";


const TitledBlog = () => {
  const { id } = useParams();
  
  const [addcomment, setaddcomment] = useState(false);
  const [showcomment, setshowcomment] = useState(false);
  const [Name, setName] = useState("");
  const [comment, setComment] = useState("");

  const [cmtcnt, setcmtcnt] = useState(0)

  const [blogcomments, setblogcomments] = useState([])

  const [blogs, setblogs] = useState([]);

  function truncateString(str, len) {
    return str.length > len ? str.substr(0, len - 3) + "..." : str;
  }

  const fetchData = () => {
    try {
      axios
        .post(`${import.meta.env.VITE_DEV_URL}api/blog/${id}`)
        .then((res) => {
          // console.log(res.data);
          setblogs(res.data);
        })
        .catch((error) => console.error("Error ", error));
    } catch (error) {
      console.error("Error ", error);
    }
  };

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

  useEffect(() => {
    fetchData();
    fetchComments()
  }, []);

  useEffect(() => {
    if (blogcomments.length > 0) { // Check if comments are available
      const count = blogcomments.filter(comment => comment.BlogId === id).length;
      setcmtcnt(count);
    }
  }, [blogcomments, id])

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${import.meta.env.VITE_DEV_URL}api/comments`, {
        BlogId: id,
        Name,
        comment,

      })

      .then((res) => {
        console.log(res.data);
        setName("")
        setComment("")
        Swal.fire({
          title: "Thank You!!",
          text: "Comment added Successfully",
          icon: "success"
        });
        window.location.reload()
      })
      .catch((error) => console.error("Error ", error));
  };


  
  const formattedDate = moment(blogs.createdAt).format("YYYY-MM-DD");

  return (
    <main className="bg-gradient-to-br from-slate-100 to-slate-200 md:px-80 px-5  ">
      <div className=" space-y-10  pt-20">
        <motion.h1 initial={{y:-1000,opacity:0}} animate={{y:0,opacity:1}} transition={{duration:0.9,ease:easeInOut}} className="text-center font-bold md:text-5xl text-2xl font-Space_Grotesk">{blogs.BlogTitle}</motion.h1>
        <motion.div
          initial={{x:-1000,opacity:0}}
          animate={{x:0,opacity:1}}
          transition={{delay:0.3,duration:0.5,easeInOut}}
        >
        <img
          className="object-contain rounded-lg md:w-[800px] w-[300px] md:ml-56 "
          src={blogs.Image}
          alt=""
        />
        </motion.div>
        
        <motion.p initial={{x:1000,opacity:0}} animate={{x:0,opacity:1}} transition={{delay:0.8,duration:0.4,easeInOut}} className="md:text-2xl ">
          <span className=" text-gray-500">{formattedDate} - </span>
          {blogs.blog}
        </motion.p>
      </div>
      <div className="addcomment  w-full py-[20%] px-[10%] ">
        <div className="md:text-xl flex items-center justify-center text-blue-600">
         <span className="text-blue-500 px-3">{cmtcnt}</span> 
         <button onClick={() => setshowcomment(!showcomment)}>Comment</button>
          <button
            onClick={() => setaddcomment(!addcomment)}
            
            className=" text-white font-bold px-2 py-1 hover:rotate-180 transition-all rounded-lg"
          >
            <CiCirclePlus className="md:text-5xl text-xl font-bold text-black" />
          </button>
        </div>
        {addcomment && (
          <div className="addcommentbelow">
            <form onSubmit={handleSubmit} className="space-y-4" action="#">
              <div className="input grid grid-cols-3">
                <label className="md:text-xl text-sm font-semibold" htmlFor="">
                  Name :{" "}
                </label>
                <input
                  className="col-span-2 rounded-lg outline-none px-2 py-1 md:text-xl text-sm"
                  type="text"
                  name="Name"
                  value={Name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="input grid grid-cols-3">
                <label className="md:text-xl text-sm font-semibold" htmlFor="">
                  Comment :{" "}
                </label>
                <textarea
                  className="col-span-2 rounded-lg outline-none  px-2 py-1 md:text-xl text-sm"
                  rows={5}
                  cols={20}
                  id=""
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  name="comment"
                ></textarea>
              </div>
              <div className="flex justify-center">
                <button
                  className=" bg-gradient-to-bl from-blue-500 to-pink-300 px-2 py-1 md:text-xl text-sm font-bold text-white rounded-lg"
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        )}

        <div className="comments">
          {blogcomments.map((com)=>(

              <div key={com._id} hidden={com.BlogId !==id}  className="comment mt-3 border-b-2 border-black pb-2">
                <div className="left flex gap-10 items-center">

              <h1 className="uppercase bold md:text-2xl  ">
                
                {com.Name} <span className="lowercase">wrote</span>
              </h1>
              <h3 className="text-gray-600">({moment(com.createdAt).format('YYYY-MM-DD')})</h3>
                </div>
              <p>
                <span className="text-zinc-500 font-bold md:text-xl text-xs">{truncateString(com.Comment,100)}</span>{" "}
                
              </p>
            </div>
          ))}
          
          
        </div>
      </div>
    </main>
  );
};

export default TitledBlog;

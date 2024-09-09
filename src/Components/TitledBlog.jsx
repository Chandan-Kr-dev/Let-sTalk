import axios from "axios";
import React, { useEffect, useState } from "react";
import { CiCirclePlus } from "react-icons/ci";
import { useParams } from "react-router-dom";
import moment from "moment";

const TitledBlog = () => {
  const { id } = useParams();
  
  const [addcomment, setaddcomment] = useState(false);
  const [showcomment, setshowcomment] = useState(false);
  const [Name, setName] = useState("");
  const [comment, setComment] = useState("");

  const [blogcomments, setblogcomments] = useState([])

  const [blogs, setblogs] = useState([]);

  const fetchData = () => {
    try {
      axios
        .post(`${import.meta.env.VITE_DEV_URL}api/blog/${id}`)
        .then((res) => {
          console.log(res.data);
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
        console.log(res.data)
        setblogcomments(res.data)
      })
    } catch (error) {
      
    }
  }

  useEffect(() => {
    fetchData();
    fetchComments()
  }, []);

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
      })
      .catch((error) => console.error("Error ", error));
  };

  const formattedDate = moment(blogs.createdAt).format("YYYY-MM-DD");

  return (
    <main className="bg-gradient-to-br from-slate-100 to-slate-200 px-80  ">
      <div className=" space-y-10  pt-20">
        <h1 className="text-center font-bold text-5xl">{blogs.BlogTitle}</h1>
        <img
          className="object-contain rounded-lg w-[800px] ml-56"
          src={blogs.Image}
          alt=""
        />
        <p className="text-2xl">
          <span className=" text-gray-500">{formattedDate} - </span>
          {blogs.blog}
        </p>
      </div>
      <div className="addcomment  w-full py-[20%] px-[10%] ">
        <div className="text-xl flex items-center justify-center text-blue-600">
          <button onClick={() => setshowcomment(!showcomment)}>Comment</button>
          <button
            onClick={() => setaddcomment(!addcomment)}
            className=" text-white font-bold px-2 py-1 hover:rotate-180 transition-all rounded-lg"
          >
            <CiCirclePlus className="text-5xl font-bold text-black" />
          </button>
        </div>
        {addcomment && (
          <div className="addcommentbelow">
            <form onSubmit={handleSubmit} className="space-y-4" action="#">
              <div className="input grid grid-cols-3">
                <label className="text-xl font-semibold" htmlFor="">
                  Name :{" "}
                </label>
                <input
                  className="col-span-2 rounded-lg outline-none px-2 py-1 text-xl"
                  type="text"
                  name="Name"
                  value={Name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="input grid grid-cols-3">
                <label className="text-xl font-semibold" htmlFor="">
                  Comment :{" "}
                </label>
                <textarea
                  className="col-span-2 rounded-lg outline-none  px-2 py-1 text-xl"
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
                  className=" bg-gradient-to-bl from-blue-500 to-pink-300 px-2 py-1 text-xl font-bold text-white rounded-lg"
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
              <h1 className="">
                <span className="text-xl font-bold text-blue-500">Name : </span>
                {com.Name}
              </h1>
              <p>
                <span className="text-red-600 font-bold text-xl">Comment :</span>{" "}
                {com.Comment}
              </p>
            </div>
          ))}
          
          
        </div>
      </div>
    </main>
  );
};

export default TitledBlog;

import axios from "axios";
import { useInView } from "framer-motion";
import React, { useRef, useState } from "react";
import Swal from "sweetalert2";

const AddBlog = () => {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [image, setimage] = useState(null);
  const [imageurl, setimageurl] = useState("");
  const [Title, setTitle] = useState("");
  const [blog, setBlog] = useState("");
  const [uploading, setuploading] = useState(false)

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const uploadImage = async (e) => {
    setuploading(true)
    e.preventDefault();
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "myCloud");
    data.append("cloud_name", "dcn17cw7n");
    try {
      if (image === null) {
        return alert("Please upload an image");
      }
      const res = await axios.post(
        "https://api.cloudinary.com/v1_1/dcn17cw7n/image/upload",
        data
      );

      setimageurl(res.data.url);
      //   console.log(res.data.url);
      // Toast.success()
      alert("image uploaded successfully");
      setuploading(false)
    } catch (error) {
      console.error("An error occurred while uploading",error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      axios
        .post(`${import.meta.env.VITE_DEV_URL}api/addblogs`, {
          Name,
          Email,
          imageurl,
          Title,
          blog,
        })
        .then((response) => {
          
          Swal.fire({
            title: "Thank You!!",
          text: "Blog added Successfully",
          icon: "success"
          })
          setName("");
          setEmail("");
          setBlog("");
          setTitle("");
          setimage(null);
          setimageurl("");
          
        });
    } catch (error) {
      console.error(error);
    }
  };
  // console.log(imageurl)
  return (
    <section
      ref={ref}
      className="bg-gradient-to-br from-slate-100 to-slate-200 min-h-screen w-full "
    >
      <div
        style={{
          transform: isInView ? "none" : "translateX(200px)",
          opacity: isInView ? "1" : "0",
          transition: "all 1s cubic-bezier(0.65, 0, 0.35, 1) 0.4s ",
        }}
        className="w-full min-h-screen md:px-20 px-5 py-10 relative"
      >
        <h1 className="text-center md:text-5xl  text-xs font-bold">Add A Blog</h1>
        <form
          style={{
            
            scale: isInView ? "1" : "0",
            opacity: isInView ? "1" : "0",
            transition: "all 1s cubic-bezier(0.83, 0, 0.17, 1) 0.8s",
          }}
          className="bg-gray-50 shadow-md shadow-black md:p-10 p-4 md:w-[900px] w-[400px] space-y-5 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] rounded-lg"
          action=""
        >
          <div className="input grid grid-cols-3">
            <label className="md:text-4xl text-xl " htmlFor="">
              Name :{" "}
            </label>
            <input
              className="md:text-2xl text-xs  md:px-3 md:py-2 col-span-2 rounded-lg outline-none  shadow-md"
              type="text"
              name="Name"
              value={Name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="input grid grid-cols-3">
            <label className="md:text-4xl text-xl" htmlFor="">
              Email :{" "}
            </label>
            <input
              value={Email}
              onChange={(e) => setEmail(e.target.value)}
              className="md:text-2xl text-xs px-3 py-2 col-span-2 rounded-lg outline-none shadow-md"
              type="email"
              name="Email"
            />
          </div>
          <div className="input grid grid-cols-3">
            <label className="md:text-4xl text-xl" htmlFor="">
              Image :{" "}
            </label>
            <input
              onChange={(e) => setimage(e.target.files[0])}
              className="md:text-xl text-[10px]  rounded-lg outline-none "
              type="file"
              name="image"
              id="file-upload"
            />
            <button
              onClick={uploadImage}
              disabled={uploading}
              className="bg-blue-600 text-xs  text-white rounded-lg  font-bold shadow-md"
            >
              {uploading ?(<span>Uploading</span>):(<span>Upload</span>)}
            
            </button>
          </div>
          <div className="input grid grid-cols-3">
            <label className="md:text-4xl text-xl" htmlFor="">
              Blog Title :{" "}
            </label>
            <input
              value={Title}
              onChange={(e) => setTitle(e.target.value)}
              className="md:text-2xl text-xs px-3 py-2 col-span-2 rounded-lg outline-none shadow-md"
              type="text"
              name="Title"
            />
          </div>
          <div className="input grid grid-cols-3">
            <label className="md:text-4xl text-xl" htmlFor="">
              Blog :{" "}
            </label>
            <textarea
              value={blog}
              onChange={(e) => setBlog(e.target.value)}
              rows={10}
              cols={20}
              className="md:text-2xl text-xs px-3 py-2 col-span-2 rounded-lg outline-none shadow-md"
              type="text"
              name="blog"
            />
          </div>
          <button
            onClick={handleSubmit}
            type="submit"
            disabled={uploading}
            className="bg-gradient-to-tr from-blue-400 to-blue-900 text-white px-2 py-1 md:text-2xl text-xs rounded-lg font-semibold translate-x-[150px] md:translate-x-[400px]"
          >
            {uploading?(<span>Uploading Image</span>):(<span>Add Post</span>)}
            
          </button>
        </form>
      </div>
    </section>
  );
};

export default AddBlog;

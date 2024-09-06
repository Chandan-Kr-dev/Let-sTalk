import axios from "axios";
import React, { useState } from "react";

const AddBlog = () => {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [image, setimage] = useState(null);
  const [imageurl, setimageurl] = useState("");
  const [Title, setTitle] = useState("");
  const [blog, setBlog] = useState("");
  

  const uploadImage = async (e) => {
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
    } catch (error) {
      console.error("An error occurred while uploading");
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
          console.log(response.data);
        });
    } catch (error) {
      console.error(error);
    }
  };
  // console.log(imageurl)
  return (
    <div className="bg-gradient-to-br from-slate-100 to-slate-200  w-full h-screen px-20 py-10 relative">
      <h1 className="text-center text-5xl font-bold">Add A Blog</h1>
      <form
        className="bg-gradient-to-br from-zinc-100 to-zinc-300 shadow-md shadow-black p-10 w-[900px] space-y-5 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] rounded-lg"
        action=""
      >
        <div className="input grid grid-cols-3">
          <label htmlFor="">Name : </label>
          <input
            className="text-2xl px-3 py-2 col-span-2 rounded-lg outline-none"
            type="text"
            name="Name"
            value={Name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="input grid grid-cols-3">
          <label className="text-4xl" htmlFor="">
            Email :{" "}
          </label>
          <input
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
            className="text-2xl px-3 py-2 col-span-2 rounded-lg outline-none"
            type="email"
            name="Email"
          />
        </div>
        <div className="input grid grid-cols-3">
          <label className="text-4xl" htmlFor="">
            Image :{" "}
          </label>
          <input
            onChange={(e) => setimage(e.target.files[0])}
            className="text-xl rounded-lg outline-none"
            type="file"
            name="image"
            id="file-upload"
          />
          <button
            onClick={uploadImage}
            className="bg-gray-200 text-black font-bold shadow-md"
          >
            Upload
          </button>
        </div>
        <div className="input grid grid-cols-3">
          <label className="text-4xl" htmlFor="">
            Blog Title :{" "}
          </label>
          <input
            value={Title}
            onChange={(e) => setTitle(e.target.value)}
            className="text-2xl px-3 py-2 col-span-2 rounded-lg outline-none"
            type="text"
            name="Title"
          />
        </div>
        <div className="input grid grid-cols-3">
          <label className="text-4xl" htmlFor="">
            Blog :{" "}
          </label>
          <textarea
            value={blog}
            onChange={(e) => setBlog(e.target.value)}
            rows={10}
            cols={20}
            className="text-2xl px-3 py-2 col-span-2 rounded-lg outline-none"
            type="text"
            name="blog"
          />
        </div>
        <button
          onClick={handleSubmit}
          type="submit"
          className="bg-gradient-to-tr from-blue-400 to-blue-900 text-white px-2 py-1 text-2xl rounded-lg font-semibold translate-x-[400px]"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddBlog;

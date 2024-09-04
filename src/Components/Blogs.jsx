import React, { useState } from "react";
import { CiCirclePlus } from "react-icons/ci";

const Blogs = () => {
  const [addcomment, setaddcomment] = useState(false);
  const [showcomment, setshowcomment] = useState(false)
  const [showdesc, setshowdesc] = useState(false)
  return (
    <main className="bg-gradient-to-br from-slate-100 to-slate-200 min-h-screen px-10 py-10 space-y-4">
      <h1 className="text-center text-5xl mr-24  mb-10 font-bold">
        BLOGS
      </h1>
      <div className="blogs mx-32 p-8 border-black rounded-xl border-2 ">
        <div className="w-full min-h-96  grid grid-cols-4 ">
          <div className="left   w-full  ">
            <img
              className="h-96 w-full bg-cover  rounded-lg"
              src="https://forestwoodfolkart.wordpress.com/wp-content/uploads/2017/08/rebel-computer-e1506488769124.jpg?w=825"
              alt=""
            />
          </div>
          <div className="right  w-full col-span-2  p-10">
            <h1 className="text-3xl mb-3">Name wrote : </h1>
            <h1 className="text-4xl font-bold">Bloggers – How Fast is Your Site?</h1>
            <p className="text-2xl mt-5">
              22-22-22 : - People are busy. I get that. So am I. It takes time to read blog
              posts and keep up with all the lovely bloggers who visit blogs.
              Readers want information and are impatient. They don’t appreciate
              rambling, which I can easily do. Apparently people skim articles
              with their eyes following an F shape! How interesting is that?
            </p>
            <button onClick={()=>setshowdesc(!showdesc)} className="text-2xl border-b-2 border-blue-400 mt-3 ">Read more ...</button>
            {showdesc && <div className="description">
              <p className="text-xl mt-3 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam vel non fugit voluptates id soluta adipisci ratione. Sit facere tempora perferendis quia vero eos consequatur ratione repellat. Error laudantium numquam debitis optio culpa aliquid impedit sapiente incidunt sunt enim iste harum doloremque doloribus molestias consequuntur, rem consequatur facilis accusantium dolorem illo tempore eius. Blanditiis dicta adipisci, culpa recusandae pariatur officia facere animi asperiores, doloremque expedita omnis cum rem! Non accusantium facilis, numquam deleniti alias perferendis exercitationem expedita unde corrupti quisquam error perspiciatis hic, minima repudiandae! Ab excepturi dolores molestias repudiandae neque aperiam non mollitia, hic laudantium deleniti quisquam, beatae culpa?</p>
              </div>}
            
          </div>
          <div className="addcomment  w-full py-[20%] px-[10%] ">
            <div className="text-xl flex items-center justify-center text-blue-600">
              <button onClick={()=>setshowcomment(!showcomment)}>Comment</button>
              <button
                onClick={() => setaddcomment(!addcomment)}
                className=" text-white font-bold px-2 py-1 hover:rotate-180 transition-all rounded-lg"
              >
                <CiCirclePlus className="text-5xl font-bold text-black" />
              </button>
            </div>
            {addcomment && (
              <div className="addcommentbelow">
                <form className="space-y-4" action="#">
                  <div className="input grid grid-cols-3">
                    <label className="text-xl font-semibold" htmlFor="">
                      Name :{" "}
                    </label>
                    <input
                      className="col-span-2 rounded-lg outline-none px-2 py-1 text-xl"
                      type="text"
                    />
                  </div>
                  <div className="input grid grid-cols-3">
                    <label className="text-xl font-semibold" htmlFor="">
                      Comment :{" "}
                    </label>
                    <textarea
                      className="col-span-2 rounded-lg outline-none  px-2 py-1 text-xl"
                      name=""
                      rows={5}
                      cols={20}
                      id=""
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
            {showcomment && <div className="comments">
              <div className="comment mt-3 border-b-2 border-black pb-2">
                <h1 className=""><span className="text-xl font-bold text-blue-500">Name : </span>Chanadan</h1>
                <p><span className="text-red-600 font-bold text-xl">Comment :</span>  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt praesentium eius ipsa minima nostrum voluptas quibusdam! Veritatis possimus neque blanditiis?</p>
              </div>
              <div className="comment mt-3 border-b-2 border-black pb-2 ">
                <h1 className=""><span className="text-xl font-bold text-blue-500">Name : </span>Chanadan</h1>
                <p><span className="text-red-600 font-bold text-xl">Comment :</span>  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt praesentium eius ipsa minima nostrum voluptas quibusdam! Veritatis possimus neque blanditiis?</p>
              </div>
              <div className="comment mt-3 border-b-2 border-black pb-2 ">
                <h1 className=""><span className="text-xl font-bold text-blue-500">Name : </span>Chanadan</h1>
                <p><span className="text-red-600 font-bold text-xl">Comment :</span>  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt praesentium eius ipsa minima nostrum voluptas quibusdam! Veritatis possimus neque blanditiis?</p>
              </div>
               
            </div>}
            
          </div>
        </div>
      </div>
      <div className="blogs mx-32 p-8 border-black rounded-xl border-2 ">
        <div className="w-full min-h-96  grid grid-cols-4 ">
          <div className="left   w-full  ">
            <img
              className="h-96 w-full bg-cover  rounded-lg"
              src="https://forestwoodfolkart.wordpress.com/wp-content/uploads/2017/08/rebel-computer-e1506488769124.jpg?w=825"
              alt=""
            />
          </div>
          <div className="right  w-full col-span-2  p-10">
            <h1 className="text-3xl mb-3">Name wrote : </h1>
            <h1 className="text-4xl font-bold">Bloggers – How Fast is Your Site?</h1>
            <p className="text-2xl mt-5">
              22-22-22 : - People are busy. I get that. So am I. It takes time to read blog
              posts and keep up with all the lovely bloggers who visit blogs.
              Readers want information and are impatient. They don’t appreciate
              rambling, which I can easily do. Apparently people skim articles
              with their eyes following an F shape! How interesting is that?
            </p>
            <button onClick={()=>setshowdesc(!showdesc)} className="text-2xl border-b-2 border-blue-400 mt-3 ">Read more ...</button>
            {showdesc && <div className="description">
              <p className="text-xl mt-3 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam vel non fugit voluptates id soluta adipisci ratione. Sit facere tempora perferendis quia vero eos consequatur ratione repellat. Error laudantium numquam debitis optio culpa aliquid impedit sapiente incidunt sunt enim iste harum doloremque doloribus molestias consequuntur, rem consequatur facilis accusantium dolorem illo tempore eius. Blanditiis dicta adipisci, culpa recusandae pariatur officia facere animi asperiores, doloremque expedita omnis cum rem! Non accusantium facilis, numquam deleniti alias perferendis exercitationem expedita unde corrupti quisquam error perspiciatis hic, minima repudiandae! Ab excepturi dolores molestias repudiandae neque aperiam non mollitia, hic laudantium deleniti quisquam, beatae culpa?</p>
              </div>}
            
          </div>
          <div className="addcomment  w-full py-[20%] px-[10%] ">
            <div className="text-xl flex items-center justify-center text-blue-600">
              <button onClick={()=>setshowcomment(!showcomment)}>Comment</button>
              <button
                onClick={() => setaddcomment(!addcomment)}
                className=" text-white font-bold px-2 py-1 hover:rotate-180 transition-all rounded-lg"
              >
                <CiCirclePlus className="text-5xl font-bold text-black" />
              </button>
            </div>
            {addcomment && (
              <div className="addcommentbelow">
                <form className="space-y-4" action="#">
                  <div className="input grid grid-cols-3">
                    <label className="text-xl font-semibold" htmlFor="">
                      Name :{" "}
                    </label>
                    <input
                      className="col-span-2 rounded-lg outline-none px-2 py-1 text-xl"
                      type="text"
                    />
                  </div>
                  <div className="input grid grid-cols-3">
                    <label className="text-xl font-semibold" htmlFor="">
                      Comment :{" "}
                    </label>
                    <textarea
                      className="col-span-2 rounded-lg outline-none  px-2 py-1 text-xl"
                      name=""
                      rows={5}
                      cols={20}
                      id=""
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
            {showcomment && <div className="comments">
              <div className="comment mt-3 border-b-2 border-black pb-2">
                <h1 className=""><span className="text-xl font-bold text-blue-500">Name : </span>Chanadan</h1>
                <p><span className="text-red-600 font-bold text-xl">Comment :</span>  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt praesentium eius ipsa minima nostrum voluptas quibusdam! Veritatis possimus neque blanditiis?</p>
              </div>
              <div className="comment mt-3 border-b-2 border-black pb-2 ">
                <h1 className=""><span className="text-xl font-bold text-blue-500">Name : </span>Chanadan</h1>
                <p><span className="text-red-600 font-bold text-xl">Comment :</span>  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt praesentium eius ipsa minima nostrum voluptas quibusdam! Veritatis possimus neque blanditiis?</p>
              </div>
              <div className="comment mt-3 border-b-2 border-black pb-2 ">
                <h1 className=""><span className="text-xl font-bold text-blue-500">Name : </span>Chanadan</h1>
                <p><span className="text-red-600 font-bold text-xl">Comment :</span>  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt praesentium eius ipsa minima nostrum voluptas quibusdam! Veritatis possimus neque blanditiis?</p>
              </div>
               
            </div>}
            
          </div>
        </div>
      </div>
    </main>
  );
};

export default Blogs;

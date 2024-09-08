import React, { useState } from 'react'
import { CiCirclePlus } from "react-icons/ci";


const TitledBlog = ({blogs}) => {
    const [addcomment, setaddcomment] = useState(false);
    const [showcomment, setshowcomment] = useState(false);
    const [Name, setName] = useState("")
  const [Comment, setComment] = useState("")

  return (
    <main className='bg-gradient-to-br from-slate-100 to-slate-200 px-80  '>
        <div className=' space-y-10  pt-20'>
        <h1 className='text-center font-bold text-5xl'>{blogs.title}</h1>
        <img className='object-contain rounded-lg w-[800px] ml-56' src="https://imageio.forbes.com/blogs-images/robertadams/files/2017/03/worlds-top-10-most-successful-blogs-1200x800.jpg?format=jpg&width=1440" alt="" />
        <p>
            {blogs.blog}
        </p>
        </div>
         <div className="addcomment  w-full py-[20%] px-[10%] ">
                <div className="text-xl flex items-center justify-center text-blue-600">
                  <button onClick={() => setshowcomment(!showcomment)}>
                    Comment
                  </button>
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
                          name="Name"
                          value={Name}
                          onChange={(e)=>setName(e.target.value)}
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
                          value={Comment}
                          onChange={(e)=>setComment(e.target.value)}
                          name="Comment"

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
                {showcomment && (
                  <div className="comments">
                    <div className="comment mt-3 border-b-2 border-black pb-2">
                      <h1 className="">
                        <span className="text-xl font-bold text-blue-500">
                          Name :{" "}
                        </span>
                        Chanadan
                      </h1>
                      <p>
                        <span className="text-red-600 font-bold text-xl">
                          Comment :
                        </span>{" "}
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Incidunt praesentium eius ipsa minima nostrum
                        voluptas quibusdam! Veritatis possimus neque blanditiis?
                      </p>
                    </div>
                    <div className="comment mt-3 border-b-2 border-black pb-2 ">
                      <h1 className="">
                        <span className="text-xl font-bold text-blue-500">
                          Name :{" "}
                        </span>
                        Chanadan
                      </h1>
                      <p>
                        <span className="text-red-600 font-bold text-xl">
                          Comment :
                        </span>{" "}
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Incidunt praesentium eius ipsa minima nostrum
                        voluptas quibusdam! Veritatis possimus neque blanditiis?
                      </p>
                    </div>
                    <div className="comment mt-3 border-b-2 border-black pb-2 ">
                      <h1 className="">
                        <span className="text-xl font-bold text-blue-500">
                          Name :{" "}
                        </span>
                        Chanadan
                      </h1>
                      <p>
                        <span className="text-red-600 font-bold text-xl">
                          Comment :
                        </span>{" "}
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Incidunt praesentium eius ipsa minima nostrum
                        voluptas quibusdam! Veritatis possimus neque blanditiis?
                      </p>
                    </div>
                  </div>
                )}
              </div> 
        
    </main>
  )
}

export default TitledBlog
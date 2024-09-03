import React from 'react'

const AddBlog = () => {
  return (
    <div className='bg-gradient-to-br from-slate-100 to-slate-200  w-full h-screen px-20 py-10 relative'>
        <h1 className='text-center text-5xl font-bold'>Add A Blog</h1>
        <form className='bg-gradient-to-br from-zinc-100 to-zinc-300 shadow-md shadow-black p-10 w-[900px] space-y-5 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] rounded-lg' action="">
            <div className="input grid grid-cols-3">
                <label className='text-4xl' htmlFor="">Name : </label>
                <input className='text-2xl px-3 py-2 col-span-2 rounded-lg outline-none' type="text" name="" id="" />
            </div>
            <div className="input grid grid-cols-3">
                <label className='text-4xl' htmlFor="">Email : </label>
                <input className='text-2xl px-3 py-2 col-span-2 rounded-lg outline-none' type="email" name="" id="" />
            </div>
            <div className="input grid grid-cols-3">
                <label className='text-4xl' htmlFor="">Image : </label>
                <input className='text-xl rounded-lg outline-none' type="file" name="" id="" />
            </div>
            <div className="input grid grid-cols-3">
                <label className='text-4xl' htmlFor="">Blog Title : </label>
                <input className='text-2xl px-3 py-2 col-span-2 rounded-lg outline-none' type="text" name="" id="" />
            </div>
            <div className="input grid grid-cols-3">
                <label className='text-4xl' htmlFor="">Blog : </label>
                <textarea rows={10} cols={20} className='text-2xl px-3 py-2 col-span-2 rounded-lg outline-none' type="text" name="" id="" />
            </div>
            <button type='submit' className='bg-gradient-to-tr from-blue-400 to-blue-900 text-white px-2 py-1 text-2xl rounded-lg font-semibold translate-x-[400px]'>Submit</button>
        </form>

    </div>
  )
}

export default AddBlog
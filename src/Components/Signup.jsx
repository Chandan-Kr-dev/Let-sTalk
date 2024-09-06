import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
    const navigate=useNavigate()

    const [UserName, setUserName] = useState("")
    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")

    const handleSubmit=(e)=>{
        e.preventDefault()
        axios.post(`${import.meta.env.VITE_DEV_URL}api/signup`,{UserName,Email,Password})
        .then((response)=>{
            if(response.data=="User created"){
                alert("User created Successfully")
                // window.localStorage.removeItem("UserName")
                // window.localStorage.removeItem("isLoggedIn")
                window.localStorage.setItem("UserName",UserName)
                window.localStorage.setItem("isLoggedIn",true)
                navigate("/")
            }
            console.log(response)
        })
        .catch((error)=>console.error(error))
    }

  return (
    <main className="bg-gradient-to-br from-slate-100 to-slate-200 px-20 ">
      <div className="loginpage w-full h-[80vh] px-96 overflow-hidden">
        <div className="form bg-gradient-to-br from-zinc-100 to-zinc-300 shadow-md shadow-black p-10 w-[900px] space-y-5 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] rounded-lg">
          <form onSubmit={handleSubmit} className=" space-y-5" action="">
            <div className="input grid grid-cols-3">
              <label className="text-4xl" htmlFor="">
                UserName :{" "}
              </label>
              <input
                className="text-2xl px-3 py-2 col-span-2 rounded-lg outline-none"
                type="text"
                name='UserName'
                value={UserName}
                onChange={(e)=>setUserName(e.target.value)}
                required
              />
            </div>
            <div className="input grid grid-cols-3">
              <label className="text-4xl" htmlFor="">
                Email :{" "}
              </label>
              <input
                className="text-2xl px-3 py-2 col-span-2 rounded-lg outline-none"
                type="email"
                name="Email"
            
                value={Email}
                onChange={(e)=>setEmail(e.target.value)}
                required

              />
            </div>
            <div className="input grid grid-cols-3">
              <label className="text-4xl" htmlFor="">
                Password :{" "}
              </label>
              <input
                className="text-2xl px-3 py-2 col-span-2 rounded-lg outline-none"
                type="password"
                name="Password"
                value={Password}
                onChange={(e)=>setPassword(e.target.value)}
                required
              
              />
            </div>

            <button
              type="submit"
              className="bg-gradient-to-tr from-blue-400 to-blue-900 text-white px-2 py-1 text-2xl rounded-lg font-semibold translate-x-[400px]"
            >
              Register
            </button>
          </form>
          <hr />
          <p>Already Registered? <a className="border-b-[1px] border-blue-700 text-blue-600" href="/login">login</a></p>
        </div>
      </div>
    </main>
  )
}

export default Signup
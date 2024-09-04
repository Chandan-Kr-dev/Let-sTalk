import React from "react";

const Login = () => {
  return (
    <main className="bg-gradient-to-br from-slate-100 to-slate-200 px-20 ">
      <div className="loginpage w-full h-[80vh] px-96 overflow-hidden">
        <div className="form bg-gradient-to-br from-zinc-100 to-zinc-300 shadow-md shadow-black p-10 w-[900px] space-y-5 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] rounded-lg">
          <form className=" space-y-5" action="">
            
            <div className="input grid grid-cols-3">
              <label className="text-4xl" htmlFor="">
                Email :{" "}
              </label>
              <input
                className="text-2xl px-3 py-2 col-span-2 rounded-lg outline-none"
                type="email"
                name=""
                id=""
              />
            </div>
            <div className="input grid grid-cols-3">
              <label className="text-4xl" htmlFor="">
                Password :{" "}
              </label>
              <input
                className="text-2xl px-3 py-2 col-span-2 rounded-lg outline-none"
                type="password"
                name=""
                id=""
              />
            </div>

            <button
              type="submit"
              className="bg-gradient-to-tr from-blue-400 to-blue-900 text-white px-2 py-1 text-2xl rounded-lg font-semibold translate-x-[400px]"
            >
              Login
            </button>
          </form>
          <hr />
          <p>Don't have an account ? <a className="border-b-[1px] border-blue-700 text-blue-600" href="/signup">Signup</a></p>
        </div>
      </div>
    </main>
  );
};

export default Login;

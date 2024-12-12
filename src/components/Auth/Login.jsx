import React, { useState } from "react";

const Login = ({ HandleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    HandleLogin(email, password)

    setEmail("");
    setPassword("");
  };

  return (
    <div className=" h-screen w-screen  flex justify-center items-center bg-black ">
      <div className=" border-emerald-400 rounded-3xl p-20 border  ">
        <form
          onSubmit={(e) => {
            handleLogin(e);
          }}
          className="flex flex-col gap-4 w-[350px]
          "
        >
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="  outline-none text-white px-5 py-3 rounded-full bg-transparent border border-emerald-400 placeholder:text-gray-400 "
            type="email"
            placeholder="Enter Your Email"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className=" outline-none text-white px-5 py-3 rounded-full bg-transparent border border-emerald-400 placeholder:text-gray-400 "
            type="password"
            placeholder="Enter Your password"
          />
          <button className=" bg-emerald-400 text-white px-6 py-2 font-semibold rounded-full ">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

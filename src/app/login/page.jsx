"use client";
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function page() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const router = useRouter();
  const login = async (event) => {
    event.preventDefault();
    console.log(user);
    try {
      const res = await axios.post("/api/login", user);
      if (res.data.success) {
        router.push("/dashboard");
      } else {
        toast("Invalid email or password");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <ToastContainer />
      <form
        onSubmit={login}
        className="bg-[#182237] p-[50px] rounded-xl w-[500px] h-[500px] flex flex-col justify-center space-y-5"
      >
        <p className="text-2xl text-center font-bold tracking-widest">Login</p>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter email"
          className="bg-[#151c2c] p-[30px] rounded-md border-2 border-[#2e374a] text-white"
          value={user.email}
          onChange={(e) => {
            setUser({ ...user, email: e.target.value });
          }}
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Enter password"
          className="bg-[#151c2c] p-[30px] rounded-md border-2 border-[#2e374a] text-white"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
        <button className="bg-teal-500 p-[30px] rounded-md text-white text-[20px]">
          Login
        </button>
      </form>
    </div>
  );
}

export default page;

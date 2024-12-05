import React from "react";
import { MdOutlinePlayCircle, MdLogin } from "react-icons/md";

function RightBar() {
  return (
    <div>
      <div className="w-full h-auto bg-[#182237] relative rounded-lg">
        <img
          src="/astronaut.jfif"
          alt=""
          className="absolute h-[100%] w-[100%] opacity-20 z-10"
        />
        <div className="p-5 z-50">
          <h2 className="font-semibold">🔥 Available Now</h2>
          <p className="mt-5 font-bold text-lg">
            How to use the new version of admin dashboard ?{" "}
          </p>
          <p className="text-[#d3d5dc] text-sm my-3">
            Takes 4 minutes to learn
          </p>
          <p className="text-[12px] text-[#b7bac1]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            illo nesciunt enim aliquid nostrum reiciendis consectetur quae
            accusantium nemo maxime?
          </p>
          <button className="mt-5 bg-blue-800 py-1 px-2 flex items-center justify-center rounded-md cursor-pointer z-50">
            <MdOutlinePlayCircle className="mr-1" />
            Watch
          </button>
        </div>
      </div>
      <div className="mt-5 w-full h-auto bg-gradient-to-b from-[#182237] to-[#253352] rounded-lg p-5">
        <h2 className="font-semibold">🚀 Coming soon</h2>
        <p className="mt-5 font-bold text-lg">
          New server actions are available, pertial pre-rendering is coming up!
        </p>
        <p className="text-[#d3d5dc] text-sm my-3">Boost your productivity!</p>
        <p className="text-[12px] text-[#b7bac1]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
          illo nesciunt enim aliquid nostrum reiciendis consectetur quae
          accusantium nemo maxime?
        </p>
        <button className="mt-5 bg-blue-800 py-1 px-2 flex items-center justify-center rounded-md cursor-pointer z-50">
          <MdLogin className="mr-1" />
          Learn
        </button>
      </div>
    </div>
  );
}

export default RightBar;

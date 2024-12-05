import React from "react";
import Sidebar from "../ui/dashboard/sidebar/sidebar";
import Navbar from "../ui/dashboard/navbar/navbar";
import Footer from "../ui/dashboard/footer/footer";

function Layout({ children }) {
  return (
    <div className="h-screen">
      <div className="grid grid-cols-5 h-full">
        <div className="bg-[#182237] p-5 fixed h-full w-[20%]">
          <Sidebar />
        </div>
        <div className="col-span-4 ml-[25%] w-full">
          <Navbar />
          {children}
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Layout;

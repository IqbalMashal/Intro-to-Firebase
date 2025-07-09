"use client";
import React from "react";
function Footer() {
  return (
    <footer className="w-full bg-blue-50 border-t-2 border-blue-500 shadow-md shadow-blue-300 mt-10 py-6">
      <div className=" p-4 flex justify-center items-center flex-col md:flex-row">
        <div className="text-blue-900 font-semibold text-center md:text-left">
          © {new Date().getFullYear()} Bookify — All rights reserved
        </div>
      </div>
    </footer>
  );
}

export default Footer;

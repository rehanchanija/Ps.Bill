import Link from "next/link";
import React, { useEffect, useState } from "react";

const Navbar = () => {

  
  return (
    <header className="text-gray-600 body-font  ">
      <div className="container mx-auto flex flex-wrap p-5  flex-col md:flex-row items-center">
        <Link
          href="/"
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
        >
          
          <span className="ml-3 text-2xl">Bill It</span>
        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link href="" className="mr-5 hover:text-gray-900">
            About Us
          </Link>
          <Link href="" className="mr-5 hover:text-gray-900">
            Contact Us
          </Link>
        
            
              <Link href="" className="mr-5 hover:text-gray-900">
                Login
              </Link>

              <Link href="/" className="mx-5 hover:text-gray-900">
                Sign Up
              </Link>
            
            {/* <button className="capitalize "  onClick={ ()=>{
logout('bhai')}}>

   {username}</button> */}
          
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

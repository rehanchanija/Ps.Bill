import Link from "next/link";
import React,{useEffect, useState}   from "react";

const Navbar = () => {
const [token,settoken] = useState()
const [username,setusername] = useState()

   useEffect(() => {
  

    const tokyo = localStorage.getItem("token")

    const toy = localStorage.getItem ("userdata")

    const userdata= JSON.parse(toy)
    if(userdata){

// ? /if jgh isko bhi use kr skte hain login ka data hai yield
      console.log(userdata.name)

      settoken(tokyo)

    setusername(userdata.name)
    // setusername(userdata.name)
    // login ki jghn name dikhane ke liye
    }


  }, )
  return (
    
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link
          href="/"
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
          <span className="ml-3 text-xl">Tailblocks</span>
        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link href="/about" className="mr-5 hover:text-gray-900">
            About Us
          </Link>
          <Link href="/contact" className="mr-5 hover:text-gray-900">
            Contact Us
          </Link>
{
  token ? <h1 className="capitalize ">

    {username}
  </h1>
    : (
  <div>
    <Link
  href="/login" className="mr-5 hover:text-gray-900">
  Login
 </Link>

          <Link href="/register" className="mx-5 hover:text-gray-900">
              Sign Up
          </Link>
    </div>
          )
}
       
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

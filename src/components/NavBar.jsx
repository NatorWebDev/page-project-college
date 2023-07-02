import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="w-full h-96 shadow-xl  px-16 flex items-center ">
      <div className="w-64 h-64 rounded-full flex place-center overflow-hidden">
        <img src="logo.png" alt="logo" className="w-full h-full" />
      </div>
      <ul className="flex flex-[2]  mx-24">
        <li className="ml-16 hover:text-primary transition-all duration-100 text-lg flex-[1]">
          <Link to="/categories">Categories</Link>
        </li>
        <li className="ml-16 hover:text-primary transition-all duration-100 text-lg flex-[1]">
          <Link to="/Explore">Explore</Link>
        </li>
        <li className="flex items-center flex-[5]">
          <input type="text" placeholder="Search" className="shadow outline-none rounded-2xl p-4 px-8 w-full" />
        </li>
      </ul>

      <Link to='/create' className="w-64 h-64 bg-primary rounded-xl flex text-white items-center justify-center mr-16"></Link>
      <Link to='/profile' className="w-64 h-64 rounded-full flex place-center overflow-hidden">
        <img src="Profile.jpg" alt="profile" className="w-full h-full object-cover " />
      </Link>
    </nav>
  );
}

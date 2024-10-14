import { useContext, useState } from "react";
import { AppContext } from ".";

export const Navbar = function () {
    const {theme,toggleTheme,icon} =useContext(AppContext);
    console.log(icon)
  return <div className="navbar">
    <i className="fa-brands fa-react"></i>
    <input type="text" placeholder="Search"/>
    <a>Learn</a>
    <a>Reference</a>
    <a>Community</a>
    <a>Blog</a>
    <i className={`${icon} fa-moon`} onClick={toggleTheme}></i>
  </div>;
};

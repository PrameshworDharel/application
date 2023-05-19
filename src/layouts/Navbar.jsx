import React from "react";
import{Link} from "react-router-dom";

const Navbar = () => {
  return(
    <nav className="flex justify-center bg-slate-400">
     
      <ul className="gap-20 text-2xl flex justify-between">
        <li>
          <Link to="/" >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/about" >
            About
          </Link>
        </li>
        <li>
          <Link to="/blogs" >Blog
          </Link>
        </li>
        <li>
          <Link to="/hooks" >Hooks
          </Link>
        </li>
        <li>
          <Link to="/login" >Login
          </Link>
        </li>
      </ul>
    </nav>
  )
};

export default Navbar;
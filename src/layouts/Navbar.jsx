import React from "react";
import{Link} from "react-router-dom";

const Navbar = () => {
  return(
    <nav className="navbar">
     
      <ul className="nav-lists">
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
      </ul>
    </nav>
  )
};

export default Navbar;
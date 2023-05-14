
import './App.css';
import { Routes, Route, Link } from "react-router-dom";

import Home from './components/Home'
import Blog from './components/Blogs'
import About from './components/About'


function App() {
  return (
    <>
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
     <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/about" element={<About />} />
     <Route path="/blogs" element={<Blog/>} />
   </Routes>
</>
  );
}

export default App;

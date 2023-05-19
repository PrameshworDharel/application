
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from './components/Home'
import Blog from './components/Blogs'
import About from './components/About'
import Hooks from './components/Hooks'
import Login from './components/Login'
import Layout from './layouts/Layout';


function App() {
  return (
    <>
    
     <Routes>
     <Route path="/" element={<Layout />}>
     <Route path="/" element={<Home />} />
     <Route path="/about" element={<About />} />
     <Route path="/blogs" element={<Blog/>} />
     <Route path="/hooks" element={<Hooks/>} />
     <Route path="/login" element={<Login/>} />


     </Route>
   </Routes>
</>
  );
}

export default App;

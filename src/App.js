
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from './components/Home'
import Blog from './components/Blogs'
import About from './components/About'
import Hooks from './components/Hooks'
import Login from './components/Login'
import Accordion from './components/Accordion'
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
   <div class="container mx-auto p-4">
      <h1 class="text-2xl font-bold mb-4">Accordion Example</h1>
      <Accordion
        title="Section 1"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      />
      <Accordion
        title="Section 2"
        content="Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
      <Accordion
        title="Section 3"
        content="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      />
    </div>
</>
  );
}

export default App;

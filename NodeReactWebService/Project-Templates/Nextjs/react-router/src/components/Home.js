// components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-cover bg-center bg-fixed" style={{ backgroundImage: "url('/BkGrd1.jpg')" }}>
    <div className="absolute inset-0 bg-black opacity-50 z-10"></div>            {/* Overlay with semi-transparent black background (see Note 1) */}
    <header className="absolute top-[0%] w-full py-6 bg-opacity-75 bg-black text-white shadow-md"> {/* used: absolute top-[0%] to move the header up to the top */}
      <div className="container mx-auto text-center">
        <h1 className="text-3xl font-semibold">React Template Website</h1>
        <nav className="mt-3 relative z-20">                                     {/* (see Note 1) */}                             
          <Link to="/about" className="mx-4 text-lg hover:text-blue-400">About</Link>
		  <Link to="/sample" className="mx-4 text-lg hover:text-blue-400">Sample</Link>
          <Link to="/contact" className="mx-4 text-lg hover:text-blue-400">Contact</Link>
        </nav>
      </div>
    </header>

    <div className="relative bg-white shadow-lg rounded-lg p-8 max-w-md text-center mt-20 ">
      <h1 className="text-4xl font-bold text-gray-800 mb-4 ">Home Page</h1>
      <p className="text-gray-600 text-lg">
        This is the Home page, styled with Tailwind CSS.
      </p>
      <p className="text-gray-500 mt-4">
        Tailwind allows you to quickly build modern and responsive UIs with ease.
      </p>
      {/*<Link to="https://tailwindcss.com/" className=" relative z-20"> USE TAG <a>  for opening in new window*/ }
      <a href="https://tailwindcss.com/" target="_blank"  rel="noopener noreferrer" className=" relative z-20" >
        <button className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition duration-300  ">   {/* (see Note 1) */}
          Learn More <small>(in new tab)</small> 
        </button>
      </a>
     
    </div>      
  </div> 
  );
}

export default Home;

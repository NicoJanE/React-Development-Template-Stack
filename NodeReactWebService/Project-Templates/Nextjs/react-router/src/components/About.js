// components/About.js
import React from 'react';
import { Link } from 'react-router-dom';

// This component adds a background image to the entire page and includes an overlay  that can affect the background's
// appearance (lighter or darker).  Note that this overlay might obscure links (see Note 1). It also includes a 
// default header with React Router links (Home, About, Contact).  Tailwind CSS is used for styling.
//
//    Note 1: The element below:
//       <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
//    Without the "z-10" class, this <div> covers the entire display and, by default, obscures any content beneath it, including <Link> 
//    and <a> elements. Therefore, the 'z-10' class is added to ensure the overlay does not cover the links. However, this requires that 
//    the <nav> has a higher z-index (relative to 10) to ensure links are clickable. Thus:
//       <nav className="relative z-20">
//         <Link to="/">Home</Link>
//         ...


function About() {
  return (  
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-cover bg-center bg-fixed" style={{ backgroundImage: "url('/BkGrd1.jpg')" }}>
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div> {/* Overlay with semi-transparent black background (see Note 1) */}
      <header className=" w-full py-6 bg-opacity-75 bg-black text-white shadow-md"> 
        <div className="container mx-auto text-center">
          <h1 className="text-3xl font-semibold">React Template Website</h1>
          <nav className="mt-3 relative z-20">                                     {/* (see Note 1) */}
            <Link to="/" className="mx-4 text-lg hover:text-blue-400">Home</Link>                                        
            <Link to="/contact" className="mx-4 text-lg hover:text-blue-400">Contact</Link>
          </nav>
        </div>
      </header>

      <div className="relative bg-white shadow-lg rounded-lg p-8 max-w-md text-center mt-20">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">About Page</h1>
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

export default About;


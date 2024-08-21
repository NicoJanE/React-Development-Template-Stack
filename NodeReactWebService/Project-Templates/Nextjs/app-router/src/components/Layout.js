
// This is 'body' implementation code, so don't use <html> <body>(use _document.js for changing the structure ) elements 
// just elements that are normal inside body tag. BkGrd4.jpg 
export default function Layout({ children }) {
  return (
    
    <div className="bg-cover bg-center min-h-screen" style={{ backgroundImage: 'url(BkGrd4.jpg)' }}>
        <nav className="bg-gray-600 p-4">
          <ul className="flex space-x-4">
            <li><a href="/" className="text-white">Home</a></li>
            <li><a href="/about" className="text-white">About</a></li>
          </ul>
        </nav>
        <main className="p-8">
          {children}
        </main>
      </div>    
    
  );
}


// bg-cover bg-center min-h-screen  items-center justify-center

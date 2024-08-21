// src/components/AboutPage.js
export default function AboutPage() {
  return (
    <div className="relative min-h-screen flex items-start  justify-center"> {/* Start inner Window(about) from top (items-start) */}
      <div className="relative w-full max-w-5xl p-4 mt-8 ">                  {/* Move 10 form top(mt-8) */}
        <div className="relative bg-white bg-opacity-90 rounded-lg overflow-hidden h-[80vh] "> { /* Sunken. Height 60% from view ([60vh])*/}

          {/* Background container  */}
          <div className="absolute inset-0 bg-cover bg-center"
               style={{ backgroundImage: 'url(BkGrd1.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', filter: 'brightness(70%)', boxShadow: 'inset 0 0 50px rgba(0, 0, 0, 1)' }}>
          </div>

          <div className="relative p-8 ">                                   {/* Postion of about text */}
            <h1 className="text-4xl font-bold mb-4 text-white-800">About Us</h1>
            <p className="text-lg text-white">
              This is the about page with a larger background image and a sunken effect! 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

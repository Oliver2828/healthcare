import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = ({ placeholder }) => {
  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <input
        type="text"
        placeholder={placeholder}
        className="w-full px-6 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
      />
      <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white p-2 rounded-full">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
        </svg>
      </button>
    </div>
  );
};

const Card = ({ title, desc, color, icon }) => {
  const colorMap = {
    blue: "bg-blue-100 text-blue-800",
    green: "bg-green-100 text-green-800",
    yellow: "bg-yellow-100 text-yellow-800"
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1">
      <div className={`w-16 h-16 ${colorMap[color]} rounded-full flex items-center justify-center text-2xl mb-4 mx-auto`}>
        {icon}
      </div>
      <h3 className="text-xl font-bold text-center mb-2">{title}</h3>
      <p className="text-gray-600 text-center">{desc}</p>
    </div>
  );
};

export default function Home() {
  const [showBanner, setShowBanner] = useState(true);
  const navigate = useNavigate();

  // Sample function to simulate navigation
  const handleNavigation = (path) => {
    console.log(`Navigating to: ${path}`);
    // In a real app, you would use:
    // navigate(path);
    
    // For this example, let's show an alert
    alert(`In a real application, this would navigate to ${path}`);
  };

  return (
    <div className="min-h-screen font-sans">
      {/* Promotional Banner */}
      {showBanner && (
        <div className="bg-gradient-to-r from-blue-800 to-purple-700 text-white text-center py-2 px-4 relative animate-pulse">
          <p className="text-sm">Get 20% off on your first medicine order! Use code: HEALTH20</p>
          <button 
            onClick={() => setShowBanner(false)}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white"
          >
            ✕
          </button>
        </div>
      )}

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20 px-6 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            Your Healthcare, Simplified
          </h1>
          <p className="text-gray-600 mt-4 text-lg">
            Book doctors, order medicines, and manage your health in one place.
          </p>
          <div className="mt-8">
            <SearchBar placeholder="Search doctors, pharmacies, or medicines..." />
          </div>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <button 
              onClick={() => handleNavigation("/doctors")}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full transition duration-300 transform hover:scale-105 shadow-md"
            >
              Book Appointment
            </button>
            <button 
              onClick={() => handleNavigation("/products")}
              className="border border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-full transition duration-300 transform hover:scale-105 shadow-md"
            >
              Order Medicines
            </button>
          </div>
        </div>
        
        {/* Animated background elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-200 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-green-200 rounded-full opacity-20 animate-pulse delay-1000"></div>
          <div className="absolute top-1/3 right-1/3 w-32 h-32 bg-yellow-200 rounded-full opacity-20 animate-pulse delay-2000"></div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="transform transition-all duration-700 hover:scale-110">
            <h3 className="text-4xl font-bold text-blue-900">500+</h3>
            <p className="text-gray-600 mt-2">Verified Doctors</p>
          </div>
          <div className="transform transition-all duration-700 hover:scale-110">
            <h3 className="text-4xl font-bold text-blue-900">10K+</h3>
            <p className="text-gray-600 mt-2">Happy Patients</p>
          </div>
          <div className="transform transition-all duration-700 hover:scale-110">
            <h3 className="text-4xl font-bold text-blue-900">24/7</h3>
            <p className="text-gray-600 mt-2">Support Available</p>
          </div>
          <div className="transform transition-all duration-700 hover:scale-110">
            <h3 className="text-4xl font-bold text-blue-900">100+</h3>
            <p className="text-gray-600 mt-2">Cities Served</p>
          </div>
        </div>
      </section>

      {/* Popular Services for Nigerian Patients */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Popular in Nigeria</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {[
              { icon: "🦟", title: "Malaria Treatment" },
              { icon: "❤️", title: "Blood Pressure" },
              { icon: "🩸", title: "Diabetes Care" },
              { icon: "🤒", title: "Typhoid Fever" }
            ].map((service, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 transform hover:-translate-y-1 cursor-pointer"
              >
                <div className="text-3xl mb-4">{service.icon}</div>
                <p className="text-sm font-medium">{service.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-6 text-center bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Explore Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-10">
            Access a wide range of healthcare services from the comfort of your home
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <Card 
              title="Find Doctors" 
              desc="Book appointments with top specialists near you." 
              color="blue" 
              icon="👨‍⚕️"
            />
            <Card 
              title="Order Medicines" 
              desc="Buy genuine medicines from trusted pharmacies." 
              color="green" 
              icon="💊"
            />
            <Card 
              title="Book Lab Tests" 
              desc="Schedule health tests with certified labs." 
              color="yellow" 
              icon="🧪"
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">What Our Nigerian Patients Say</h2>
          <p className="text-gray-600 mb-12">Don't just take our word for it</p>
          
          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="bg-gray-50 p-6 rounded-lg transform transition-all duration-300 hover:scale-105">
              <div className="text-yellow-400 mb-4">★★★★★</div>
              <p className="text-gray-700 mb-4">"I found a specialist for my malaria treatment in Lagos and got an appointment the same day. This platform is a lifesaver!"</p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-blue-200 rounded-full mr-3 flex items-center justify-center">
                  <span className="text-blue-800 font-bold">C</span>
                </div>
                <div>
                  <p className="font-medium">Chinedu Okoro</p>
                  <p className="text-sm text-gray-500">Lagos</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg transform transition-all duration-300 hover:scale-105">
              <div className="text-yellow-400 mb-4">★★★★★</div>
              <p className="text-gray-700 mb-4">"Medicine delivery to Abuja was prompt and the prices were better than my local pharmacy. Naija healthcare don better!"</p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-blue-200 rounded-full mr-3 flex items-center justify-center">
                  <span className="text-blue-800 font-bold">A</span>
                </div>
                <div>
                  <p className="font-medium">Aisha Mohammed</p>
                  <p className="text-sm text-gray-500">Abuja</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg transform transition-all duration-300 hover:scale-105">
              <div className="text-yellow-400 mb-4">★★★★☆</div>
              <p className="text-gray-700 mb-4">"The lab test booking for my family in Port Harcourt was seamless, and results came faster than expected. Very convenient!"</p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-blue-200 rounded-full mr-3 flex items-center justify-center">
                  <span className="text-blue-800 font-bold">E</span>
                </div>
                <div>
                  <p className="font-medium">Emeka Nwosu</p>
                  <p className="text-sm text-gray-500">Port Harcourt</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-gradient-to-r from-blue-900 to-purple-800 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Ready to take control of your health?</h2>
          <p className="mb-8 opacity-90">Download our app for a better experience and exclusive offers</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-blue-900 px-6 py-3 rounded-lg font-medium flex items-center justify-center transform hover:scale-105 transition-transform duration-300 shadow-md">
              <span className="mr-2">📱</span> App Store
            </button>
            <button className="bg-white text-blue-900 px-6 py-3 rounded-lg font-medium flex items-center justify-center transform hover:scale-105 transition-transform duration-300 shadow-md">
              <span className="mr-2">🤖</span> Google Play
            </button>
          </div>
          <div className="mt-8">
            <p className="text-sm opacity-80">Also available on USSD: *347*7#</p>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes pulse {
          0% { opacity: 0.2; }
          50% { opacity: 0.3; }
          100% { opacity: 0.2; }
        }
        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </div>
  );
}
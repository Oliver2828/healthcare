import React from "react"
import SearchBar from "../components/SearchBar"
import Card from "../components/Card"
import { useState, useEffect } from "react"

export default function Home() {
  const [showBanner, setShowBanner] = useState(true)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen">
      {/* Promotional Banner */}
      {showBanner && (
        <div className="bg-blue-800 text-white text-center py-2 px-4 relative">
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
      <section className="bg-blue-50 py-20 px-6 text-center relative">
        <div className="max-w-4xl mx-auto">
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
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full transition duration-300">
              Book Appointment
            </button>
            <button className="border border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-2 rounded-full transition duration-300">
              Order Medicines
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-12 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <h3 className="text-3xl font-bold text-blue-900">500+</h3>
            <p className="text-gray-600">Verified Doctors</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-blue-900">10K+</h3>
            <p className="text-gray-600">Happy Patients</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-blue-900">24/7</h3>
            <p className="text-gray-600">Support Available</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-blue-900">100+</h3>
            <p className="text-gray-600">Cities Served</p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-6 text-center bg-gray-50">
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
          <h2 className="text-3xl font-bold mb-4">What Our Patients Say</h2>
          <p className="text-gray-600 mb-12">Don't just take our word for it</p>
          
          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="text-yellow-400 mb-4">★★★★★</div>
              <p className="text-gray-700 mb-4">"Found the perfect specialist for my condition and got an appointment the same day. Amazing service!"</p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-blue-200 rounded-full mr-3"></div>
                <div>
                  <p className="font-medium">Sarah Johnson</p>
                  <p className="text-sm text-gray-500">New York</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="text-yellow-400 mb-4">★★★★★</div>
              <p className="text-gray-700 mb-4">"Medicine delivery was prompt and the prices were better than my local pharmacy. Will use again!"</p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-blue-200 rounded-full mr-3"></div>
                <div>
                  <p className="font-medium">Michael Chen</p>
                  <p className="text-sm text-gray-500">San Francisco</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="text-yellow-400 mb-4">★★★★☆</div>
              <p className="text-gray-700 mb-4">"The lab test booking was seamless, and results came faster than expected. Very convenient!"</p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-blue-200 rounded-full mr-3"></div>
                <div>
                  <p className="font-medium">Emma Rodriguez</p>
                  <p className="text-sm text-gray-500">Chicago</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-blue-900 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Ready to take control of your health?</h2>
          <p className="mb-8 opacity-90">Download our app for a better experience and exclusive offers</p>
          <div className="flex justify-center gap-4">
            <button className="bg-white text-blue-900 px-6 py-3 rounded-lg font-medium flex items-center">
              <span className="mr-2">📱</span> App Store
            </button>
            <button className="bg-white text-blue-900 px-6 py-3 rounded-lg font-medium flex items-center">
              <span className="mr-2">🤖</span> Google Play
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
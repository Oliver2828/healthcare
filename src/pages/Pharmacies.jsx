import React, { useState } from "react"
import { Search, MapPin, Clock, Star, Phone, Navigation, Filter, X, Check, Truck } from "lucide-react"

// SearchBar Component
function SearchBar({ placeholder, value, onChange, className }) {
  return (
    <div className="relative">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all ${className}`}
      />
    </div>
  )
}

// PharmacyCard Component
function PharmacyCard(pharmacy) {
  const [showDetails, setShowDetails] = useState(false)
  
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 overflow-hidden group">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={pharmacy.image} 
          alt={pharmacy.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-3 right-3 flex gap-2">
          {pharmacy.verified && (
            <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1">
              <Check className="w-3 h-3" />
              Verified
            </span>
          )}
          {pharmacy.open ? (
            <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-semibold">
              Open
            </span>
          ) : (
            <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs font-semibold">
              Closed
            </span>
          )}
        </div>
        {pharmacy.promoted && (
          <div className="absolute top-3 left-3">
            <span className="bg-yellow-400 text-yellow-900 px-2 py-1 rounded-full text-xs font-bold">
              PROMOTED
            </span>
          </div>
        )}
      </div>
      
      <div className="p-5">
        <div className="flex justify-between items-start mb-3">
          <div>
            <h3 className="font-bold text-lg text-gray-900 mb-1">{pharmacy.name}</h3>
            <div className="flex items-center text-gray-500 text-sm mb-2">
              <MapPin className="w-4 h-4 mr-1" />
              {pharmacy.address}
            </div>
          </div>
          <div className="text-right">
            <div className="flex items-center gap-1 mb-1">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span className="font-semibold text-gray-900">{pharmacy.rating}</span>
            </div>
            <div className="text-xs text-gray-500">({pharmacy.reviews} reviews)</div>
          </div>
        </div>
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center text-sm text-gray-600">
            <Clock className="w-4 h-4 mr-1" />
            {pharmacy.open ? pharmacy.hours : "Closed"}
          </div>
          <div className="text-sm text-blue-600 font-medium">
            {pharmacy.distance} km away
          </div>
        </div>
        
        <div className="space-y-2 mb-4">
          {pharmacy.delivery && (
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center text-green-600">
                <Truck className="w-4 h-4 mr-2" />
                Delivery available
              </div>
              <span className="text-gray-500">{pharmacy.deliveryTime}</span>
            </div>
          )}
          
          <div className="flex flex-wrap gap-1">
            {pharmacy.services.map((service, index) => (
              <span key={index} className="bg-blue-50 text-blue-700 px-2 py-1 rounded-md text-xs">
                {service}
              </span>
            ))}
          </div>
        </div>
        
        <div className="flex gap-2">
          <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-xl font-medium hover:bg-blue-700 transition-colors">
            Visit Store
          </button>
          <button 
            onClick={() => setShowDetails(!showDetails)}
            className="px-4 py-2 border border-gray-200 rounded-xl text-gray-700 hover:bg-gray-50 transition-colors"
          >
            {showDetails ? 'Less' : 'More'}
          </button>
          <a 
            href={`tel:${pharmacy.phone}`}
            className="px-4 py-2 border border-gray-200 rounded-xl text-gray-700 hover:bg-gray-50 transition-colors"
          >
            <Phone className="w-4 h-4" />
          </a>
        </div>
        
        {showDetails && (
          <div className="mt-4 pt-4 border-t border-gray-100 text-sm text-gray-600 space-y-2">
            <div><strong>Phone:</strong> {pharmacy.phone}</div>
            <div><strong>License:</strong> {pharmacy.license}</div>
            <div><strong>Pharmacist:</strong> {pharmacy.pharmacist}</div>
            <div className="flex items-center gap-2">
              <Navigation className="w-4 h-4" />
              <button className="text-blue-600 hover:underline">Get Directions</button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default function PharmacyFinder() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedLocation, setSelectedLocation] = useState("All")
  const [sortBy, setSortBy] = useState("distance")
  const [showFilters, setShowFilters] = useState(false)
  const [filters, setFilters] = useState({
    openNow: false,
    delivery: false,
    verified: false
  })

  const pharmacies = [
    { 
      id: 1,
      name: "HealthPlus Pharmacy", 
      address: "15 Awolowo Road, Ikoyi",
      location: "Lagos", 
      rating: 4.8, 
      reviews: 342,
      delivery: true,
      open: true,
      hours: "24/7",
      deliveryTime: "25-35 min",
      distance: 1.2,
      phone: "+234 801 234 5678",
      license: "PCN/LAG/001234",
      pharmacist: "Dr. Adebayo Johnson",
      verified: true,
      promoted: true,
      services: ["Prescription", "OTC", "Wellness", "COVID Test"],
      image: "https://images.unsplash.com/photo-1576671081837-49000212a370?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
    },
    { 
      id: 2,
      name: "Unity Pharmacy", 
      address: "Plot 234 Maitama District",
      location: "Abuja", 
      rating: 4.6, 
      reviews: 158,
      delivery: true,
      open: false,
      hours: "8:00 AM - 10:00 PM",
      deliveryTime: "40-60 min",
      distance: 2.8,
      phone: "+234 807 987 6543",
      license: "PCN/FCT/005678",
      pharmacist: "Dr. Fatima Al-Hassan",
      verified: true,
      promoted: false,
      services: ["Prescription", "OTC", "Baby Care"],
      image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
    },
    { 
      id: 3,
      name: "MediCare Express", 
      address: "12 Aba Road, Mile 3",
      location: "Port Harcourt", 
      rating: 4.7, 
      reviews: 289,
      delivery: true,
      open: true,
      hours: "6:00 AM - 11:00 PM",
      deliveryTime: "30-45 min",
      distance: 0.8,
      phone: "+234 803 456 7890",
      license: "PCN/RIV/009876",
      pharmacist: "Dr. Emeka Okafor",
      verified: true,
      promoted: false,
      services: ["Prescription", "OTC", "Diabetes Care", "Delivery"],
      image: "https://images.unsplash.com/photo-1511500118080-275313ecbc75?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
    },
    { 
      id: 4,
      name: "Pinnacle Pharmacy", 
      address: "7 Allen Avenue, Ikeja",
      location: "Lagos", 
      rating: 4.5, 
      reviews: 127,
      delivery: false,
      open: true,
      hours: "8:00 AM - 9:00 PM",
      deliveryTime: "N/A",
      distance: 3.2,
      phone: "+234 809 123 4567",
      license: "PCN/LAG/002345",
      pharmacist: "Dr. Chioma Nwankwo",
      verified: false,
      promoted: false,
      services: ["Prescription", "OTC"],
      image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
    },
    { 
      id: 5,
      name: "WellCare Pharmacy", 
      address: "45 Garki 2 District",
      location: "Abuja", 
      rating: 4.4, 
      reviews: 203,
      delivery: true,
      open: true,
      hours: "7:00 AM - 10:00 PM",
      deliveryTime: "35-50 min",
      distance: 1.9,
      phone: "+234 805 876 5432",
      license: "PCN/FCT/007890",
      pharmacist: "Dr. Ibrahim Musa",
      verified: true,
      promoted: false,
      services: ["Prescription", "OTC", "Blood Pressure Check"],
      image: "https://images.unsplash.com/photo-1600078686889-8c42747c25fe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
    },
    { 
      id: 6,
      name: "Prime Health Pharmacy", 
      address: "23 Trans Amadi Road",
      location: "Port Harcourt", 
      rating: 4.9, 
      reviews: 412,
      delivery: true,
      open: true,
      hours: "24/7",
      deliveryTime: "20-30 min",
      distance: 0.5,
      phone: "+234 802 345 6789",
      license: "PCN/RIV/001122",
      pharmacist: "Dr. Grace Okoro",
      verified: true,
      promoted: false,
      services: ["Prescription", "OTC", "Emergency", "Consultation"],
      image: "https://images.unsplash.com/photo-1585435557343-3b092031d5b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
    },
  ]

  const locations = ["All", "Lagos", "Abuja", "Port Harcourt"]
  const sortOptions = [
    { value: "distance", label: "Nearest First" },
    { value: "rating", label: "Highest Rated" },
    { value: "name", label: "Name (A-Z)" },
  ]

  const filteredPharmacies = pharmacies
    .filter(pharmacy => {
      const matchesSearch = pharmacy.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           pharmacy.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           pharmacy.location.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesLocation = selectedLocation === "All" || pharmacy.location === selectedLocation
      const matchesFilters = (!filters.openNow || pharmacy.open) &&
                            (!filters.delivery || pharmacy.delivery) &&
                            (!filters.verified || pharmacy.verified)
      return matchesSearch && matchesLocation && matchesFilters
    })
    .sort((a, b) => {
      if (sortBy === "distance") {
        return a.distance - b.distance
      } else if (sortBy === "rating") {
        return b.rating - a.rating
      } else if (sortBy === "name") {
        return a.name.localeCompare(b.name)
      }
      return 0
    })

  const activeFiltersCount = Object.values(filters).filter(Boolean).length

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Find Trusted Pharmacies
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Locate verified pharmacies near you with real-time availability, delivery options, and licensed pharmacists.
            </p>
          </div>
        </div>
      </div>

      {/* Search Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
        <div className="bg-white rounded-2xl shadow-xl p-6">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-4">
            <div className="lg:col-span-2">
              <SearchBar 
                placeholder="Search by pharmacy name, address, or services..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div>
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="w-full py-3 px-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              >
                {locations.map(location => (
                  <option key={location} value={location}>
                    {location === "All" ? "All Cities" : location}
                  </option>
                ))}
              </select>
            </div>
            
            <div>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full py-3 px-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              >
                {sortOptions.map(option => (
                  <option key={option.value} value={option.value}>{option.label}</option>
                ))}
              </select>
            </div>
          </div>
          
          <div className="flex flex-wrap items-center gap-3">
            <button 
              onClick={() => setShowFilters(!showFilters)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl border transition-colors ${
                showFilters ? 'bg-blue-50 border-blue-200 text-blue-700' : 'border-gray-200 text-gray-700 hover:bg-gray-50'
              }`}
            >
              <Filter className="w-4 h-4" />
              Filters
              {activeFiltersCount > 0 && (
                <span className="bg-blue-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {activeFiltersCount}
                </span>
              )}
            </button>
            
            {Object.entries(filters).some(([_, value]) => value) && (
              <button 
                onClick={() => setFilters({ openNow: false, delivery: false, verified: false })}
                className="flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700"
              >
                <X className="w-4 h-4" />
                Clear filters
              </button>
            )}
          </div>
          
          {showFilters && (
            <div className="mt-4 p-4 bg-gray-50 rounded-xl">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={filters.openNow}
                    onChange={(e) => setFilters({...filters, openNow: e.target.checked})}
                    className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                  />
                  <span className="text-sm text-gray-700">Open now</span>
                </label>
                
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={filters.delivery}
                    onChange={(e) => setFilters({...filters, delivery: e.target.checked})}
                    className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                  />
                  <span className="text-sm text-gray-700">Delivery available</span>
                </label>
                
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={filters.verified}
                    onChange={(e) => setFilters({...filters, verified: e.target.checked})}
                    className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                  />
                  <span className="text-sm text-gray-700">Verified only</span>
                </label>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Results Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              {filteredPharmacies.length} {filteredPharmacies.length === 1 ? 'Pharmacy' : 'Pharmacies'} Found
            </h2>
            <div className="flex flex-wrap gap-2">
              {selectedLocation !== "All" && (
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  📍 {selectedLocation}
                </span>
              )}
              {searchTerm && (
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  🔍 "{searchTerm}"
                </span>
              )}
            </div>
          </div>
          
          <div className="text-sm text-gray-500">
            Sorted by {sortOptions.find(opt => opt.value === sortBy)?.label}
          </div>
        </div>
        
        {filteredPharmacies.length > 0 ? (
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredPharmacies.map(pharmacy => (
              <PharmacyCard key={pharmacy.id} {...pharmacy} />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-2xl shadow-sm p-12 text-center">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No pharmacies found</h3>
            <p className="text-gray-600 mb-6 max-w-md mx-auto">
              We couldn't find any pharmacies matching your criteria. Try adjusting your search or filters.
            </p>
            <button 
              onClick={() => {
                setSearchTerm("")
                setSelectedLocation("All")
                setFilters({ openNow: false, delivery: false, verified: false })
              }}
              className="bg-blue-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-blue-700 transition-colors"
            >
              Clear All Filters
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
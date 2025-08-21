import React, { useState } from "react"
import { Search, Filter, MapPin, Star, Calendar, Phone, Video, User, Stethoscope, Clock, Award, ChevronDown, X } from "lucide-react"

// Enhanced Doctor Card Component
function DoctorCard({ doctor, onBookAppointment }) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-300 overflow-hidden">
      <div className="p-6">
        <div className="flex items-start space-x-4">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
            {doctor.name.split(' ').map(n => n[0]).join('')}
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-bold text-gray-800 mb-1">{doctor.name}</h3>
            <p className="text-blue-600 font-semibold mb-2">{doctor.specialty}</p>
            <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
              <div className="flex items-center space-x-1">
                <MapPin className="w-4 h-4" />
                <span>{doctor.location}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Star className="w-4 h-4 text-yellow-500 fill-current" />
                <span className="font-semibold">{doctor.rating}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600">Experience:</span>
            <span className="font-semibold">{doctor.experience} years</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600">Consultation Fee:</span>
            <span className="font-semibold text-green-600">₦{doctor.fee.toLocaleString()}</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600">Next Available:</span>
            <span className="font-semibold">{doctor.nextAvailable}</span>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-1">
          {doctor.languages.map((lang, index) => (
            <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
              {lang}
            </span>
          ))}
        </div>

        <div className="mt-6 grid grid-cols-2 gap-3">
          <button 
            onClick={() => onBookAppointment(doctor, 'video')}
            className="flex items-center justify-center space-x-2 bg-blue-600 text-white py-2 px-3 rounded-lg hover:bg-blue-700 transition-colors text-sm font-semibold"
          >
            <Video className="w-4 h-4" />
            <span>Video Call</span>
          </button>
          <button 
            onClick={() => onBookAppointment(doctor, 'in-person')}
            className="flex items-center justify-center space-x-2 border border-blue-600 text-blue-600 py-2 px-3 rounded-lg hover:bg-blue-50 transition-colors text-sm font-semibold"
          >
            <User className="w-4 h-4" />
            <span>In-Person</span>
          </button>
        </div>
      </div>
    </div>
  )
}

// Enhanced Appointment Form Modal
function AppointmentForm({ isOpen, onClose, doctor, consultationType }) {
  const [form, setForm] = useState({
    patientName: '',
    phone: '',
    email: '',
    date: '',
    time: '',
    reason: '',
    symptoms: ''
  })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`Appointment booked with ${doctor?.name} for ${consultationType} consultation on ${form.date} at ${form.time}`)
    onClose()
    setForm({
      patientName: '',
      phone: '',
      email: '',
      date: '',
      time: '',
      reason: '',
      symptoms: ''
    })
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-gray-800">Book Appointment</h2>
              <p className="text-gray-600">with {doctor?.name} - {consultationType} consultation</p>
            </div>
            <button 
              onClick={onClose}
              className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="p-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Patient Name *</label>
              <input
                type="text"
                name="patientName"
                placeholder="Enter patient name"
                value={form.patientName}
                onChange={handleChange}
                className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number *</label>
              <input
                type="tel"
                name="phone"
                placeholder="+234 800 000 0000"
                value={form.phone}
                onChange={handleChange}
                className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
              <input
                type="email"
                name="email"
                placeholder="patient@example.com"
                value={form.email}
                onChange={handleChange}
                className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Preferred Date *</label>
              <input
                type="date"
                name="date"
                value={form.date}
                onChange={handleChange}
                min={new Date().toISOString().split('T')[0]}
                className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Preferred Time *</label>
              <select
                name="time"
                value={form.time}
                onChange={handleChange}
                className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                required
              >
                <option value="">Select time slot</option>
                <option value="09:00">9:00 AM</option>
                <option value="10:00">10:00 AM</option>
                <option value="11:00">11:00 AM</option>
                <option value="14:00">2:00 PM</option>
                <option value="15:00">3:00 PM</option>
                <option value="16:00">4:00 PM</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Reason for Visit *</label>
              <select
                name="reason"
                value={form.reason}
                onChange={handleChange}
                className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                required
              >
                <option value="">Select reason</option>
                <option value="routine-checkup">Routine Checkup</option>
                <option value="consultation">Medical Consultation</option>
                <option value="follow-up">Follow-up Visit</option>
                <option value="emergency">Emergency</option>
                <option value="second-opinion">Second Opinion</option>
              </select>
            </div>
          </div>

          <div className="mt-6">
            <label className="block text-sm font-semibold text-gray-700 mb-2">Symptoms/Additional Notes</label>
            <textarea
              name="symptoms"
              placeholder="Please describe your symptoms or any additional information..."
              value={form.symptoms}
              onChange={handleChange}
              rows={4}
              className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none"
            />
          </div>

          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <div className="flex items-start space-x-3">
              <Calendar className="w-5 h-5 text-blue-600 mt-0.5" />
              <div>
                <h4 className="font-semibold text-blue-800">Appointment Details</h4>
                <p className="text-sm text-blue-700 mt-1">
                  {consultationType === 'video' ? 'Video consultation' : 'In-person visit'} with {doctor?.name}
                </p>
                <p className="text-sm text-blue-700">
                  Consultation fee: ₦{doctor?.fee?.toLocaleString()}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 flex justify-end space-x-4">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-semibold"
            >
              Cancel
            </button>
            <button
              onClick={handleSubmit}
              className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold flex items-center space-x-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Doctors() {
  const [doctors] = useState([
    { 
      id: 1,
      name: "Dr. John Smith", 
      specialty: "Cardiologist", 
      location: "Lagos", 
      rating: "4.8",
      experience: 15,
      fee: 25000,
      nextAvailable: "Today",
      languages: ["English", "Yoruba"],
      image: "/api/placeholder/64/64"
    },
    { 
      id: 2,
      name: "Dr. Mary Johnson", 
      specialty: "Dermatologist", 
      location: "Abuja", 
      rating: "4.6",
      experience: 12,
      fee: 20000,
      nextAvailable: "Tomorrow",
      languages: ["English"],
      image: "/api/placeholder/64/64"
    },
    { 
      id: 3,
      name: "Dr. Ahmed Musa", 
      specialty: "Pediatrician", 
      location: "Kano", 
      rating: "4.7",
      experience: 8,
      fee: 18000,
      nextAvailable: "Today",
      languages: ["English", "Hausa"],
      image: "/api/placeholder/64/64"
    },
    { 
      id: 4,
      name: "Dr. Funmi Adebayo", 
      specialty: "General Practitioner", 
      location: "Lagos", 
      rating: "4.9",
      experience: 10,
      fee: 15000,
      nextAvailable: "Today",
      languages: ["English", "Yoruba"],
      image: "/api/placeholder/64/64"
    },
    { 
      id: 5,
      name: "Dr. Ibrahim Yusuf", 
      specialty: "Orthopedic Surgeon", 
      location: "Abuja", 
      rating: "4.8",
      experience: 18,
      fee: 30000,
      nextAvailable: "Next Week",
      languages: ["English", "Arabic"],
      image: "/api/placeholder/64/64"
    },
    { 
      id: 6,
      name: "Dr. Grace Okafor", 
      specialty: "Gynecologist", 
      location: "Port Harcourt", 
      rating: "4.7",
      experience: 14,
      fee: 22000,
      nextAvailable: "Tomorrow",
      languages: ["English", "Igbo"],
      image: "/api/placeholder/64/64"
    }
  ])

  const [searchTerm, setSearchTerm] = useState('')
  const [selectedSpecialty, setSelectedSpecialty] = useState('')
  const [selectedLocation, setSelectedLocation] = useState('')
  const [sortBy, setSortBy] = useState('rating')
  const [showFilters, setShowFilters] = useState(false)
  const [appointmentModal, setAppointmentModal] = useState({
    isOpen: false,
    doctor: null,
    consultationType: null
  })

  // Get unique specialties and locations for filters
  const specialties = [...new Set(doctors.map(doc => doc.specialty))]
  const locations = [...new Set(doctors.map(doc => doc.location))]

  // Filter and sort doctors
  const filteredDoctors = doctors
    .filter(doctor => {
      const matchesSearch = doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesSpecialty = !selectedSpecialty || doctor.specialty === selectedSpecialty
      const matchesLocation = !selectedLocation || doctor.location === selectedLocation
      
      return matchesSearch && matchesSpecialty && matchesLocation
    })
    .sort((a, b) => {
      switch(sortBy) {
        case 'rating':
          return parseFloat(b.rating) - parseFloat(a.rating)
        case 'experience':
          return b.experience - a.experience
        case 'fee':
          return a.fee - b.fee
        case 'name':
          return a.name.localeCompare(b.name)
        default:
          return 0
      }
    })

  const handleBookAppointment = (doctor, consultationType) => {
    setAppointmentModal({
      isOpen: true,
      doctor,
      consultationType
    })
  }

  const clearFilters = () => {
    setSearchTerm('')
    setSelectedSpecialty('')
    setSelectedLocation('')
    setSortBy('rating')
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-2">Find Doctors</h1>
            <p className="text-gray-600 text-lg">Book appointments with qualified healthcare professionals</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Search and Filter Section */}
        <div className="bg-white rounded-xl shadow-sm border p-6 mb-8">
          {/* Search Bar */}
          <div className="relative mb-4">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search by doctor name or specialty..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-lg"
            />
          </div>

          {/* Filter Toggle */}
          <div className="flex items-center justify-between">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center space-x-2 bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-lg transition-colors"
            >
              <Filter className="w-4 h-4" />
              <span>Filters</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
            </button>
            
            <div className="text-sm text-gray-600">
              Showing {filteredDoctors.length} of {doctors.length} doctors
            </div>
          </div>

          {/* Filters */}
          {showFilters && (
            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="grid md:grid-cols-4 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Specialty</label>
                  <select
                    value={selectedSpecialty}
                    onChange={(e) => setSelectedSpecialty(e.target.value)}
                    className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">All Specialties</option>
                    {specialties.map(specialty => (
                      <option key={specialty} value={specialty}>{specialty}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Location</label>
                  <select
                    value={selectedLocation}
                    onChange={(e) => setSelectedLocation(e.target.value)}
                    className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">All Locations</option>
                    {locations.map(location => (
                      <option key={location} value={location}>{location}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Sort By</label>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="rating">Highest Rating</option>
                    <option value="experience">Most Experience</option>
                    <option value="fee">Lowest Fee</option>
                    <option value="name">Name A-Z</option>
                  </select>
                </div>

                <div className="flex items-end">
                  <button
                    onClick={clearFilters}
                    className="w-full bg-gray-200 hover:bg-gray-300 text-gray-700 py-3 px-4 rounded-lg transition-colors font-semibold"
                  >
                    Clear Filters
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-sm border p-6 text-center">
            <Stethoscope className="w-8 h-8 text-blue-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-800">{doctors.length}</div>
            <div className="text-gray-600">Total Doctors</div>
          </div>
          <div className="bg-white rounded-lg shadow-sm border p-6 text-center">
            <Award className="w-8 h-8 text-green-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-800">{specialties.length}</div>
            <div className="text-gray-600">Specialties</div>
          </div>
          <div className="bg-white rounded-lg shadow-sm border p-6 text-center">
            <MapPin className="w-8 h-8 text-red-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-800">{locations.length}</div>
            <div className="text-gray-600">Cities</div>
          </div>
          <div className="bg-white rounded-lg shadow-sm border p-6 text-center">
            <Clock className="w-8 h-8 text-orange-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-800">24/7</div>
            <div className="text-gray-600">Support</div>
          </div>
        </div>

        {/* Doctors Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDoctors.map((doctor) => (
            <DoctorCard 
              key={doctor.id} 
              doctor={doctor} 
              onBookAppointment={handleBookAppointment}
            />
          ))}
        </div>

        {/* No Results */}
        {filteredDoctors.length === 0 && (
          <div className="text-center py-12">
            <Stethoscope className="w-16 h-16 mx-auto text-gray-400 mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No doctors found</h3>
            <p className="text-gray-500 mb-4">Try adjusting your search or filter criteria</p>
            <button
              onClick={clearFilters}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Clear All Filters
            </button>
          </div>
        )}
      </div>

      {/* Appointment Modal */}
      <AppointmentForm 
        isOpen={appointmentModal.isOpen}
        onClose={() => setAppointmentModal({ isOpen: false, doctor: null, consultationType: null })}
        doctor={appointmentModal.doctor}
        consultationType={appointmentModal.consultationType}
      />
    </div>
  )
}
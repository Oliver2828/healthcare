import React from "react"
export default function DoctorCard({ name, specialty, location, rating }) {
  return (
    <div className="bg-white border rounded-lg shadow p-4 hover:shadow-lg transition">
      <img
        src={`https://via.placeholder.com/150`}
        alt={name}
        className="w-24 h-24 rounded-full mx-auto"
      />
      <h3 className="text-xl font-semibold text-center mt-3">{name}</h3>
      <p className="text-gray-600 text-center">{specialty}</p>
      <p className="text-sm text-gray-500 text-center">{location}</p>
      <p className="text-yellow-500 text-center mt-1">⭐ {rating}</p>
      <div className="flex justify-center mt-3">
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          Book Appointment
        </button>
      </div>
    </div>
  )
}

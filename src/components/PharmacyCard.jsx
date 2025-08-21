import React from "react"
export default function PharmacyCard({ name, location, rating }) {
  return (
    <div className="bg-white border rounded-lg shadow p-4 hover:shadow-lg transition">
      <h3 className="text-xl font-semibold">{name}</h3>
      <p className="text-gray-600">{location}</p>
      <p className="text-yellow-500 mt-2">⭐ {rating}</p>
      <button className="bg-green-600 text-white px-4 py-2 rounded-lg mt-4 w-full">
        View Products
      </button>
    </div>
  )
}

import React from "react"
export default function ProductCard({ name, price }) {
  return (
    <div className="bg-white border rounded-lg shadow p-4 hover:shadow-lg transition">
      <img
        src={`https://via.placeholder.com/120`}
        alt={name}
        className="w-24 h-24 mx-auto"
      />
      <h3 className="text-lg font-semibold text-center mt-3">{name}</h3>
      <p className="text-gray-600 text-center">₦{price}</p>
      <div className="flex justify-center mt-3">
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          Add to Cart
        </button>
      </div>
    </div>
  )
}

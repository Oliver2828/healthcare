import React from "react"

export default function SearchBar({ placeholder }) {
  return (
    <div className="flex justify-center mt-6">
      <input
        type="text"
        placeholder={placeholder}
        className="p-3 rounded-l-lg border w-80"
      />
      <button className="bg-blue-600 text-white px-6 rounded-r-lg">
        Search
      </button>
    </div>
  )
}
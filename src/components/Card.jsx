import React from "react"
export default function Card({ title, desc, color }) {
  const colors = {
    blue: "bg-blue-100",
    green: "bg-green-100",
    yellow: "bg-yellow-100"
  }
  return (
    <div className={`${colors[color]} p-6 rounded-lg shadow hover:shadow-lg`}>
      <h3 className="font-semibold text-xl">{title}</h3>
      <p className="text-gray-600 mt-2">{desc}</p>
    </div>
  )
}

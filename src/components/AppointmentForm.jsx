import React from "react"
import { useState } from "react"

export default function AppointmentForm() {
  const [form, setForm] = useState({
    name: "",
    date: "",
    time: "",
    reason: ""
  })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`Appointment booked for ${form.name} on ${form.date} at ${form.time}`)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto mt-6"
    >
      <h2 className="text-2xl font-bold mb-4 text-center">Book Appointment</h2>
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={form.name}
        onChange={handleChange}
        className="w-full border p-2 rounded mb-3"
        required
      />
      <input
        type="date"
        name="date"
        value={form.date}
        onChange={handleChange}
        className="w-full border p-2 rounded mb-3"
        required
      />
      <input
        type="time"
        name="time"
        value={form.time}
        onChange={handleChange}
        className="w-full border p-2 rounded mb-3"
        required
      />
      <textarea
        name="reason"
        placeholder="Reason for visit"
        value={form.reason}
        onChange={handleChange}
        className="w-full border p-2 rounded mb-3"
        required
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded-lg w-full"
      >
        Confirm Appointment
      </button>
    </form>
  )
}
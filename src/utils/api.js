import axios from "axios"

// Simulated API setup
const api = axios.create({
  baseURL: "https://dummy-healthcare-api.com", // placeholder
})

// Example endpoints
export const fetchDoctors = async () => {
  return [
    { name: "Dr. John Smith", specialty: "Cardiologist", location: "Lagos", rating: "4.8" },
    { name: "Dr. Mary Johnson", specialty: "Dermatologist", location: "Abuja", rating: "4.6" }
  ]
}

export const fetchProducts = async () => {
  return [
    { name: "Paracetamol", price: 500 },
    { name: "Vitamin C", price: 1000 }
  ]
}

export default api

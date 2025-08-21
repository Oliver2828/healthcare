import React, { useState } from "react"
import { Eye, EyeOff, User, Mail, Lock, Shield, AlertCircle, Heart, Building2, Stethoscope, Plus } from "lucide-react"

// Mock Link component since we don't have react-router-dom
const Link = ({ to, children, className }) => (
  <a href={to} className={className} onClick={(e) => e.preventDefault()}>
    {children}
  </a>
)

export default function Register() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "patient",
    phone: "",
    dateOfBirth: "",
    licenseNumber: "",
    specialization: "",
    pharmacyName: "",
    acceptTerms: false,
    subscribeNewsletter: true
  })

  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [errors, setErrors] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  const [passwordStrength, setPasswordStrength] = useState(0)

  const roleOptions = [
    { value: "patient", label: "Patient", icon: User, description: "Access medical services and book appointments", color: "bg-blue-500" },
    { value: "doctor", label: "Doctor", icon: Stethoscope, description: "Provide medical consultations and manage patients", color: "bg-green-500" },
    { value: "pharmacy", label: "Pharmacy", icon: Building2, description: "Manage pharmacy operations and prescriptions", color: "bg-purple-500" }
  ]

  const calculatePasswordStrength = (password) => {
    let strength = 0
    if (password.length >= 8) strength++
    if (/[a-z]/.test(password)) strength++
    if (/[A-Z]/.test(password)) strength++
    if (/[0-9]/.test(password)) strength++
    if (/[^A-Za-z0-9]/.test(password)) strength++
    return strength
  }

  const validateForm = () => {
    const newErrors = {}
    if (!form.firstName.trim()) newErrors.firstName = "First name is required"
    if (!form.lastName.trim()) newErrors.lastName = "Last name is required"
    if (!form.email.trim()) newErrors.email = "Email is required"
    else if (!/\S+@\S+\.\S+/.test(form.email)) newErrors.email = "Please enter a valid email"
    if (!form.password) newErrors.password = "Password is required"
    else if (form.password.length < 8) newErrors.password = "Password must be at least 8 characters"
    if (form.password !== form.confirmPassword) newErrors.confirmPassword = "Passwords don't match"
    if (!form.phone.trim()) newErrors.phone = "Phone number is required"
    else if (!/^\+?[\d\s-()]+$/.test(form.phone)) newErrors.phone = "Please enter a valid phone number"
    if (!form.dateOfBirth) newErrors.dateOfBirth = "Date of birth is required"
    if (form.role === "doctor" && !form.licenseNumber.trim()) newErrors.licenseNumber = "Medical license number is required for doctors"
    if (form.role === "doctor" && !form.specialization.trim()) newErrors.specialization = "Specialization is required for doctors"
    if (form.role === "pharmacy" && !form.pharmacyName.trim()) newErrors.pharmacyName = "Pharmacy name is required"
    if (!form.acceptTerms) newErrors.acceptTerms = "Please accept the terms and conditions"
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    const newValue = type === "checkbox" ? checked : value
    setForm({ ...form, [name]: newValue })
    if (errors[name]) setErrors({ ...errors, [name]: "" })
    if (name === "password") setPasswordStrength(calculatePasswordStrength(value))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validateForm()) return
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      alert(`✅ Account created successfully for ${form.firstName} ${form.lastName} as ${form.role}!\n\nA verification email has been sent to ${form.email}`)
    }, 2000)
  }

  const getPasswordStrengthColor = () => {
    if (passwordStrength <= 2) return "bg-red-500"
    if (passwordStrength <= 3) return "bg-yellow-500"
    if (passwordStrength <= 4) return "bg-blue-500"
    return "bg-green-500"
  }

  const getPasswordStrengthText = () => {
    if (passwordStrength <= 2) return "Weak"
    if (passwordStrength <= 3) return "Fair"
    if (passwordStrength <= 4) return "Good"
    return "Strong"
  }

  const selectedRole = roleOptions.find(role => role.value === form.role)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 py-8 px-4">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 mb-4">
          <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
            <Heart className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900">HealthCare Plus</h1>
        </div>
        <p className="text-gray-600">Join our healthcare community today</p>
      </div>

      <div className="max-w-2xl mx-auto">
        <div className="bg-white shadow-2xl rounded-2xl overflow-hidden">
          {/* Role Selection Header */}
          <div className="bg-gray-50 p-6 border-b">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">Create Your Account</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {roleOptions.map((role) => {
                const IconComponent = role.icon
                return (
                  <label
                    key={role.value}
                    className={`cursor-pointer p-4 border-2 rounded-lg transition-all duration-200 ${
                      form.role === role.value
                        ? 'border-blue-500 bg-blue-50 shadow-md'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <input
                      type="radio"
                      name="role"
                      value={role.value}
                      checked={form.role === role.value}
                      onChange={handleChange}
                      className="sr-only"
                    />
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 ${role.color} rounded-lg flex items-center justify-center`}>
                        <IconComponent className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{role.label}</h3>
                        <p className="text-xs text-gray-600 mt-1">{role.description}</p>
                      </div>
                    </div>
                  </label>
                )
              })}
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="p-6 space-y-6">
            {/* Personal Information */}
            {/* ... all your inputs unchanged ... */}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold py-4 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Creating Account...
                </>
              ) : (
                <>
                  <Plus className="w-5 h-5" />
                  Create {selectedRole?.label} Account
                </>
              )}
            </button>

            {/* Login Link */}
            <p className="text-center text-gray-600">
              Already have an account?{" "}
              <Link 
                to="/login" 
                className="text-blue-600 hover:text-blue-700 font-medium hover:underline transition-colors"
              >
                Sign in here
              </Link>
            </p>
          </form>

          {/* Security Notice */}
          <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <Shield className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
              <div className="text-sm text-blue-800">
                <p className="font-medium mb-1">Your data is secure</p>
                <p>We use industry-standard encryption to protect your personal and medical information. Your privacy is our top priority.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

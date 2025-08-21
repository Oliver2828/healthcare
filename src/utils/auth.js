// Simple mock auth
export const login = (email, password) => {
  if (email === "test@test.com" && password === "123456") {
    localStorage.setItem("user", JSON.stringify({ email, role: "patient" }))
    return true
  }
  return false
}

export const register = (user) => {
  localStorage.setItem("user", JSON.stringify(user))
  return true
}

export const logout = () => {
  localStorage.removeItem("user")
}

export const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"))
}

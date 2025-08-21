import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-center py-6 mt-10 border-t">
      <p className="text-gray-600">
        &copy; {new Date().getFullYear()} HealthMarket. All rights reserved.
      </p>
    </footer>
  )
}
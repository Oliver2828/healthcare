import React, { useState } from "react"
import { ShoppingCart, Plus, Minus, Trash2, ArrowLeft } from "lucide-react"

// Enhanced Cart Item Component
function CartItem({ item, onUpdateQuantity, onRemove }) {
  return (
    <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
      <div className="flex items-center space-x-4">
        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
          <ShoppingCart className="w-6 h-6 text-blue-600" />
        </div>
        <div>
          <h3 className="font-semibold text-gray-800">{item.name}</h3>
          <p className="text-sm text-gray-600">₦{item.price.toLocaleString()}</p>
        </div>
      </div>
      
      <div className="flex items-center space-x-3">
        <div className="flex items-center space-x-2 bg-gray-100 rounded-lg p-1">
          <button 
            onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
            className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-gray-200 transition-colors"
            disabled={item.quantity <= 1}
          >
            <Minus className="w-4 h-4" />
          </button>
          <span className="w-8 text-center font-semibold">{item.quantity}</span>
          <button 
            onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
            className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-gray-200 transition-colors"
          >
            <Plus className="w-4 h-4" />
          </button>
        </div>
        
        <div className="text-right">
          <p className="font-bold text-gray-800">₦{(item.price * item.quantity).toLocaleString()}</p>
        </div>
        
        <button 
          onClick={() => onRemove(item.id)}
          className="w-8 h-8 flex items-center justify-center text-red-500 hover:bg-red-50 rounded-md transition-colors"
        >
          <Trash2 className="w-4 h-4" />
        </button>
      </div>
    </div>
  )
}

// Enhanced Cart Component
function Cart({ items, onUpdateQuantity, onRemove }) {
  const total = items.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  
  if (items.length === 0) {
    return (
      <div className="text-center py-12">
        <ShoppingCart className="w-16 h-16 mx-auto text-gray-400 mb-4" />
        <h3 className="text-xl font-semibold text-gray-600 mb-2">Your cart is empty</h3>
        <p className="text-gray-500">Add some items to get started!</p>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      <div className="space-y-3">
        {items.map((item) => (
          <CartItem 
            key={item.id} 
            item={item} 
            onUpdateQuantity={onUpdateQuantity}
            onRemove={onRemove}
          />
        ))}
      </div>
      
      {/* Order Summary */}
      <div className="mt-8 p-6 bg-gray-50 rounded-lg border">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Order Summary</h3>
        <div className="space-y-2">
          <div className="flex justify-between text-gray-600">
            <span>Subtotal ({items.length} items)</span>
            <span>₦{total.toLocaleString()}</span>
          </div>
          <div className="flex justify-between text-gray-600">
            <span>Delivery Fee</span>
            <span>₦{total > 5000 ? 0 : 500}</span>
          </div>
          <hr className="my-3" />
          <div className="flex justify-between text-lg font-bold text-gray-800">
            <span>Total</span>
            <span>₦{(total + (total > 5000 ? 0 : 500)).toLocaleString()}</span>
          </div>
        </div>
        
        {total > 0 && total < 5000 && (
          <div className="mt-3 p-3 bg-blue-50 rounded-lg">
            <p className="text-sm text-blue-700">
              Add ₦{(5000 - total).toLocaleString()} more to get free delivery!
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default function CartPage() {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Paracetamol", price: 500, quantity: 2 },
    { id: 2, name: "Vitamin C", price: 1000, quantity: 1 },
    { id: 3, name: "Ibuprofen", price: 750, quantity: 1 },
  ])

  const handleUpdateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return
    setCartItems(items => 
      items.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    )
  }

  const handleRemoveItem = (id) => {
    setCartItems(items => items.filter(item => item.id !== id))
  }

  const handleGoBack = () => {
    // You can replace this with your actual navigation logic
    window.history.back()
  }

  const handleCheckout = () => {
    // Add your checkout logic here
    alert('Proceeding to checkout...')
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center space-x-4">
            <button 
              onClick={handleGoBack}
              className="flex items-center justify-center w-10 h-10 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div>
              <h1 className="text-2xl font-bold text-gray-800">Shopping Cart</h1>
              <p className="text-gray-600">{cartItems.length} items in your cart</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <Cart 
              items={cartItems} 
              onUpdateQuantity={handleUpdateQuantity}
              onRemove={handleRemoveItem}
            />
          </div>

          {/* Checkout Section */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <div className="bg-white rounded-lg shadow-sm border p-6">
                <h3 className="text-lg font-semibold mb-4">Quick Checkout</h3>
                <button 
                  onClick={handleCheckout}
                  disabled={cartItems.length === 0}
                  className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed font-semibold"
                >
                  Proceed to Checkout
                </button>
                <p className="text-xs text-gray-500 text-center mt-3">
                  Secure checkout with SSL encryption
                </p>
              </div>

              {/* Additional Info */}
              <div className="mt-6 bg-white rounded-lg shadow-sm border p-6">
                <h4 className="font-semibold mb-3">Why shop with us?</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>✓ Fast delivery within 24 hours</li>
                  <li>✓ Authentic medications only</li>
                  <li>✓ Licensed pharmacists available</li>
                  <li>✓ Free delivery on orders over ₦5,000</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
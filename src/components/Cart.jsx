import React from "react"
export default function Cart({ items }) {
  const total = items.reduce((sum, item) => sum + item.price, 0)

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4">Cart</h2>
      {items.length === 0 ? (
        <p className="text-gray-600">Your cart is empty</p>
      ) : (
        <>
          <ul className="mb-4">
            {items.map((item, i) => (
              <li key={i} className="flex justify-between py-2 border-b">
                <span>{item.name}</span>
                <span>₦{item.price}</span>
              </li>
            ))}
          </ul>
          <p className="font-semibold mb-4">Total: ₦{total}</p>
          <button className="bg-green-600 text-white px-4 py-2 rounded-lg w-full">
            Proceed to Checkout
          </button>
        </>
      )}
    </div>
  )
}

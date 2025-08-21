import React, { useState } from "react"
import { Search, Filter, Star, ShoppingCart, Pill, Heart, Eye } from "lucide-react"

// Enhanced ProductCard component
function ProductCard({ name, price, originalPrice, rating, reviews, description, category, inStock, image, discount }) {
  const [isWishlisted, setIsWishlisted] = useState(false)
  
  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 overflow-hidden">
      {/* Product Image */}
      <div className="relative bg-gradient-to-br from-blue-50 to-green-50 h-48 flex items-center justify-center">
        <div className="w-20 h-20 bg-white rounded-full shadow-md flex items-center justify-center">
          <Pill className="w-10 h-10 text-blue-600" />
        </div>
        
        {/* Discount Badge */}
        {discount && (
          <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
            -{discount}%
          </div>
        )}
        
        {/* Stock Status */}
        <div className={`absolute top-3 right-3 px-2 py-1 rounded-full text-xs font-medium ${
          inStock ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
        }`}>
          {inStock ? 'In Stock' : 'Out of Stock'}
        </div>
        
        {/* Wishlist Button */}
        <button 
          onClick={() => setIsWishlisted(!isWishlisted)}
          className="absolute bottom-3 right-3 p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-200"
        >
          <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-red-500 text-red-500' : 'text-gray-400'}`} />
        </button>
      </div>
      
      {/* Product Info */}
      <div className="p-5">
        {/* Category */}
        <div className="text-xs text-blue-600 font-medium uppercase tracking-wide mb-2">
          {category}
        </div>
        
        {/* Product Name */}
        <h3 className="font-bold text-lg text-gray-900 mb-2 line-clamp-2">
          {name}
        </h3>
        
        {/* Description */}
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
          {description}
        </p>
        
        {/* Rating */}
        <div className="flex items-center gap-2 mb-3">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className={`w-4 h-4 ${i < Math.floor(rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
              />
            ))}
          </div>
          <span className="text-sm text-gray-600">({reviews} reviews)</span>
        </div>
        
        {/* Price */}
        <div className="flex items-center gap-2 mb-4">
          <span className="text-2xl font-bold text-green-600">₦{price.toLocaleString()}</span>
          {originalPrice && (
            <span className="text-sm text-gray-500 line-through">₦{originalPrice.toLocaleString()}</span>
          )}
        </div>
        
        {/* Action Buttons */}
        <div className="flex gap-2">
          <button 
            disabled={!inStock}
            className={`flex-1 py-2.5 px-4 rounded-lg font-medium transition-all duration-200 flex items-center justify-center gap-2 ${
              inStock 
                ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-md hover:shadow-lg' 
                : 'bg-gray-200 text-gray-500 cursor-not-allowed'
            }`}
          >
            <ShoppingCart className="w-4 h-4" />
            Add to Cart
          </button>
          <button className="p-2.5 border border-gray-300 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-all duration-200">
            <Eye className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default function Products() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  
  const products = [
    { 
      name: "Paracetamol 500mg Tablets", 
      price: 500, 
      originalPrice: 600,
      rating: 4.5, 
      reviews: 124,
      description: "Fast-acting pain relief and fever reducer. Pack of 20 tablets.",
      category: "Pain Relief",
      inStock: true,
      discount: 17
    },
    { 
      name: "Vitamin C 1000mg Chewable", 
      price: 1000,
      originalPrice: null,
      rating: 4.8, 
      reviews: 89,
      description: "Immune system support with natural orange flavor. 30 tablets.",
      category: "Vitamins",
      inStock: true,
      discount: null
    },
    { 
      name: "Cough Syrup - Honey & Lemon", 
      price: 1500,
      originalPrice: 1800,
      rating: 4.2, 
      reviews: 56,
      description: "Soothing cough relief with natural honey and lemon. 200ml bottle.",
      category: "Cold & Flu",
      inStock: false,
      discount: 17
    },
    {
      name: "Multivitamin Complex",
      price: 2500,
      originalPrice: null,
      rating: 4.6,
      reviews: 203,
      description: "Complete daily nutrition with 25 essential vitamins and minerals.",
      category: "Vitamins",
      inStock: true,
      discount: null
    },
    {
      name: "Ibuprofen 400mg Tablets",
      price: 750,
      originalPrice: 900,
      rating: 4.4,
      reviews: 145,
      description: "Anti-inflammatory pain relief. Effective for headaches and joint pain.",
      category: "Pain Relief",
      inStock: true,
      discount: 17
    },
    {
      name: "Antihistamine Tablets",
      price: 1200,
      originalPrice: null,
      rating: 4.3,
      reviews: 78,
      description: "Fast relief from allergies and hay fever symptoms. 30 tablets.",
      category: "Allergy",
      inStock: true,
      discount: null
    }
  ]
  
  const categories = ["all", "Pain Relief", "Vitamins", "Cold & Flu", "Allergy"]
  
  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-3">
              Pharmacy <span className="text-blue-600">Medicines</span>
            </h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Quality healthcare products delivered to your doorstep. Licensed pharmacy with genuine medications.
            </p>
          </div>
          
          {/* Search and Filter Section */}
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search medicines..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              />
            </div>
            
            {/* Category Filter */}
            <div className="flex items-center gap-3">
              <Filter className="text-gray-500 w-5 h-5" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="py-3 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none bg-white"
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category === "all" ? "All Categories" : category}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>
      
      {/* Products Section */}
      <div className="max-w-7xl mx-auto px-4 py-10">
        {/* Results Info */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredProducts.length} of {products.length} products
            {selectedCategory !== "all" && ` in ${selectedCategory}`}
            {searchTerm && ` matching "${searchTerm}"`}
          </p>
        </div>
        
        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
        
        {/* No Results */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No products found</h3>
            <p className="text-gray-600">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>
      
      {/* Trust Badges */}
      <div className="bg-white border-t mt-16">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="flex items-center justify-center gap-3">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <Pill className="w-6 h-6 text-green-600" />
              </div>
              <div className="text-left">
                <h4 className="font-semibold text-gray-900">Licensed Pharmacy</h4>
                <p className="text-sm text-gray-600">Genuine medications only</p>
              </div>
            </div>
            
            <div className="flex items-center justify-center gap-3">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <ShoppingCart className="w-6 h-6 text-blue-600" />
              </div>
              <div className="text-left">
                <h4 className="font-semibold text-gray-900">Free Delivery</h4>
                <p className="text-sm text-gray-600">Orders above ₦5,000</p>
              </div>
            </div>
            
            <div className="flex items-center justify-center gap-3">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                <Heart className="w-6 h-6 text-purple-600" />
              </div>
              <div className="text-left">
                <h4 className="font-semibold text-gray-900">24/7 Support</h4>
                <p className="text-sm text-gray-600">Expert pharmacist advice</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
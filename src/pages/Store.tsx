import React, { useState } from 'react';
import { ShoppingCart, Heart, Star, Filter, Grid, List } from 'lucide-react';

const Store = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('popularity');

  const books = [
    {
      id: '1',
      title: 'The Future of Technology',
      author: 'Dr. Sarah Mitchell',
      price: 29.99,
      originalPrice: 39.99,
      rating: 4.8,
      reviews: 124,
      category: 'Technology',
      cover: 'https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Explore the cutting-edge technologies that will shape our future, from AI to quantum computing.',
      bestseller: true,
      onSale: true,
    },
    {
      id: '2',
      title: 'Modern JavaScript Mastery',
      author: 'Alex Rodriguez',
      price: 24.99,
      originalPrice: null,
      rating: 4.9,
      reviews: 89,
      category: 'Programming',
      cover: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Master modern JavaScript concepts, ES6+, and popular frameworks like React and Vue.',
      bestseller: false,
      onSale: false,
    },
    {
      id: '3',
      title: 'Business Strategy Guide',
      author: 'Michael Chen',
      price: 34.99,
      originalPrice: 44.99,
      rating: 4.7,
      reviews: 156,
      category: 'Business',
      cover: 'https://images.pexels.com/photos/1181472/pexels-photo-1181472.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Comprehensive guide to developing and implementing effective business strategies.',
      bestseller: true,
      onSale: true,
    },
    {
      id: '4',
      title: 'The Art of Science',
      author: 'Dr. Emily Watson',
      price: 19.99,
      originalPrice: null,
      rating: 4.6,
      reviews: 203,
      category: 'Science',
      cover: 'https://images.pexels.com/photos/1181216/pexels-photo-1181216.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Discover the beauty and wonder of scientific discovery through engaging narratives.',
      bestseller: false,
      onSale: false,
    },
    {
      id: '5',
      title: 'Digital Marketing Revolution',
      author: 'Jessica Brown',
      price: 27.99,
      originalPrice: 32.99,
      rating: 4.5,
      reviews: 78,
      category: 'Marketing',
      cover: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Navigate the ever-changing landscape of digital marketing and social media.',
      bestseller: false,
      onSale: true,
    },
    {
      id: '6',
      title: 'The Learning Mind',
      author: 'Prof. David Kim',
      price: 22.99,
      originalPrice: null,
      rating: 4.8,
      reviews: 167,
      category: 'Education',
      cover: 'https://images.pexels.com/photos/1181345/pexels-photo-1181345.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Understand how the mind learns and retains information for better education.',
      bestseller: true,
      onSale: false,
    },
  ];

  const sortOptions = [
    { value: 'popularity', label: 'Most Popular' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
    { value: 'rating', label: 'Highest Rated' },
    { value: 'newest', label: 'Newest First' },
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 animate-fadeInUp">
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Book <span className="gradient-text">Store</span>
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Purchase and own your favorite books. Enjoy unlimited access to your digital library 
            with our secure and convenient platform.
          </p>
        </div>

        {/* Filters and Controls */}
        <div className="flex flex-col lg:flex-row justify-between items-center mb-8 space-y-4 lg:space-y-0 animate-slideInUp animate-delay-200">
          <div className="flex items-center space-x-4">
            <span className="text-slate-600 dark:text-slate-400">
              {books.length} books available
            </span>
          </div>

          <div className="flex items-center space-x-4">
            {/* Sort */}
            <div className="flex items-center space-x-2">
              <Filter className="h-5 w-5 text-slate-400" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm"
              >
                {sortOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center bg-slate-100 dark:bg-slate-800 rounded-lg p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-md transition-colors duration-200 ${
                  viewMode === 'grid'
                    ? 'bg-white dark:bg-slate-700 text-blue-600 shadow-sm'
                    : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'
                }`}
              >
                <Grid className="h-4 w-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-md transition-colors duration-200 ${
                  viewMode === 'list'
                    ? 'bg-white dark:bg-slate-700 text-blue-600 shadow-sm'
                    : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'
                }`}
              >
                <List className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Books Grid/List */}
        <div className={`${
          viewMode === 'grid' 
            ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' 
            : 'space-y-6'
        }`}>
          {books.map((book, index) => (
            <div
              key={book.id}
              className={`group bg-white dark:bg-slate-800 rounded-xl shadow-lg hover-lift animate-fadeInUp animate-delay-${(index + 1) * 100} ${
                viewMode === 'list' ? 'flex overflow-hidden' : 'overflow-hidden'
              }`}
            >
              {/* Book Cover */}
              <div className={`relative ${viewMode === 'list' ? 'w-48 flex-shrink-0' : ''}`}>
                <img
                  src={book.cover}
                  alt={book.title}
                  className={`object-cover group-hover:scale-105 transition-transform duration-500 ${
                    viewMode === 'list' ? 'w-full h-full' : 'w-full h-48'
                  }`}
                />
                
                {/* Badges */}
                <div className="absolute top-3 left-3 space-y-1">
                  {book.bestseller && (
                    <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                      Bestseller
                    </span>
                  )}
                  {book.onSale && (
                    <span className="bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                      Sale
                    </span>
                  )}
                </div>

                {/* Favorite Button */}
                <button className="absolute top-3 right-3 p-2 bg-white dark:bg-slate-800 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-red-50 dark:hover:bg-red-900">
                  <Heart className="h-4 w-4 text-slate-400 hover:text-red-500" />
                </button>

                {/* Rating Badge */}
                <div className="absolute bottom-3 left-3 flex items-center space-x-1 bg-black bg-opacity-50 text-white text-xs px-2 py-1 rounded-full">
                  <Star className="h-3 w-3 fill-current text-yellow-400" />
                  <span>{book.rating}</span>
                </div>
              </div>

              {/* Book Details */}
              <div className={`p-6 ${viewMode === 'list' ? 'flex-1 flex flex-col justify-between' : ''}`}>
                <div className={viewMode === 'list' ? 'flex-1' : ''}>
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                      {book.title}
                    </h3>
                  </div>
                  
                  <p className="text-slate-600 dark:text-slate-400 text-sm mb-2">
                    by {book.author}
                  </p>

                  <div className="flex items-center space-x-2 mb-3">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < Math.floor(book.rating)
                              ? 'text-yellow-400 fill-current'
                              : 'text-slate-300 dark:text-slate-600'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-slate-500 dark:text-slate-400">
                      ({book.reviews} reviews)
                    </span>
                  </div>

                  <p className="text-slate-700 dark:text-slate-300 text-sm mb-4 line-clamp-2">
                    {book.description}
                  </p>

                  <span className="inline-block text-xs bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400 px-2 py-1 rounded-full mb-4">
                    {book.category}
                  </span>
                </div>

                {/* Price and Actions */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-slate-900 dark:text-white">
                      ${book.price}
                    </span>
                    {book.originalPrice && (
                      <span className="text-sm text-slate-500 line-through">
                        ${book.originalPrice}
                      </span>
                    )}
                  </div>
                  
                  <button className="flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                    <ShoppingCart className="h-4 w-4" />
                    <span>Add to Cart</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center bg-gradient-to-r from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-700 rounded-2xl p-8 animate-fadeInUp">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
            Special Offer for New Customers
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mb-6">
            Get 20% off your first purchase with code WELCOME20. Valid for all books in our store.
          </p>
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg inline-block font-mono text-lg">
            WELCOME20
          </div>
        </div>
      </div>
    </div>
  );
};

export default Store;
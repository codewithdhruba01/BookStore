import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, Star, Clock, BookOpen } from 'lucide-react';

const Books = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Books' },
    { id: 'fiction', name: 'Fiction' },
    { id: 'non-fiction', name: 'Non-Fiction' },
    { id: 'science', name: 'Science' },
    { id: 'technology', name: 'Technology' },
    { id: 'business', name: 'Business' },
    { id: 'education', name: 'Education' },
  ];

  const books = [
    {
      id: '1',
      title: 'The Future of Technology',
      author: 'Dr. Sarah Mitchell',
      category: 'technology',
      rating: 4.8,
      readTime: '6 hours',
      pages: 324,
      cover: 'https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Explore the cutting-edge technologies that will shape our future.',
      isPremium: true,
    },
    {
      id: '2',
      title: 'Modern JavaScript Mastery',
      author: 'Alex Rodriguez',
      category: 'technology',
      rating: 4.9,
      readTime: '8 hours',
      pages: 456,
      cover: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Master modern JavaScript concepts and frameworks.',
      isPremium: false,
    },
    {
      id: '3',
      title: 'Business Strategy Guide',
      author: 'Michael Chen',
      category: 'business',
      rating: 4.7,
      readTime: '5 hours',
      pages: 278,
      cover: 'https://images.pexels.com/photos/1181472/pexels-photo-1181472.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Learn effective business strategies for the modern world.',
      isPremium: true,
    },
    {
      id: '4',
      title: 'The Art of Science',
      author: 'Dr. Emily Watson',
      category: 'science',
      rating: 4.6,
      readTime: '7 hours',
      pages: 389,
      cover: 'https://images.pexels.com/photos/1181216/pexels-photo-1181216.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Discover the beauty and wonder of scientific discovery.',
      isPremium: false,
    },
    {
      id: '5',
      title: 'Digital Marketing Revolution',
      author: 'Jessica Brown',
      category: 'business',
      rating: 4.5,
      readTime: '4 hours',
      pages: 245,
      cover: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Navigate the ever-changing landscape of digital marketing.',
      isPremium: true,
    },
    {
      id: '6',
      title: 'The Learning Mind',
      author: 'Prof. David Kim',
      category: 'education',
      rating: 4.8,
      readTime: '6 hours',
      pages: 312,
      cover: 'https://images.pexels.com/photos/1181345/pexels-photo-1181345.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Understand how the mind learns and retains information.',
      isPremium: false,
    },
  ];

  const filteredBooks = books.filter(book => {
    const matchesSearch = book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         book.author.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || book.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 animate-fadeInUp">
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Our <span className="gradient-text">Book Collection</span>
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Discover thousands of books across various categories. From technology to business, 
            find your next great read in our secure digital library.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col lg:flex-row gap-4 mb-8 animate-slideInUp animate-delay-200">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
            <input
              type="text"
              placeholder="Search books or authors..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
            />
          </div>
          <div className="flex items-center gap-2">
            <Filter className="h-5 w-5 text-slate-400" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
            >
              {categories.map(category => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Books Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBooks.map((book, index) => (
            <Link
              key={book.id}
              to={`/book/${book.id}`}
              className={`group bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-lg hover-lift animate-fadeInUp animate-delay-${(index + 1) * 100}`}
            >
              <div className="relative">
                <img
                  src={book.cover}
                  alt={book.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {book.isPremium && (
                  <div className="absolute top-3 right-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                    Premium
                  </div>
                )}
                <div className="absolute bottom-3 left-3 flex items-center space-x-1 bg-black bg-opacity-50 text-white text-xs px-2 py-1 rounded-full">
                  <Star className="h-3 w-3 fill-current text-yellow-400" />
                  <span>{book.rating}</span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {book.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-3">
                  by {book.author}
                </p>
                <p className="text-slate-700 dark:text-slate-300 text-sm mb-4 line-clamp-2">
                  {book.description}
                </p>

                <div className="flex items-center justify-between text-sm text-slate-500 dark:text-slate-400">
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{book.readTime}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <BookOpen className="h-4 w-4" />
                    <span>{book.pages} pages</span>
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xs bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400 px-2 py-1 rounded-full capitalize">
                    {book.category.replace('-', ' ')}
                  </span>
                  <span className="text-blue-600 dark:text-blue-400 text-sm font-medium group-hover:underline">
                    Read Now →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* No Results */}
        {filteredBooks.length === 0 && (
          <div className="text-center py-12 animate-fadeInUp">
            <BookOpen className="h-16 w-16 text-slate-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
              No books found
            </h3>
            <p className="text-slate-600 dark:text-slate-400">
              Try adjusting your search terms or category filter.
            </p>
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-16 text-center bg-gradient-to-r from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-700 rounded-2xl p-8 animate-fadeInUp">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
            Can't find what you're looking for?
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mb-6">
            We're constantly adding new books to our collection. Check back regularly or 
            contact us with your suggestions.
          </p>
          <Link
            to="/contact"
            className="btn-primary inline-flex items-center"
          >
            Request a Book
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Books;
import React, { useState } from 'react';
import { Search, Book, Shield, Zap, Users, HelpCircle, ExternalLink, CheckCircle } from 'lucide-react';

const Support = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Topics', icon: HelpCircle },
    { id: 'reading', name: 'Reading', icon: Book },
    { id: 'account', name: 'Account', icon: Users },
    { id: 'technical', name: 'Technical', icon: Zap },
    { id: 'security', name: 'Security', icon: Shield },
  ];

  const supportArticles = [
    {
      id: 1,
      title: 'Getting Started with BookVault',
      category: 'reading',
      description: 'Learn how to create an account, browse books, and start reading.',
      readTime: '5 min read',
      helpful: 89,
      updated: '2 days ago'
    },
    {
      id: 2,
      title: 'Understanding Security Features',
      category: 'security',
      description: 'Why we prevent screenshots and copying, and how it protects content.',
      readTime: '3 min read',
      helpful: 76,
      updated: '1 week ago'
    },
    {
      id: 3,
      title: 'Troubleshooting Reading Issues',
      category: 'technical',
      description: 'Solutions for books not loading, page navigation problems, and more.',
      readTime: '7 min read',
      helpful: 92,
      updated: '3 days ago'
    },
    {
      id: 4,
      title: 'Managing Your Account Settings',
      category: 'account',
      description: 'How to update your profile, change password, and manage preferences.',
      readTime: '4 min read',
      helpful: 68,
      updated: '5 days ago'
    },
    {
      id: 5,
      title: 'Using Dark Mode and Themes',
      category: 'reading',
      description: 'Customize your reading experience with themes and display options.',
      readTime: '2 min read',
      helpful: 84,
      updated: '1 week ago'
    },
    {
      id: 6,
      title: 'Browser Compatibility Guide',
      category: 'technical',
      description: 'Supported browsers and how to optimize your reading experience.',
      readTime: '6 min read',
      helpful: 71,
      updated: '2 weeks ago'
    }
  ];

  const quickSolutions = [
    {
      problem: 'Book won\'t load',
      solution: 'Refresh the page or try a different browser',
      category: 'technical'
    },
    {
      problem: 'Can\'t login',
      solution: 'Check your email and password, or reset your password',
      category: 'account'
    },
    {
      problem: 'Dark mode not working',
      solution: 'Clear browser cache and toggle the theme switch',
      category: 'reading'
    },
    {
      problem: 'Pages loading slowly',
      solution: 'Check your internet connection and disable browser extensions',
      category: 'technical'
    }
  ];

  const filteredArticles = supportArticles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 animate-fadeInUp">
          <div className="flex justify-center mb-6">
            <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full">
              <HelpCircle className="h-8 w-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Help & Support
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Find answers, troubleshoot issues, and get the most out of your BookVault experience.
          </p>
        </div>

        {/* Search */}
        <div className="mb-8 animate-slideInUp animate-delay-200">
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
            <input
              type="text"
              placeholder="Search for help articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 text-lg border border-slate-300 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-lg"
            />
          </div>
        </div>

        {/* Quick Solutions */}
        <div className="mb-12 animate-slideInUp animate-delay-300">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 text-center">
            Quick Solutions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {quickSolutions.map((item, index) => (
              <div
                key={index}
                className={`bg-white dark:bg-slate-800 rounded-lg p-4 shadow-lg hover-lift animate-fadeInUp animate-delay-${(index + 1) * 100}`}
              >
                <h3 className="font-semibold text-slate-900 dark:text-white mb-2 text-sm">
                  {item.problem}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  {item.solution}
                </p>
                <div className="mt-2">
                  <span className="text-xs bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400 px-2 py-1 rounded-full capitalize">
                    {item.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-2 mb-8 animate-slideInUp animate-delay-400">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                  : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700'
              }`}
            >
              <category.icon className="h-4 w-4" />
              <span>{category.name}</span>
            </button>
          ))}
        </div>

        {/* Support Articles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredArticles.map((article, index) => (
            <div
              key={article.id}
              className={`bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg hover-lift animate-fadeInUp animate-delay-${(index + 1) * 100}`}
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white leading-tight">
                  {article.title}
                </h3>
                <ExternalLink className="h-4 w-4 text-slate-400 flex-shrink-0 ml-2" />
              </div>
              
              <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 leading-relaxed">
                {article.description}
              </p>
              
              <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 mb-4">
                <span>{article.readTime}</span>
                <span>Updated {article.updated}</span>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-xs bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400 px-2 py-1 rounded-full capitalize">
                  {article.category}
                </span>
                <div className="flex items-center space-x-1 text-sm text-green-600 dark:text-green-400">
                  <CheckCircle className="h-4 w-4" />
                  <span>{article.helpful}% helpful</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredArticles.length === 0 && (
          <div className="text-center py-12 animate-fadeInUp">
            <HelpCircle className="h-16 w-16 text-slate-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
              No articles found
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              Try adjusting your search terms or browse different categories.
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
              }}
              className="text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300 font-medium"
            >
              View all articles
            </button>
          </div>
        )}

        {/* Contact Support CTA */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-700 rounded-2xl p-8 text-center animate-fadeInUp animate-delay-500">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
            Still Need Help?
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mb-6 max-w-2xl mx-auto">
            Can't find what you're looking for? Our support team is ready to assist you with 
            personalized help for your specific issue.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 font-medium"
            >
              Contact Support
            </a>
            <a
              href="/community"
              className="bg-white dark:bg-slate-800 border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
            >
              Ask Community
            </a>
          </div>
        </div>

        {/* Popular Topics */}
        <div className="mt-16 animate-fadeInUp animate-delay-600">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 text-center">
            Popular Topics
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Account Setup',
              'Reading Problems',
              'Security Features',
              'Browser Issues',
              'Dark Mode',
              'Book Navigation',
              'Password Reset',
              'Mobile Reading'
            ].map((topic, index) => (
              <button
                key={topic}
                className={`px-4 py-2 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-full hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors text-sm shadow-md hover:shadow-lg animate-fadeInUp animate-delay-${600 + (index * 50)}`}
              >
                {topic}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
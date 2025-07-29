import React, { useState } from 'react';
import { MessageCircle, Users, Heart, Share2, Calendar, Bookmark, TrendingUp, Award } from 'lucide-react';

const Community = () => {
  const [activeTab, setActiveTab] = useState('discussions');

  const tabs = [
    { id: 'discussions', name: 'Discussions', icon: MessageCircle, count: 145 },
    { id: 'book-clubs', name: 'Book Clubs', icon: Users, count: 23 },
    { id: 'reviews', name: 'Reviews', icon: Heart, count: 892 },
    { id: 'events', name: 'Events', icon: Calendar, count: 8 },
  ];

  const discussions = [
    {
      id: 1,
      title: 'Best Science Fiction Books of 2024',
      author: 'Sarah Chen',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100',
      replies: 23,
      likes: 45,
      category: 'Science Fiction',
      timeAgo: '2 hours ago',
      trending: true,
    },
    {
      id: 2,
      title: 'Discussion: The Future of Technology - Chapter Analysis',
      author: 'Michael Rodriguez',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100',
      replies: 18,
      likes: 32,
      category: 'Technology',
      timeAgo: '4 hours ago',
      trending: false,
    },
    {
      id: 3,
      title: 'Reading Challenge: 50 Books in 2024',
      author: 'Emily Watson',
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100',
      replies: 67,
      likes: 89,
      category: 'Challenges',
      timeAgo: '6 hours ago',
      trending: true,
    },
    {
      id: 4,
      title: 'Book Recommendations for Business Strategy',
      author: 'David Kim',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100',
      replies: 12,
      likes: 28,
      category: 'Business',
      timeAgo: '8 hours ago',
      trending: false,
    },
  ];

  const bookClubs = [
    {
      id: 1,
      name: 'Tech Enthusiasts Reading Club',
      members: 234,
      currentBook: 'The Future of Technology',
      description: 'Exploring cutting-edge tech books and their implications for society.',
      avatar: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=100',
      nextMeeting: 'Jan 25, 2025',
    },
    {
      id: 2,
      name: 'Business Strategy Readers',
      members: 189,
      currentBook: 'Modern Leadership Principles',
      description: 'Discussing business books and sharing insights from industry leaders.',
      avatar: 'https://images.pexels.com/photos/1181472/pexels-photo-1181472.jpeg?auto=compress&cs=tinysrgb&w=100',
      nextMeeting: 'Jan 28, 2025',
    },
    {
      id: 3,
      name: 'Science & Innovation Circle',
      members: 156,
      currentBook: 'The Art of Science',
      description: 'Exploring scientific breakthroughs and their impact on our world.',
      avatar: 'https://images.pexels.com/photos/1181216/pexels-photo-1181216.jpeg?auto=compress&cs=tinysrgb&w=100',
      nextMeeting: 'Feb 2, 2025',
    },
  ];

  const topReviews = [
    {
      id: 1,
      bookTitle: 'The Future of Technology',
      reviewer: 'Alex Johnson',
      rating: 5,
      review: 'Absolutely brilliant insights into emerging technologies. A must-read for anyone interested in the future.',
      likes: 34,
      timeAgo: '1 day ago',
    },
    {
      id: 2,
      bookTitle: 'Modern JavaScript Mastery',
      reviewer: 'Jessica Brown',
      rating: 5,
      review: 'Perfect for developers looking to stay current with JavaScript trends. Clear explanations and practical examples.',
      likes: 28,
      timeAgo: '2 days ago',
    },
    {
      id: 3,
      bookTitle: 'Business Strategy Guide',
      reviewer: 'Mark Thompson',
      rating: 4,
      review: 'Comprehensive guide with real-world case studies. Some sections could be more concise, but overall excellent.',
      likes: 19,
      timeAgo: '3 days ago',
    },
  ];

  const events = [
    {
      id: 1,
      title: 'Virtual Author Meetup: Dr. Sarah Mitchell',
      date: 'January 30, 2025',
      time: '7:00 PM EST',
      attendees: 156,
      description: 'Join the author of "The Future of Technology" for an exclusive Q&A session.',
      type: 'Author Event',
    },
    {
      id: 2,
      title: 'BookVault Reading Marathon',
      date: 'February 15, 2025',
      time: '12:00 PM EST',
      attendees: 89,
      description: '24-hour global reading event with prizes and community challenges.',
      type: 'Community Event',
    },
    {
      id: 3,
      title: 'Tech Book Discussion Panel',
      date: 'February 28, 2025',
      time: '6:00 PM EST',
      attendees: 67,
      description: 'Panel discussion on the latest technology books and their impact.',
      type: 'Discussion',
    },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'discussions':
        return (
          <div className="space-y-6">
            {discussions.map((discussion, index) => (
              <div
                key={discussion.id}
                className={`bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg hover-lift animate-fadeInUp animate-delay-${(index + 1) * 100}`}
              >
                <div className="flex items-start space-x-4">
                  <img
                    src={discussion.avatar}
                    alt={discussion.author}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="flex items-center space-x-2 mb-1">
                          <h3 className="text-lg font-semibold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer">
                            {discussion.title}
                          </h3>
                          {discussion.trending && (
                            <span className="bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs px-2 py-1 rounded-full flex items-center">
                              <TrendingUp className="h-3 w-3 mr-1" />
                              Trending
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          by {discussion.author} • {discussion.timeAgo}
                        </p>
                      </div>
                      <span className="text-xs bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400 px-2 py-1 rounded-full">
                        {discussion.category}
                      </span>
                    </div>
                    <div className="flex items-center space-x-6 mt-4 text-sm text-slate-500 dark:text-slate-400">
                      <div className="flex items-center space-x-1">
                        <MessageCircle className="h-4 w-4" />
                        <span>{discussion.replies} replies</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Heart className="h-4 w-4" />
                        <span>{discussion.likes} likes</span>
                      </div>
                      <button className="flex items-center space-x-1 hover:text-blue-500 transition-colors">
                        <Share2 className="h-4 w-4" />
                        <span>Share</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        );

      case 'book-clubs':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {bookClubs.map((club, index) => (
              <div
                key={club.id}
                className={`bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg hover-lift animate-fadeInUp animate-delay-${(index + 1) * 100}`}
              >
                <div className="flex items-center space-x-4 mb-4">
                  <img
                    src={club.avatar}
                    alt={club.name}
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                      {club.name}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      {club.members} members
                    </p>
                  </div>
                </div>
                <p className="text-slate-700 dark:text-slate-300 text-sm mb-4">
                  {club.description}
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-600 dark:text-slate-400">Current Book:</span>
                    <span className="text-slate-900 dark:text-white font-medium">
                      {club.currentBook}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-600 dark:text-slate-400">Next Meeting:</span>
                    <span className="text-blue-600 dark:text-blue-400 font-medium">
                      {club.nextMeeting}
                    </span>
                  </div>
                </div>
                <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 px-4 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                  Join Club
                </button>
              </div>
            ))}
          </div>
        );

      case 'reviews':
        return (
          <div className="space-y-6">
            {topReviews.map((review, index) => (
              <div
                key={review.id}
                className={`bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg hover-lift animate-fadeInUp animate-delay-${(index + 1) * 100}`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-1">
                      {review.bookTitle}
                    </h3>
                    <div className="flex items-center space-x-2">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <span
                            key={i}
                            className={`text-lg ${
                              i < review.rating
                                ? 'text-yellow-400'
                                : 'text-slate-300 dark:text-slate-600'
                            }`}
                          >
                            ★
                          </span>
                        ))}
                      </div>
                      <span className="text-sm text-slate-600 dark:text-slate-400">
                        by {review.reviewer} • {review.timeAgo}
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-slate-700 dark:text-slate-300 mb-4 leading-relaxed">
                  {review.review}
                </p>
                <div className="flex items-center space-x-4 text-sm text-slate-500 dark:text-slate-400">
                  <button className="flex items-center space-x-1 hover:text-red-500 transition-colors">
                    <Heart className="h-4 w-4" />
                    <span>{review.likes} likes</span>
                  </button>
                  <button className="flex items-center space-x-1 hover:text-blue-500 transition-colors">
                    <Share2 className="h-4 w-4" />
                    <span>Share</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        );

      case 'events':
        return (
          <div className="space-y-6">
            {events.map((event, index) => (
              <div
                key={event.id}
                className={`bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg hover-lift animate-fadeInUp animate-delay-${(index + 1) * 100}`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center space-x-2 mb-2">
                      <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                        {event.title}
                      </h3>
                      <span className="text-xs bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 px-2 py-1 rounded-full">
                        {event.type}
                      </span>
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-slate-600 dark:text-slate-400 mb-2">
                      <span>{event.date}</span>
                      <span>{event.time}</span>
                      <span>{event.attendees} attending</span>
                    </div>
                  </div>
                </div>
                <p className="text-slate-700 dark:text-slate-300 mb-4">
                  {event.description}
                </p>
                <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                  Join Event
                </button>
              </div>
            ))}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 animate-fadeInUp">
          <div className="flex justify-center mb-6">
            <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full">
              <Users className="h-8 w-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
            BookVault Community
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Connect with fellow readers, join book clubs, participate in discussions, 
            and discover your next favorite read through our vibrant community.
          </p>
        </div>

        {/* Community Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12 animate-slideInUp animate-delay-200">
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl p-6 text-white text-center">
            <Users className="h-8 w-8 mx-auto mb-2" />
            <div className="text-2xl font-bold">12.5K</div>
            <div className="text-blue-100">Active Members</div>
          </div>
          <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl p-6 text-white text-center">
            <MessageCircle className="h-8 w-8 mx-auto mb-2" />
            <div className="text-2xl font-bold">1.2K</div>
            <div className="text-purple-100">Discussions</div>
          </div>
          <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-xl p-6 text-white text-center">
            <Heart className="h-8 w-8 mx-auto mb-2" />
            <div className="text-2xl font-bold">8.9K</div>
            <div className="text-green-100">Book Reviews</div>
          </div>
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl p-6 text-white text-center">
            <Award className="h-8 w-8 mx-auto mb-2" />
            <div className="text-2xl font-bold">45</div>
            <div className="text-orange-100">Book Clubs</div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap gap-2 mb-8 animate-slideInUp animate-delay-300">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                  : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700'
              }`}
            >
              <tab.icon className="h-4 w-4" />
              <span>{tab.name}</span>
              <span className={`text-xs px-2 py-1 rounded-full ${
                activeTab === tab.id
                  ? 'bg-white/20 text-white'
                  : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400'
              }`}>
                {tab.count}
              </span>
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="animate-fadeInUp animate-delay-400">
          {renderContent()}
        </div>

        {/* Join Community CTA */}
        <div className="mt-16 text-center bg-gradient-to-r from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-700 rounded-2xl p-8 animate-fadeInUp animate-delay-500">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
            Ready to Join Our Community?
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mb-6">
            Connect with thousands of book lovers, share your thoughts, and discover amazing books 
            through our engaged community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 font-medium">
              Start a Discussion
            </button>
            <button className="bg-white dark:bg-slate-800 border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105">
              Browse Book Clubs
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;
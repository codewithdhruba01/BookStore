import React, { useState } from 'react';
import { Heart, Users, BookOpen, Star, Gift, CreditCard, Palette as PayPal, DollarSign } from 'lucide-react';

const Donations = () => {
  const [selectedAmount, setSelectedAmount] = useState(25);
  const [customAmount, setCustomAmount] = useState('');
  const [donationType, setDonationType] = useState<'one-time' | 'monthly'>('one-time');
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'paypal'>('card');

  const predefinedAmounts = [10, 25, 50, 100, 250];

  const impactLevels = [
    {
      amount: 10,
      title: 'Book Supporter',
      description: 'Helps maintain one book in our digital library for a month',
      icon: BookOpen,
      color: 'blue'
    },
    {
      amount: 25,
      title: 'Reader Advocate',
      description: 'Supports server costs and security features for better reading experience',
      icon: Users,
      color: 'green'
    },
    {
      amount: 50,
      title: 'Content Guardian',
      description: 'Funds advanced security measures to protect authors\' intellectual property',
      icon: Star,
      color: 'purple'
    },
    {
      amount: 100,
      title: 'Platform Champion',
      description: 'Enables new feature development and platform improvements',
      icon: Gift,
      color: 'orange'
    }
  ];

  const stats = [
    { number: '12,450', label: 'Total Supporters', icon: Users },
    { number: '$89,240', label: 'Raised This Year', icon: DollarSign },
    { number: '10,000+', label: 'Books Protected', icon: BookOpen },
    { number: '50K+', label: 'Readers Supported', icon: Heart }
  ];

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Monthly Supporter',
      message: 'BookVault has revolutionized how I read. Supporting this platform feels great knowing I\'m helping preserve digital literacy.',
      amount: '$25/month',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100'
    },
    {
      name: 'Michael Rodriguez',
      role: 'One-time Donor',
      message: 'The security features are impressive. Happy to contribute to a platform that truly respects authors\' rights.',
      amount: '$100',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100'
    },
    {
      name: 'Emily Watson',
      role: 'Annual Supporter',
      message: 'As an educator, I appreciate how BookVault makes quality books accessible while maintaining security.',
      amount: '$250/year',
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100'
    }
  ];

  const getCurrentImpact = () => {
    const amount = customAmount ? parseFloat(customAmount) : selectedAmount;
    return impactLevels.find(level => amount >= level.amount) || impactLevels[0];
  };

  const handleDonate = () => {
    const amount = customAmount ? parseFloat(customAmount) : selectedAmount;
    console.log(`Donating $${amount} as ${donationType} via ${paymentMethod}`);
    // In a real app, this would integrate with payment processors
  };

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-gradient-to-r from-pink-500 to-red-500 rounded-full">
              <Heart className="h-10 w-10 text-white" />
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Support BookVault
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Help us maintain a secure, accessible digital library for everyone. Your contribution 
            directly supports platform development, security features, and content protection.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16 animate-slideInUp animate-delay-200">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`bg-white dark:bg-slate-800 rounded-xl p-6 text-center shadow-lg hover-lift animate-fadeInUp animate-delay-${(index + 1) * 100}`}
            >
              <div className="flex justify-center mb-3">
                <stat.icon className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              </div>
              <div className="text-2xl font-bold text-slate-900 dark:text-white mb-1">
                {stat.number}
              </div>
              <div className="text-sm text-slate-600 dark:text-slate-400">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Donation Form */}
          <div className="animate-slideInLeft animate-delay-400">
            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                Make a Donation
              </h2>

              {/* Donation Type */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-3">
                  Donation Type
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => setDonationType('one-time')}
                    className={`p-3 rounded-lg border-2 transition-all duration-300 ${
                      donationType === 'one-time'
                        ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300'
                        : 'border-slate-300 dark:border-slate-600 hover:border-slate-400 dark:hover:border-slate-500'
                    }`}
                  >
                    One-time
                  </button>
                  <button
                    onClick={() => setDonationType('monthly')}
                    className={`p-3 rounded-lg border-2 transition-all duration-300 ${
                      donationType === 'monthly'
                        ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300'
                        : 'border-slate-300 dark:border-slate-600 hover:border-slate-400 dark:hover:border-slate-500'
                    }`}
                  >
                    Monthly
                  </button>
                </div>
              </div>

              {/* Amount Selection */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-3">
                  Amount (USD)
                </label>
                <div className="grid grid-cols-3 gap-3 mb-4">
                  {predefinedAmounts.map(amount => (
                    <button
                      key={amount}
                      onClick={() => {
                        setSelectedAmount(amount);
                        setCustomAmount('');
                      }}
                      className={`p-3 rounded-lg border-2 font-medium transition-all duration-300 ${
                        selectedAmount === amount && !customAmount
                          ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300'
                          : 'border-slate-300 dark:border-slate-600 hover:border-slate-400 dark:hover:border-slate-500 text-slate-900 dark:text-white'
                      }`}
                    >
                      ${amount}
                    </button>
                  ))}
                </div>
                <input
                  type="number"
                  placeholder="Custom amount"
                  value={customAmount}
                  onChange={(e) => setCustomAmount(e.target.value)}
                  className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-700 text-slate-900 dark:text-white"
                />
              </div>

              {/* Payment Method */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-3">
                  Payment Method
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => setPaymentMethod('card')}
                    className={`flex items-center justify-center space-x-2 p-3 rounded-lg border-2 transition-all duration-300 ${
                      paymentMethod === 'card'
                        ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300'
                        : 'border-slate-300 dark:border-slate-600 hover:border-slate-400 dark:hover:border-slate-500'
                    }`}
                  >
                    <CreditCard className="h-5 w-5" />
                    <span>Card</span>
                  </button>
                  <button
                    onClick={() => setPaymentMethod('paypal')}
                    className={`flex items-center justify-center space-x-2 p-3 rounded-lg border-2 transition-all duration-300 ${
                      paymentMethod === 'paypal'
                        ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300'
                        : 'border-slate-300 dark:border-slate-600 hover:border-slate-400 dark:hover:border-slate-500'
                    }`}
                  >
                    <PayPal className="h-5 w-5" />
                    <span>PayPal</span>
                  </button>
                </div>
              </div>

              {/* Impact Display */}
              <div className="mb-6 p-4 bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-lg border border-green-200 dark:border-green-800">
                <div className="flex items-center space-x-3">
                  <div className={`p-2 bg-gradient-to-r from-${getCurrentImpact().color}-500 to-${getCurrentImpact().color}-600 rounded-lg`}>
                    {React.createElement(getCurrentImpact().icon, { className: "h-5 w-5 text-white" })}
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900 dark:text-white">
                      {getCurrentImpact().title}
                    </div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">
                      {getCurrentImpact().description}
                    </div>
                  </div>
                </div>
              </div>

              {/* Donate Button */}
              <button
                onClick={handleDonate}
                className="w-full bg-gradient-to-r from-pink-500 to-red-500 text-white py-4 px-6 rounded-lg hover:from-pink-600 hover:to-red-600 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 transition-all duration-300 font-medium text-lg transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <Heart className="h-5 w-5" />
                <span>
                  Donate ${customAmount || selectedAmount} {donationType === 'monthly' ? '/month' : ''}
                </span>
              </button>

              <p className="text-xs text-slate-500 dark:text-slate-400 mt-4 text-center">
                Your donation is secure and processed through encrypted payment systems.
              </p>
            </div>
          </div>

          {/* Information Panel */}
          <div className="animate-slideInRight animate-delay-500">
            <div className="space-y-8">
              {/* Why Donate */}
              <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
                  Why Your Support Matters
                </h3>
                <ul className="space-y-3 text-slate-600 dark:text-slate-400">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Maintain secure servers and advanced security features</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Develop new features and improve user experience</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Protect authors' intellectual property rights</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Keep the platform accessible and ad-free</span>
                  </li>
                </ul>
              </div>

              {/* Impact Levels */}
              <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
                  Impact Levels
                </h3>
                <div className="space-y-4">
                  {impactLevels.map((level, index) => (
                    <div key={level.amount} className="flex items-start space-x-3">
                      <div className={`p-2 bg-gradient-to-r from-${level.color}-500 to-${level.color}-600 rounded-lg flex-shrink-0`}>
                        {React.createElement(level.icon, { className: "h-4 w-4 text-white" })}
                      </div>
                      <div>
                        <div className="font-medium text-slate-900 dark:text-white">
                          ${level.amount} - {level.title}
                        </div>
                        <div className="text-sm text-slate-600 dark:text-slate-400">
                          {level.description}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mt-16 animate-fadeInUp animate-delay-600">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 text-center">
            What Our Supporters Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.name}
                className={`bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg animate-fadeInUp animate-delay-${600 + (index * 100)}`}
              >
                <div className="flex items-center space-x-3 mb-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-slate-900 dark:text-white">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
                <p className="text-slate-700 dark:text-slate-300 text-sm mb-4 italic">
                  "{testimonial.message}"
                </p>
                <div className="text-sm font-medium text-green-600 dark:text-green-400">
                  Contributes {testimonial.amount}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Thank You Message */}
        <div className="mt-16 text-center bg-gradient-to-r from-pink-50 to-red-50 dark:from-pink-900/20 dark:to-red-900/20 rounded-2xl p-8 animate-fadeInUp animate-delay-700">
          <Heart className="h-12 w-12 text-pink-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
            Thank You for Your Support
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Every contribution, no matter the size, helps us maintain and improve BookVault. 
            Together, we're building the future of secure digital reading.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Donations;
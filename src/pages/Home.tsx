import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Shield, Zap, Users, ArrowRight, Star } from 'lucide-react';

const Home = () => {
  const features = [
    {
      icon: BookOpen,
      title: 'Digital Library',
      description: 'Access thousands of books in our secure digital library with page-by-page reading experience.',
    },
    {
      icon: Shield,
      title: 'Secure Reading',
      description: 'Advanced security features prevent unauthorized copying and screenshots for content protection.',
    },
    {
      icon: Zap,
      title: 'Fast & Responsive',
      description: 'Lightning-fast performance with smooth animations and responsive design across devices.',
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Join our vibrant community of readers and share your thoughts on your favorite books.',
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Book Enthusiast',
      content: 'BookVault has revolutionized my reading experience. The security features give me confidence that authors\' work is protected.',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      role: 'Student',
      content: 'The page-by-page reading feature is incredible. I can focus on one page at a time without distractions.',
      rating: 5,
    },
    {
      name: 'Emily Davis',
      role: 'Teacher',
      content: 'Perfect platform for educational content. The dark mode is easy on the eyes during long reading sessions.',
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-purple-900 py-20 lg:py-32">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fadeInUp">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
              Your Digital
              <span className="gradient-text"> Book Haven</span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Discover, read, and explore thousands of books with our secure, fast, and beautiful reading platform. 
              Experience the future of digital reading with advanced security and seamless user experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slideInUp animate-delay-200">
              <Link
                to="/books"
                className="btn-primary inline-flex items-center group"
              >
                Explore Books
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <Link
                to="/about"
                className="btn-secondary"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Hero Image */}
          <div className="mt-16 animate-fadeInUp animate-delay-400">
            <div className="relative mx-auto max-w-4xl">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-r from-blue-500 to-purple-600 p-1">
                <div className="rounded-xl bg-white dark:bg-slate-900 p-8">
                  <img
                    src="https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg?auto=compress&cs=tinysrgb&w=1200"
                    alt="Digital Library"
                    className="w-full h-64 object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Why Choose BookVault?
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Experience the perfect blend of security, performance, and user experience in digital reading.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className={`group p-6 bg-slate-50 dark:bg-slate-800 rounded-xl hover-lift animate-fadeInUp animate-delay-${(index + 1) * 100}`}
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-blue-500 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="animate-scaleIn animate-delay-100">
              <div className="text-4xl sm:text-5xl font-bold text-white mb-2">10K+</div>
              <div className="text-blue-100 text-lg">Books Available</div>
            </div>
            <div className="animate-scaleIn animate-delay-200">
              <div className="text-4xl sm:text-5xl font-bold text-white mb-2">50K+</div>
              <div className="text-blue-100 text-lg">Active Readers</div>
            </div>
            <div className="animate-scaleIn animate-delay-300">
              <div className="text-4xl sm:text-5xl font-bold text-white mb-2">99.9%</div>
              <div className="text-blue-100 text-lg">Uptime</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              What Our Readers Say
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400">
              Join thousands of satisfied readers who love BookVault
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.name}
                className={`bg-white dark:bg-slate-900 p-6 rounded-xl shadow-lg hover-lift animate-fadeInUp animate-delay-${(index + 1) * 100}`}
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-slate-600 dark:text-slate-400 mb-4 italic">
                  "{testimonial.content}"
                </p>
                <div>
                  <div className="font-semibold text-slate-900 dark:text-white">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-slate-500 dark:text-slate-400">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 animate-fadeInUp">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Ready to Start Reading?
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 mb-8">
            Join BookVault today and discover your next favorite book in our secure digital library.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/signup"
              className="btn-primary inline-flex items-center group"
            >
              Get Started Free
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            <Link
              to="/books"
              className="btn-secondary"
            >
              Browse Books
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
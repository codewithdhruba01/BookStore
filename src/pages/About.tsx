import React from 'react';
import { BookOpen, Shield, Users, Zap, Award, Globe } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: BookOpen,
      title: 'Knowledge Accessibility',
      description: 'We believe everyone should have access to quality literature and educational content.',
    },
    {
      icon: Shield,
      title: 'Content Protection',
      description: 'Protecting authors and publishers through advanced security and anti-piracy measures.',
    },
    {
      icon: Users,
      title: 'Community First',
      description: 'Building a vibrant community of readers, authors, and knowledge enthusiasts.',
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'Continuously improving the digital reading experience with cutting-edge technology.',
    },
  ];

  const team = [
    {
      name: 'Alex Johnson',
      role: 'CEO & Founder',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300',
      description: 'Passionate about making knowledge accessible to everyone through technology.',
    },
    {
      name: 'Sarah Chen',
      role: 'CTO',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300',
      description: 'Expert in security and digital content protection with 10+ years experience.',
    },
    {
      name: 'Michael Rodriguez',
      role: 'Head of Design',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300',
      description: 'Creating beautiful and intuitive user experiences for digital reading platforms.',
    },
  ];

  return (
    <div className="min-h-screen py-16">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center animate-fadeInUp">
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            About <span className="gradient-text">BookVault</span>
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
            We're on a mission to revolutionize digital reading by creating the world's most secure, 
            user-friendly, and comprehensive digital library platform.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slideInLeft">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
              Our Story
            </h2>
            <div className="space-y-4 text-slate-600 dark:text-slate-400 leading-relaxed">
              <p>
                BookVault was born from a simple yet powerful idea: what if we could create a digital 
                library that perfectly balances accessibility with security? In 2024, our founders 
                recognized the growing need for a platform that could serve both readers seeking 
                convenience and content creators requiring protection.
              </p>
              <p>
                After months of research and development, we launched BookVault with advanced security 
                features, including screenshot prevention, copy protection, and user authentication 
                systems. Our platform ensures that while readers enjoy seamless access to thousands 
                of books, authors and publishers can trust that their intellectual property is protected.
              </p>
              <p>
                Today, BookVault serves over 50,000 active readers worldwide and continues to grow, 
                adding new features and expanding our library based on community feedback and 
                technological innovations.
              </p>
            </div>
          </div>
          <div className="animate-slideInRight">
            <img
              src="https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Our Story"
              className="rounded-2xl shadow-2xl hover-lift"
            />
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-slate-50 dark:bg-slate-800 py-16 mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Our Values
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={value.title}
                className={`bg-white dark:bg-slate-900 p-6 rounded-xl shadow-lg hover-lift animate-fadeInUp animate-delay-${(index + 1) * 100}`}
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <value.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                  {value.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Meet Our Team
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400">
            The passionate people behind BookVault
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div
              key={member.name}
              className={`bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-lg hover-lift animate-fadeInUp animate-delay-${(index + 1) * 100}`}
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-1">
                  {member.name}
                </h3>
                <p className="text-blue-600 dark:text-blue-400 font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-r from-blue-500 to-purple-600 py-16 mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="animate-scaleIn animate-delay-100">
              <div className="flex items-center justify-center mb-4">
                <BookOpen className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">10,000+</div>
              <div className="text-blue-100">Books Available</div>
            </div>
            <div className="animate-scaleIn animate-delay-200">
              <div className="flex items-center justify-center mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">50,000+</div>
              <div className="text-blue-100">Active Readers</div>
            </div>
            <div className="animate-scaleIn animate-delay-300">
              <div className="flex items-center justify-center mb-4">
                <Globe className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">100+</div>
              <div className="text-blue-100">Countries</div>
            </div>
            <div className="animate-scaleIn animate-delay-400">
              <div className="flex items-center justify-center mb-4">
                <Award className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">99.9%</div>
              <div className="text-blue-100">Uptime</div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fadeInUp">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-6">
          Our Mission
        </h2>
        <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
          To democratize access to knowledge while protecting intellectual property, creating a 
          sustainable ecosystem where readers, authors, and publishers can thrive together in 
          the digital age.
        </p>
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-1 rounded-xl inline-block">
          <div className="bg-white dark:bg-slate-900 px-8 py-4 rounded-lg">
            <p className="text-lg font-medium gradient-text">
              "Knowledge belongs to everyone, but creators deserve protection."
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
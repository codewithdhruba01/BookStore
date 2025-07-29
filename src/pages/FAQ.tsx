import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle, Search } from 'lucide-react';

const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const categories = [
    { id: 'general', name: 'General', count: 8 },
    { id: 'account', name: 'Account & Billing', count: 6 },
    { id: 'reading', name: 'Reading Experience', count: 7 },
    { id: 'technical', name: 'Technical Support', count: 5 },
    { id: 'security', name: 'Security & Privacy', count: 4 },
  ];

  const faqs = [
    {
      id: 1,
      category: 'general',
      question: 'What is BookVault?',
      answer: 'BookVault is a secure digital library platform that allows you to read thousands of books online. We provide a safe, user-friendly environment with advanced security features to protect both readers and content creators.'
    },
    {
      id: 2,
      category: 'general',
      question: 'How do I get started?',
      answer: 'Getting started is easy! Simply create a free account by clicking the "Sign Up" button. Once registered, you can browse our extensive library and start reading immediately. Premium books require a subscription or individual purchase.'
    },
    {
      id: 3,
      category: 'account',
      question: 'How do I create an account?',
      answer: 'Click on the "Sign Up" button in the top navigation, fill in your name, email, and create a secure password. You\'ll receive a confirmation email to verify your account. Once verified, you can start exploring our book collection.'
    },
    {
      id: 4,
      category: 'account',
      question: 'Can I change my email address?',
      answer: 'Yes, you can change your email address in your account settings. Go to your profile, click on "Account Settings," and update your email. You\'ll need to verify the new email address before the change takes effect.'
    },
    {
      id: 5,
      category: 'reading',
      question: 'Can I read books offline?',
      answer: 'Currently, BookVault requires an internet connection to access books due to our security measures. This ensures content protection and provides you with the latest updates. We\'re working on a secure offline reading feature for premium subscribers.'
    },
    {
      id: 6,
      category: 'reading',
      question: 'Why can\'t I take screenshots or copy text?',
      answer: 'These security measures protect authors\' and publishers\' intellectual property rights. Our platform prevents unauthorized copying, sharing, and distribution of copyrighted content while still providing you with an excellent reading experience.'
    },
    {
      id: 7,
      category: 'reading',
      question: 'How does the page-by-page reading work?',
      answer: 'Our reader displays one page at a time, similar to reading a physical book. You can navigate using the Previous/Next buttons, the progress slider, or keyboard shortcuts (arrow keys). This format reduces distractions and improves focus.'
    },
    {
      id: 8,
      category: 'technical',
      question: 'What browsers are supported?',
      answer: 'BookVault works on all modern browsers including Chrome, Firefox, Safari, and Edge. We recommend using the latest version of your browser for the best experience. Mobile browsers are also fully supported.'
    },
    {
      id: 9,
      category: 'technical',
      question: 'I\'m having trouble loading books. What should I do?',
      answer: 'First, check your internet connection. Try refreshing the page or clearing your browser cache. If the problem persists, try using a different browser or disabling browser extensions. Contact our support team if issues continue.'
    },
    {
      id: 10,
      category: 'security',
      question: 'How is my personal data protected?',
      answer: 'We use industry-standard encryption to protect your personal information. Your data is stored securely and never shared with third parties without your consent. Read our Privacy Policy for detailed information about data protection.'
    },
    {
      id: 11,
      category: 'security',
      question: 'Why do I need to login every 20 seconds when not authenticated?',
      answer: 'This security feature ensures that only authorized users can access our content. It protects both your account and our publishers\' content from unauthorized access. Once you log in, you won\'t see these prompts again during your session.'
    },
    {
      id: 12,
      category: 'account',
      question: 'How do I cancel my subscription?',
      answer: 'You can cancel your subscription anytime from your account settings. Go to "Billing & Subscription" and click "Cancel Subscription." You\'ll continue to have access until the end of your current billing period.'
    },
    {
      id: 13,
      category: 'reading',
      question: 'Can I bookmark pages or take notes?',
      answer: 'Yes! You can bookmark pages by clicking the bookmark icon while reading. Notes and highlights can be added by selecting text (where permitted). All your bookmarks and notes are saved to your account and synced across devices.'
    },
    {
      id: 14,
      category: 'general',
      question: 'Do you have mobile apps?',
      answer: 'BookVault works perfectly in mobile browsers with a responsive design optimized for phones and tablets. We\'re currently developing dedicated mobile apps for iOS and Android, which will be available soon.'
    },
    {
      id: 15,
      category: 'technical',
      question: 'What should I do if a book won\'t load?',
      answer: 'Try refreshing the page, clearing your browser cache, or switching to a different browser. Ensure JavaScript is enabled. If you\'re still having issues, please contact our technical support team with the book title and error details.'
    }
  ];

  const filteredFAQs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleFAQ = (id: number) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 animate-fadeInUp">
          <div className="flex justify-center mb-6">
            <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full">
              <HelpCircle className="h-8 w-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Find answers to common questions about BookVault. Can't find what you're looking for? 
            Contact our support team.
          </p>
        </div>

        {/* Search */}
        <div className="mb-8 animate-slideInUp animate-delay-200">
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
            <input
              type="text"
              placeholder="Search FAQs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Categories Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6 sticky top-24 animate-slideInLeft animate-delay-300">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
                Categories
              </h3>
              <div className="space-y-2">
                {categories.map(category => (
                  <button
                    key={category.id}
                    className="w-full text-left p-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-colors group"
                  >
                    <div className="flex items-center justify-between">
                      <span className="group-hover:text-blue-600 dark:group-hover:text-blue-400">
                        {category.name}
                      </span>
                      <span className="text-sm text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-700 px-2 py-1 rounded-full">
                        {category.count}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* FAQ Content */}
          <div className="lg:col-span-3">
            <div className="space-y-4 animate-slideInRight animate-delay-400">
              {filteredFAQs.map((faq, index) => (
                <div
                  key={faq.id}
                  className={`bg-white dark:bg-slate-800 rounded-xl shadow-lg overflow-hidden animate-fadeInUp animate-delay-${(index + 1) * 100}`}
                >
                  <button
                    onClick={() => toggleFAQ(faq.id)}
                    className="w-full text-left p-6 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset"
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-medium text-slate-900 dark:text-white pr-4">
                        {faq.question}
                      </h3>
                      <div className="flex-shrink-0">
                        {openFAQ === faq.id ? (
                          <ChevronUp className="h-5 w-5 text-slate-500 dark:text-slate-400" />
                        ) : (
                          <ChevronDown className="h-5 w-5 text-slate-500 dark:text-slate-400" />
                        )}
                      </div>
                    </div>
                  </button>
                  
                  {openFAQ === faq.id && (
                    <div className="px-6 pb-6 animate-fadeInUp">
                      <div className="border-t border-slate-200 dark:border-slate-700 pt-4">
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* No Results */}
            {filteredFAQs.length === 0 && (
              <div className="text-center py-12 animate-fadeInUp">
                <HelpCircle className="h-16 w-16 text-slate-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                  No FAQs found
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-6">
                  Try adjusting your search terms or browse all categories.
                </p>
                <button
                  onClick={() => setSearchTerm('')}
                  className="text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300 font-medium"
                >
                  Clear search
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Contact CTA */}
        <div className="mt-16 text-center bg-gradient-to-r from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-700 rounded-2xl p-8 animate-fadeInUp animate-delay-500">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
            Still have questions?
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mb-6">
            Our support team is here to help. Get in touch and we'll respond as soon as possible.
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
              Join Community
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
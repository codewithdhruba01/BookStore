import { Link } from 'react-router-dom';
import { BookOpen, Mail, Phone, MapPin, Heart } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    company: [
      { name: 'About Us', path: '/about' },
      { name: 'Privacy Policy', path: '/privacy' },
      { name: 'FAQ', path: '/faq' },
      { name: 'Community', path: '/community' },
    ],
    support: [
      { name: 'Contact Us', path: '/contact' },
      { name: 'Support', path: '/support' },
      { name: 'Donations', path: '/donations' },
      { name: 'Help Center', path: '/support' },
    ],
    resources: [
      { name: 'Store', path: '/store' },
      { name: 'Books', path: '/books' },
      { name: 'New Releases', path: '/books' },
      { name: 'Popular Books', path: '/books' },
    ],
  };

  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg">
                <BookOpen className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold">BookVault</span>
            </div>
            <p className="text-slate-400 mb-4 leading-relaxed">
              Your digital library where knowledge meets convenience. Discover, read, and explore thousands of books with our secure reading platform.
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center text-sm text-slate-400">
                <Mail className="h-4 w-4 mr-2" />
                info@bookvault.com
              </div>
            </div>
            <div className="flex items-center text-sm text-slate-400 mt-2">
              <Phone className="h-4 w-4 mr-2" />
              +1 (555) 123-4567
            </div>
            <div className="flex items-center text-sm text-slate-400 mt-2">
              <MapPin className="h-4 w-4 mr-2" />
              Kolkata, Sector 5 700056
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-slate-400 hover:text-white transition-colors duration-300 text-sm hover:underline"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Support</h3>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-slate-400 hover:text-white transition-colors duration-300 text-sm hover:underline"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Resources</h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-slate-400 hover:text-white transition-colors duration-300 text-sm hover:underline"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-slate-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-lg font-semibold mb-2">Stay Updated</h3>
              <p className="text-slate-400 text-sm">Subscribe to our newsletter for the latest books and updates.</p>
            </div>
            <div className="flex space-x-2 w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 md:w-64 px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-slate-400 text-sm mb-4 md:mb-0">
            <p>&copy; 2025 BookVault. All rights reserved.</p>
          </div>
          <div className="flex items-center text-slate-400 text-sm">
            <span>Made with</span>
            <Heart className="h-4 w-4 mx-1 text-red-500" />
            <span>for Dhrubaraj Pati</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
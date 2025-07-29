import React from 'react';
import { Shield, Eye, Lock, Users, Mail, Phone } from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 animate-fadeInUp">
          <div className="flex justify-center mb-6">
            <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full">
              <Shield className="h-8 w-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Privacy Policy
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Your privacy is our priority. Learn how we collect, use, and protect your personal information.
          </p>
          <p className="text-sm text-slate-500 dark:text-slate-500 mt-4">
            Last updated: January 15, 2025
          </p>
        </div>

        {/* Quick Summary */}
        <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 mb-12 animate-slideInUp animate-delay-200">
          <h2 className="text-xl font-semibold text-blue-900 dark:text-blue-300 mb-4">
            Quick Summary
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-start space-x-3">
              <Eye className="h-5 w-5 text-blue-600 dark:text-blue-400 mt-1" />
              <div>
                <h3 className="font-medium text-blue-900 dark:text-blue-300">Data Collection</h3>
                <p className="text-sm text-blue-700 dark:text-blue-400">We only collect necessary information to provide our services.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Lock className="h-5 w-5 text-blue-600 dark:text-blue-400 mt-1" />
              <div>
                <h3 className="font-medium text-blue-900 dark:text-blue-300">Data Security</h3>
                <p className="text-sm text-blue-700 dark:text-blue-400">Your data is encrypted and stored securely using industry standards.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Users className="h-5 w-5 text-blue-600 dark:text-blue-400 mt-1" />
              <div>
                <h3 className="font-medium text-blue-900 dark:text-blue-300">No Sharing</h3>
                <p className="text-sm text-blue-700 dark:text-blue-400">We never sell or share your personal data with third parties.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="prose prose-lg dark:prose-invert max-w-none animate-fadeInUp animate-delay-300">
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              1. Information We Collect
            </h2>
            
            <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-4">
              Personal Information
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mb-4">
              When you create an account with BookVault, we collect:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600 dark:text-slate-400">
              <li>Name and email address</li>
              <li>Account credentials (encrypted password)</li>
              <li>Profile information you choose to provide</li>
              <li>Payment information (processed securely through our payment providers)</li>
            </ul>

            <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-4 mt-6">
              Usage Information
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mb-4">
              To improve our services, we collect:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600 dark:text-slate-400">
              <li>Books you read and your reading progress</li>
              <li>Device information and browser type</li>
              <li>IP address and general location data</li>
              <li>Usage patterns and preferences</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              2. How We Use Your Information
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-4">
              We use your information to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600 dark:text-slate-400">
              <li>Provide and maintain our book reading services</li>
              <li>Process payments and manage your account</li>
              <li>Personalize your reading experience and recommendations</li>
              <li>Send important service updates and notifications</li>
              <li>Improve our platform and develop new features</li>
              <li>Ensure security and prevent fraud</li>
              <li>Comply with legal requirements</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              3. Information Sharing and Disclosure
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-4">
              We do not sell, trade, or otherwise transfer your personal information to third parties. 
              We may share your information only in the following circumstances:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600 dark:text-slate-400">
              <li><strong>Service Providers:</strong> With trusted partners who help us operate our platform</li>
              <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
              <li><strong>Business Transfers:</strong> In case of merger, acquisition, or sale of assets</li>
              <li><strong>Your Consent:</strong> When you explicitly agree to share information</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              4. Data Security
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-4">
              We implement robust security measures to protect your information:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600 dark:text-slate-400">
              <li>End-to-end encryption for all data transmission</li>
              <li>Secure storage with regular security audits</li>
              <li>Multi-factor authentication options</li>
              <li>Regular security training for our team</li>
              <li>Compliance with industry security standards</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              5. Your Rights and Choices
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-4">
              You have the following rights regarding your personal information:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600 dark:text-slate-400">
              <li><strong>Access:</strong> Request a copy of your personal data</li>
              <li><strong>Correction:</strong> Update or correct your information</li>
              <li><strong>Deletion:</strong> Request deletion of your account and data</li>
              <li><strong>Portability:</strong> Export your data in a standard format</li>
              <li><strong>Opt-out:</strong> Unsubscribe from marketing communications</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              6. Cookies and Tracking
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-4">
              We use cookies and similar technologies to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600 dark:text-slate-400">
              <li>Remember your preferences and login status</li>
              <li>Analyze usage patterns and improve our services</li>
              <li>Provide personalized content and recommendations</li>
              <li>Ensure security and prevent fraud</li>
            </ul>
            <p className="text-slate-600 dark:text-slate-400 mt-4">
              You can control cookie settings through your browser preferences.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              7. Children's Privacy
            </h2>
            <p className="text-slate-600 dark:text-slate-400">
              BookVault is not intended for children under 13. We do not knowingly collect personal 
              information from children under 13. If we become aware that we have collected personal 
              information from a child under 13, we will delete such information promptly.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              8. Changes to This Policy
            </h2>
            <p className="text-slate-600 dark:text-slate-400">
              We may update this Privacy Policy from time to time. We will notify you of any material 
              changes by posting the new Privacy Policy on this page and updating the "Last updated" date. 
              We encourage you to review this Privacy Policy periodically.
            </p>
          </section>
        </div>

        {/* Contact Section */}
        <div className="bg-slate-50 dark:bg-slate-800 rounded-xl p-8 animate-fadeInUp animate-delay-400">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 text-center">
            Questions About Privacy?
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-center mb-6">
            If you have any questions about this Privacy Policy or our data practices, please contact us:
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
            <div className="flex items-center space-x-2 text-slate-700 dark:text-slate-300">
              <Mail className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              <span>privacy@bookvault.com</span>
            </div>
            <div className="flex items-center space-x-2 text-slate-700 dark:text-slate-300">
              <Phone className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              <span>+1 (555) 123-4567</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
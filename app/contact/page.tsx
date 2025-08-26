import { Metadata } from 'next';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact CalcPortal Pro - Get in Touch | CalcPortal Pro',
  description: 'Contact CalcPortal Pro for questions, feedback, or support. We\'re here to help you with your financial calculator needs.',
  keywords: 'contact CalcPortal Pro, support, feedback, financial calculator help',
  openGraph: {
    title: 'Contact CalcPortal Pro - Get in Touch | CalcPortal Pro',
    description: 'Contact CalcPortal Pro for questions, feedback, or support.',
    url: 'https://calcportalpro.com/contact',
  },
  alternates: {
    canonical: '/contact',
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-primary-50">
      <div className="container-max py-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-secondary-500 mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-secondary-100 max-w-3xl mx-auto">
            Have questions, feedback, or need support? We'd love to hear from you. 
            Our team is here to help with your financial calculator needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-secondary-500 mb-6">Send us a Message</h2>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-secondary-500 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    className="input-field"
                    placeholder="John"
                  />
                </div>
                
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-secondary-500 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    className="input-field"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-secondary-500 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="input-field"
                  placeholder="john.doe@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-secondary-500 mb-2">
                  Subject *
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  className="input-field"
                >
                  <option value="">Select a subject</option>
                  <option value="general">General Question</option>
                  <option value="calculator">Calculator Help</option>
                  <option value="bug">Bug Report</option>
                  <option value="feature">Feature Request</option>
                  <option value="partnership">Partnership</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-secondary-500 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  className="input-field resize-none"
                  placeholder="Tell us how we can help you..."
                ></textarea>
              </div>

              <div className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  id="newsletter"
                  name="newsletter"
                  className="mt-1 h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                />
                <label htmlFor="newsletter" className="text-sm text-secondary-100">
                  I'd like to receive updates about new calculators and financial tips (optional)
                </label>
              </div>

              <button
                type="submit"
                className="w-full btn-primary inline-flex items-center justify-center space-x-2"
              >
                <Send size={20} />
                <span>Send Message</span>
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* General Contact */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-secondary-500 mb-6">Get in Touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail size={20} className="text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-secondary-500 mb-1">Email</h3>
                    <p className="text-secondary-100">contact@calcportalpro.com</p>
                    <p className="text-sm text-secondary-100 mt-1">
                      We typically respond within 24 hours
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone size={20} className="text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-secondary-500 mb-1">Phone</h3>
                    <p className="text-secondary-100">+1 (555) 123-4567</p>
                    <p className="text-sm text-secondary-100 mt-1">
                      Monday - Friday, 9 AM - 5 PM EST
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock size={20} className="text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-secondary-500 mb-1">Business Hours</h3>
                    <p className="text-secondary-100">Monday - Friday: 9:00 AM - 5:00 PM EST</p>
                    <p className="text-secondary-100">Saturday: 10:00 AM - 2:00 PM EST</p>
                    <p className="text-secondary-100">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Quick Links */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-secondary-500 mb-6">Quick Help</h2>
              
              <div className="space-y-4">
                <div className="border-l-4 border-primary-500 pl-4">
                  <h3 className="font-semibold text-secondary-500 mb-1">Calculator Not Working?</h3>
                  <p className="text-secondary-100 text-sm mb-2">
                    Check our troubleshooting guide for common issues and solutions.
                  </p>
                  <a href="/faq" className="text-primary-500 hover:text-primary-600 text-sm font-medium">
                    View FAQ →
                  </a>
                </div>

                <div className="border-l-4 border-primary-500 pl-4">
                  <h3 className="font-semibold text-secondary-500 mb-1">Need a New Calculator?</h3>
                  <p className="text-secondary-100 text-sm mb-2">
                    Suggest a new calculator tool you'd like to see on our platform.
                  </p>
                  <a href="/suggestions" className="text-primary-500 hover:text-primary-600 text-sm font-medium">
                    Make a Suggestion →
                  </a>
                </div>

                <div className="border-l-4 border-primary-500 pl-4">
                  <h3 className="font-semibold text-secondary-500 mb-1">Found a Bug?</h3>
                  <p className="text-secondary-100 text-sm mb-2">
                    Help us improve by reporting any issues you encounter.
                  </p>
                  <a href="/bug-report" className="text-primary-500 hover:text-primary-600 text-sm font-medium">
                    Report Bug →
                  </a>
                </div>
              </div>
            </div>

            {/* Office Location */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-secondary-500 mb-6">Office Location</h2>
              
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin size={20} className="text-primary-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-secondary-500 mb-1">CalcPortal Pro</h3>
                  <p className="text-secondary-100">
                    123 Financial District<br />
                    Suite 456<br />
                    New York, NY 10001<br />
                    United States
                  </p>
                </div>
              </div>

              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-secondary-100">
                  <strong>Note:</strong> We're a remote-first company, but you can reach us at our registered office address above.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Response Time Promise */}
        <div className="mt-16 bg-gradient-to-r from-primary-500 to-primary-600 rounded-xl shadow-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Our Response Promise</h2>
          <p className="text-primary-100 text-lg max-w-2xl mx-auto">
            We're committed to providing excellent support. You can expect a response within 24 hours 
            during business days, and we'll always do our best to help you with your financial calculator needs.
          </p>
        </div>
      </div>
    </div>
  );
}

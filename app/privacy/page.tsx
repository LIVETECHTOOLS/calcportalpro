import { Metadata } from 'next';
import Link from 'next/link';
import { Shield, Eye, Lock, Users, Calendar } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Learn how CalcPortal Pro collects, uses, and protects your personal information. Read our comprehensive privacy policy.',
  keywords: 'privacy policy, data protection, personal information, CalcPortal Pro privacy',
  openGraph: {
    title: 'Privacy Policy',
    description: 'Learn how CalcPortal Pro collects, uses, and protects your personal information.',
    url: 'https://calcportalpro.com/privacy',
  },
  alternates: {
    canonical: '/privacy',
  },
};

export default function PrivacyPage() {
  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="min-h-screen bg-primary-50">
      <div className="container-max py-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Shield size={40} className="text-primary-600" />
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-secondary-500 mb-4">
            Privacy Policy
          </h1>
          <p className="text-xl text-secondary-100 max-w-3xl mx-auto">
            Your privacy is important to us. This policy explains how we collect, use, and protect your information.
          </p>
          <p className="text-secondary-100 mt-4">
            Last updated: {currentDate}
          </p>
        </div>

        {/* Privacy Content */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <div className="prose prose-lg max-w-none">
              <p className="text-secondary-100 mb-6">
                At CalcPortal Pro, we are committed to protecting your privacy and ensuring the security of your personal information. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website and services.
              </p>

              <h2 className="text-2xl font-bold text-secondary-500 mt-8 mb-4">
                Information We Collect
              </h2>
              
              <h3 className="text-xl font-bold text-secondary-500 mt-6 mb-3">
                Personal Information
              </h3>
              <p className="text-secondary-100 mb-4">
                We may collect personal information that you voluntarily provide to us when you:
              </p>
              <ul className="list-disc list-inside text-secondary-100 space-y-2 mb-4">
                <li>Contact us through our contact forms</li>
                <li>Subscribe to our newsletter</li>
                <li>Provide feedback or report issues</li>
                <li>Participate in surveys or promotions</li>
              </ul>
              <p className="text-secondary-100 mb-4">
                This information may include your name, email address, phone number, and any other information you choose to provide.
              </p>

              <h3 className="text-xl font-bold text-secondary-500 mt-6 mb-3">
                Usage Information
              </h3>
              <p className="text-secondary-100 mb-4">
                We automatically collect certain information about your device and how you interact with our website, including:
              </p>
              <ul className="list-disc list-inside text-secondary-100 space-y-2 mb-4">
                <li>IP address and device information</li>
                <li>Browser type and version</li>
                <li>Pages visited and time spent on each page</li>
                <li>Referring website</li>
                <li>Calculator usage patterns (without personal data)</li>
              </ul>

              <h3 className="text-xl font-bold text-secondary-500 mt-6 mb-3">
                Cookies and Tracking Technologies
              </h3>
              <p className="text-secondary-100 mb-4">
                We use cookies and similar tracking technologies to enhance your experience on our website. These technologies help us:
              </p>
              <ul className="list-disc list-inside text-secondary-100 space-y-2 mb-4">
                <li>Remember your preferences and settings</li>
                <li>Analyze website traffic and usage patterns</li>
                <li>Improve our services and user experience</li>
                <li>Provide personalized content and recommendations</li>
              </ul>

              <h2 className="text-2xl font-bold text-secondary-500 mt-8 mb-4">
                How We Use Your Information
              </h2>
              <p className="text-secondary-100 mb-4">
                We use the information we collect for various purposes, including:
              </p>
              <ul className="list-disc list-inside text-secondary-100 space-y-2 mb-4">
                <li>Providing and maintaining our calculator services</li>
                <li>Responding to your inquiries and providing customer support</li>
                <li>Sending you updates, newsletters, and promotional materials (with your consent)</li>
                <li>Improving our website, calculators, and user experience</li>
                <li>Analyzing usage patterns to optimize our services</li>
                <li>Detecting and preventing fraud or abuse</li>
                <li>Complying with legal obligations</li>
              </ul>

              <h2 className="text-2xl font-bold text-secondary-500 mt-8 mb-4">
                Information Sharing and Disclosure
              </h2>
              <p className="text-secondary-100 mb-4">
                We do not sell, trade, or otherwise transfer your personal information to third parties, except in the following circumstances:
              </p>
              <ul className="list-disc list-inside text-secondary-100 space-y-2 mb-4">
                <li><strong>Service Providers:</strong> We may share information with trusted third-party service providers who assist us in operating our website and providing services</li>
                <li><strong>Legal Requirements:</strong> We may disclose information if required by law or in response to valid legal requests</li>
                <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred</li>
                <li><strong>Protection of Rights:</strong> We may share information to protect our rights, property, or safety, or that of our users</li>
              </ul>

              <h2 className="text-2xl font-bold text-secondary-500 mt-8 mb-4">
                Data Security
              </h2>
              <p className="text-secondary-100 mb-4">
                We implement appropriate technical and organizational security measures to protect your personal information against:
              </p>
              <ul className="list-disc list-inside text-secondary-100 space-y-2 mb-4">
                <li>Unauthorized access or disclosure</li>
                <li>Data loss or destruction</li>
                <li>Alteration or corruption</li>
                <li>Other security threats</li>
              </ul>
              <p className="text-secondary-100 mb-4">
                However, no method of transmission over the internet or electronic storage is 100% secure. 
                While we strive to protect your information, we cannot guarantee absolute security.
              </p>

              <h2 className="text-2xl font-bold text-secondary-500 mt-8 mb-4">
                Your Rights and Choices
              </h2>
              <p className="text-secondary-100 mb-4">
                You have certain rights regarding your personal information:
              </p>
              <ul className="list-disc list-inside text-secondary-100 space-y-2 mb-4">
                <li><strong>Access:</strong> Request access to the personal information we hold about you</li>
                <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                <li><strong>Portability:</strong> Request a copy of your data in a portable format</li>
                <li><strong>Opt-out:</strong> Unsubscribe from marketing communications at any time</li>
                <li><strong>Cookies:</strong> Control cookie settings through your browser preferences</li>
              </ul>

              <h2 className="text-2xl font-bold text-secondary-500 mt-8 mb-4">
                Third-Party Links and Services
              </h2>
              <p className="text-secondary-100 mb-4">
                Our website may contain links to third-party websites or services. We are not responsible for the privacy practices 
                or content of these third-party sites. We encourage you to review their privacy policies before providing any personal information.
              </p>

              <h2 className="text-2xl font-bold text-secondary-500 mt-8 mb-4">
                Children's Privacy
              </h2>
              <p className="text-secondary-100 mb-4">
                Our services are not intended for children under the age of 13. We do not knowingly collect personal information 
                from children under 13. If you believe we have collected information from a child under 13, please contact us immediately.
              </p>

              <h2 className="text-2xl font-bold text-secondary-500 mt-8 mb-4">
                International Data Transfers
              </h2>
              <p className="text-secondary-100 mb-4">
                Your information may be transferred to and processed in countries other than your own. We ensure that such transfers 
                comply with applicable data protection laws and implement appropriate safeguards to protect your information.
              </p>

              <h2 className="text-2xl font-bold text-secondary-500 mt-8 mb-4">
                Changes to This Privacy Policy
              </h2>
              <p className="text-secondary-100 mb-4">
                We may update this Privacy Policy from time to time to reflect changes in our practices or applicable laws. 
                We will notify you of any material changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
              </p>

              <h2 className="text-2xl font-bold text-secondary-500 mt-8 mb-4">
                Contact Us
              </h2>
              <p className="text-secondary-100 mb-4">
                If you have any questions about this Privacy Policy or our privacy practices, please contact us:
              </p>
              <div className="bg-gray-50 rounded-lg p-4 mb-4">
                <p className="text-secondary-100">
                  <strong>Email:</strong> privacy@calcportalpro.com<br />
                  <strong>Address:</strong> 123 Financial District, Suite 456, New York, NY 10001<br />
                  <strong>Phone:</strong> +1 (555) 123-4567
                </p>
              </div>

              <h2 className="text-2xl font-bold text-secondary-500 mt-8 mb-4">
                California Privacy Rights
              </h2>
              <p className="text-secondary-100 mb-4">
                If you are a California resident, you have additional rights under the California Consumer Privacy Act (CCPA). 
                Please contact us for more information about your CCPA rights.
              </p>

              <h2 className="text-2xl font-bold text-secondary-500 mt-8 mb-4">
                European Privacy Rights
              </h2>
              <p className="text-secondary-100 mb-4">
                If you are located in the European Economic Area (EEA), you have additional rights under the General Data Protection Regulation (GDPR). 
                Please contact us for more information about your GDPR rights.
              </p>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-secondary-500 mb-6">Quick Actions</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border border-gray-200 rounded-lg p-6">
                <div className="flex items-center space-x-3 mb-3">
                  <Eye size={20} className="text-primary-600" />
                  <h3 className="font-semibold text-secondary-500">View Your Data</h3>
                </div>
                <p className="text-secondary-100 text-sm mb-4">
                  Request a copy of all personal information we have about you.
                </p>
                <button className="text-primary-500 hover:text-primary-600 text-sm font-medium">
                  Request Data Access →
                </button>
              </div>

              <div className="border border-gray-200 rounded-lg p-6">
                <div className="flex items-center space-x-3 mb-3">
                  <Lock size={20} className="text-primary-600" />
                  <h3 className="font-semibold text-secondary-500">Update Preferences</h3>
                </div>
                <p className="text-secondary-100 text-sm mb-4">
                  Manage your communication preferences and cookie settings.
                </p>
                <button className="text-primary-500 hover:text-primary-600 text-sm font-medium">
                  Manage Preferences →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

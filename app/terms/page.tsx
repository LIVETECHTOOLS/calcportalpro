import { Metadata } from 'next';
import Link from 'next/link';
import { FileText, AlertTriangle, CheckCircle, XCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Read our Terms of Service to understand the rules and guidelines for using CalcPortal Pro\'s financial calculators and services.',
  keywords: 'terms of service, terms and conditions, CalcPortal Pro terms, user agreement',
  openGraph: {
    title: 'Terms of Service',
    description: 'Read our Terms of Service to understand the rules and guidelines for using CalcPortal Pro\'s financial calculators and services.',
    url: 'https://calcportalpro.com/terms',
  },
  alternates: {
    canonical: '/terms',
  },
};

export default function TermsPage() {
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
            <FileText size={40} className="text-primary-600" />
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-secondary-500 mb-4">
            Terms of Service
          </h1>
          <p className="text-xl text-secondary-100 max-w-3xl mx-auto">
            Please read these terms carefully before using our services. By using CalcPortal Pro, you agree to these terms.
          </p>
          <p className="text-secondary-100 mt-4">
            Last updated: {currentDate}
          </p>
        </div>

        {/* Terms Content */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <div className="prose prose-lg max-w-none">
              <p className="text-secondary-100 mb-6">
                Welcome to CalcPortal Pro. These Terms of Service ("Terms") govern your use of our website, 
                calculators, and services. By accessing or using our services, you agree to be bound by these Terms.
              </p>

              <h2 className="text-2xl font-bold text-secondary-500 mt-8 mb-4">
                Acceptance of Terms
              </h2>
              <p className="text-secondary-100 mb-4">
                By accessing or using CalcPortal Pro, you confirm that you have read, understood, and agree to be bound by these Terms. 
                If you do not agree to these Terms, you must not use our services.
              </p>

              <h2 className="text-2xl font-bold text-secondary-500 mt-8 mb-4">
                Description of Services
              </h2>
              <p className="text-secondary-100 mb-4">
                CalcPortal Pro provides:
              </p>
              <ul className="list-disc list-inside text-secondary-100 space-y-2 mb-4">
                <li>Free financial calculators and tools</li>
                <li>Educational content and resources</li>
                <li>Financial planning information</li>
                <li>Customer support services</li>
              </ul>

              <h2 className="text-2xl font-bold text-secondary-500 mt-8 mb-4">
                User Responsibilities
              </h2>
              <p className="text-secondary-100 mb-4">
                When using our services, you agree to:
              </p>
              <ul className="list-disc list-inside text-secondary-100 space-y-2 mb-4">
                <li>Provide accurate and truthful information</li>
                <li>Use our services for lawful purposes only</li>
                <li>Not attempt to gain unauthorized access to our systems</li>
                <li>Not interfere with or disrupt our services</li>
                <li>Respect intellectual property rights</li>
                <li>Not use our services for commercial purposes without permission</li>
              </ul>

              <h2 className="text-2xl font-bold text-secondary-500 mt-8 mb-4">
                Prohibited Uses
              </h2>
              <p className="text-secondary-100 mb-4">
                You may not use our services to:
              </p>
              <ul className="list-disc list-inside text-secondary-100 space-y-2 mb-4">
                <li>Violate any applicable laws or regulations</li>
                <li>Infringe on intellectual property rights</li>
                <li>Transmit harmful, offensive, or inappropriate content</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Use automated tools to scrape or collect data</li>
                <li>Impersonate others or provide false information</li>
                <li>Engage in any form of harassment or abuse</li>
              </ul>

              <h2 className="text-2xl font-bold text-secondary-500 mt-8 mb-4">
                Intellectual Property
              </h2>
              <p className="text-secondary-100 mb-4">
                All content on CalcPortal Pro, including but not limited to:
              </p>
              <ul className="list-disc list-inside text-secondary-100 space-y-2 mb-4">
                <li>Text, graphics, and images</li>
                <li>Calculator algorithms and formulas</li>
                <li>Software code and functionality</li>
                <li>Brand names and logos</li>
                <li>Educational content and resources</li>
              </ul>
              <p className="text-secondary-100 mb-4">
                Is owned by CalcPortal Pro or our licensors and is protected by copyright, trademark, and other intellectual property laws.
              </p>

              <h2 className="text-2xl font-bold text-secondary-500 mt-8 mb-4">
                License to Use
              </h2>
              <p className="text-secondary-100 mb-4">
                We grant you a limited, non-exclusive, non-transferable license to use our services for personal, 
                non-commercial purposes. This license does not include:
              </p>
              <ul className="list-disc list-inside text-secondary-100 space-y-2 mb-4">
                <li>Reselling or redistributing our services</li>
                <li>Modifying or creating derivative works</li>
                <li>Reverse engineering our software</li>
                <li>Using our content for commercial purposes</li>
              </ul>

              <h2 className="text-2xl font-bold text-secondary-500 mt-8 mb-4">
                Disclaimers
              </h2>
              <p className="text-secondary-100 mb-4">
                Our services are provided "as is" and "as available" without warranties of any kind. We disclaim:
              </p>
              <ul className="list-disc list-inside text-secondary-100 space-y-2 mb-4">
                <li>Warranties of merchantability or fitness for a particular purpose</li>
                <li>Warranties that our services will be uninterrupted or error-free</li>
                <li>Warranties regarding the accuracy of calculations or information</li>
                <li>Warranties that defects will be corrected</li>
              </ul>

              <h2 className="text-2xl font-bold text-secondary-500 mt-8 mb-4">
                Financial Information Disclaimer
              </h2>
              <p className="text-secondary-100 mb-4">
                <strong>Important:</strong> The calculators and information provided on CalcPortal Pro are for educational and informational purposes only. 
                They should not be considered as financial advice, investment recommendations, or tax advice.
              </p>
              <p className="text-secondary-100 mb-4">
                We recommend consulting with qualified professionals (financial advisors, accountants, lawyers) before making any financial decisions.
              </p>

              <h2 className="text-2xl font-bold text-secondary-500 mt-8 mb-4">
                Limitation of Liability
              </h2>
              <p className="text-secondary-100 mb-4">
                To the maximum extent permitted by law, CalcPortal Pro shall not be liable for:
              </p>
              <ul className="list-disc list-inside text-secondary-100 space-y-2 mb-4">
                <li>Direct, indirect, incidental, or consequential damages</li>
                <li>Loss of profits, data, or business opportunities</li>
                <li>Damages resulting from the use or inability to use our services</li>
                <li>Damages resulting from errors or inaccuracies in our calculations</li>
                <li>Damages resulting from financial decisions made based on our tools</li>
              </ul>

              <h2 className="text-2xl font-bold text-secondary-500 mt-8 mb-4">
                Indemnification
              </h2>
              <p className="text-secondary-100 mb-4">
                You agree to indemnify and hold harmless CalcPortal Pro, its officers, directors, employees, and agents from any claims, 
                damages, losses, or expenses (including legal fees) arising from your use of our services or violation of these Terms.
              </p>

              <h2 className="text-2xl font-bold text-secondary-500 mt-8 mb-4">
                Privacy and Data
              </h2>
              <p className="text-secondary-100 mb-4">
                Your privacy is important to us. Our collection and use of personal information is governed by our 
                <Link href="/privacy" className="text-primary-500 hover:text-primary-600"> Privacy Policy</Link>, 
                which is incorporated into these Terms by reference.
              </p>

              <h2 className="text-2xl font-bold text-secondary-500 mt-8 mb-4">
                Third-Party Links and Services
              </h2>
              <p className="text-secondary-100 mb-4">
                Our services may contain links to third-party websites or services. We are not responsible for:
              </p>
              <ul className="list-disc list-inside text-secondary-100 space-y-2 mb-4">
                <li>The content or accuracy of third-party websites</li>
                <li>The privacy practices of third-party services</li>
                <li>Any damages or losses resulting from third-party services</li>
                <li>The availability or functionality of third-party services</li>
              </ul>

              <h2 className="text-2xl font-bold text-secondary-500 mt-8 mb-4">
                Termination
              </h2>
              <p className="text-secondary-100 mb-4">
                We may terminate or suspend your access to our services at any time, with or without cause, 
                with or without notice. You may also stop using our services at any time.
              </p>

              <h2 className="text-2xl font-bold text-secondary-500 mt-8 mb-4">
                Changes to Terms
              </h2>
              <p className="text-secondary-100 mb-4">
                We reserve the right to modify these Terms at any time. We will notify users of material changes by:
              </p>
              <ul className="list-disc list-inside text-secondary-100 space-y-2 mb-4">
                <li>Posting the updated Terms on our website</li>
                <li>Updating the "Last updated" date</li>
                <li>Sending email notifications for significant changes</li>
              </ul>
              <p className="text-secondary-100 mb-4">
                Your continued use of our services after changes become effective constitutes acceptance of the new Terms.
              </p>

              <h2 className="text-2xl font-bold text-secondary-500 mt-8 mb-4">
                Governing Law
              </h2>
              <p className="text-secondary-100 mb-4">
                These Terms are governed by and construed in accordance with the laws of the State of New York, 
                without regard to conflict of law principles.
              </p>

              <h2 className="text-2xl font-bold text-secondary-500 mt-8 mb-4">
                Dispute Resolution
              </h2>
              <p className="text-secondary-100 mb-4">
                Any disputes arising from these Terms or your use of our services will be resolved through binding arbitration 
                in accordance with the rules of the American Arbitration Association.
              </p>

              <h2 className="text-2xl font-bold text-secondary-500 mt-8 mb-4">
                Severability
              </h2>
              <p className="text-secondary-100 mb-4">
                If any provision of these Terms is found to be unenforceable or invalid, that provision will be limited or 
                eliminated to the minimum extent necessary so that these Terms will otherwise remain in full force and effect.
              </p>

              <h2 className="text-2xl font-bold text-secondary-500 mt-8 mb-4">
                Entire Agreement
              </h2>
              <p className="text-secondary-100 mb-4">
                These Terms, together with our Privacy Policy and any other policies referenced herein, 
                constitute the entire agreement between you and CalcPortal Pro regarding your use of our services.
              </p>

              <h2 className="text-2xl font-bold text-secondary-500 mt-8 mb-4">
                Contact Information
              </h2>
              <p className="text-secondary-100 mb-4">
                If you have any questions about these Terms, please contact us:
              </p>
              <div className="bg-gray-50 rounded-lg p-4 mb-4">
                <p className="text-secondary-100">
                  <strong>Email:</strong> legal@calcportalpro.com<br />
                  <strong>Address:</strong> 123 Financial District, Suite 456, New York, NY 10001<br />
                  <strong>Phone:</strong> +1 (555) 123-4567
                </p>
              </div>
            </div>
          </div>

          {/* Summary Box */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-secondary-500 mb-6">Terms Summary</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="font-semibold text-secondary-500 mb-3">What You Can Do:</h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <CheckCircle size={16} className="text-green-500" />
                    <span className="text-secondary-100 text-sm">Use calculators for personal financial planning</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle size={16} className="text-green-500" />
                    <span className="text-secondary-100 text-sm">Access educational content and resources</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle size={16} className="text-green-500" />
                    <span className="text-secondary-100 text-sm">Contact us for support and feedback</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold text-secondary-500 mb-3">What You Cannot Do:</h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <XCircle size={16} className="text-red-500" />
                    <span className="text-secondary-100 text-sm">Use services for commercial purposes</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <XCircle size={16} className="text-red-500" />
                    <span className="text-secondary-100 text-sm">Copy or redistribute our content</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <XCircle size={16} className="text-red-500" />
                    <span className="text-secondary-100 text-sm">Violate laws or harass others</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <div className="flex items-start space-x-3">
                <AlertTriangle size={20} className="text-yellow-600 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-yellow-800 mb-1">Important Reminder</h4>
                  <p className="text-yellow-700 text-sm">
                    Our calculators are for educational purposes only. Always consult with qualified professionals 
                    before making financial decisions. We are not responsible for any financial losses or damages.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

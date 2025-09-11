import { Metadata } from 'next';
import { AlertTriangle, Info, Shield, FileText } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Disclaimer',
  description: 'Important disclaimers about CalcPortal Pro\'s financial calculators and educational content. Read our comprehensive disclaimer.',
  keywords: 'disclaimer, financial disclaimer, calculator disclaimer, CalcPortal Pro disclaimer',
  openGraph: {
    title: 'Disclaimer',
    description: 'Important disclaimers about CalcPortal Pro\'s financial calculators and educational content.',
    url: 'https://calcportalpro.com/disclaimer',
  },
  alternates: {
    canonical: '/disclaimer',
  },
};

export default function DisclaimerPage() {
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
          <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <AlertTriangle size={40} className="text-yellow-600" />
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-secondary-500 mb-4">
            Important Disclaimer
          </h1>
          <p className="text-xl text-secondary-100 max-w-3xl mx-auto">
            Please read this disclaimer carefully. It contains important information about the limitations 
            and intended use of our financial calculators and educational content.
          </p>
          <p className="text-secondary-100 mt-4">
            Last updated: {currentDate}
          </p>
        </div>

        {/* Disclaimer Content */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <div className="prose prose-lg max-w-none">
              <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8">
                <div className="flex items-start space-x-3">
                  <AlertTriangle size={24} className="text-red-600 mt-0.5" />
                  <div>
                    <h3 className="text-lg font-bold text-red-800 mb-2">⚠️ CRITICAL DISCLAIMER</h3>
                    <p className="text-red-700">
                      The calculators and information provided on CalcPortal Pro are for <strong>EDUCATIONAL AND INFORMATIONAL PURPOSES ONLY</strong>. 
                      They should <strong>NOT</strong> be considered as financial advice, investment recommendations, or tax advice.
                    </p>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-secondary-500 mt-8 mb-4">
                General Disclaimer
              </h2>
              <p className="text-secondary-100 mb-6">
                By using CalcPortal Pro's calculators, tools, and educational content, you acknowledge and agree that:
              </p>
              <ul className="list-disc list-inside text-secondary-100 space-y-2 mb-6">
                <li>All calculations are estimates and may not reflect actual results</li>
                <li>Results should not be the sole basis for financial decisions</li>
                <li>We are not responsible for any financial losses or damages</li>
                <li>Professional advice should be sought for important financial matters</li>
                <li>Market conditions and regulations change over time</li>
              </ul>

              <h2 className="text-2xl font-bold text-secondary-500 mt-8 mb-4">
                Financial Advice Disclaimer
              </h2>
              <p className="text-secondary-100 mb-4">
                <strong>CalcPortal Pro is NOT a financial advisor, investment advisor, or tax professional.</strong> Our services include:
              </p>
              <ul className="list-disc list-inside text-secondary-100 space-y-2 mb-4">
                <li>Educational calculators and tools</li>
                <li>General financial information and resources</li>
                <li>Illustrative examples and scenarios</li>
                <li>Basic financial planning concepts</li>
              </ul>
              <p className="text-secondary-100 mb-6">
                We do not provide personalized financial advice, investment recommendations, or tax planning services.
              </p>

              <h2 className="text-2xl font-bold text-secondary-500 mt-8 mb-4">
                Calculator Accuracy Disclaimer
              </h2>
              <p className="text-secondary-100 mb-4">
                While we strive for accuracy in our calculations, we cannot guarantee:
              </p>
              <ul className="list-disc list-inside text-secondary-100 space-y-2 mb-4">
                <li>100% accuracy of all calculations</li>
                <li>Completeness of all variables and factors</li>
                <li>Up-to-date tax rates and regulations</li>
                <li>Inclusion of all applicable fees and charges</li>
                <li>Reflection of current market conditions</li>
              </ul>
              <p className="text-secondary-100 mb-6">
                Calculator results are estimates based on the information you provide and current formulas. 
                Actual results may vary significantly due to many factors beyond our control.
              </p>

              <h2 className="text-2xl font-bold text-secondary-500 mt-8 mb-4">
                Investment Disclaimer
              </h2>
              <p className="text-secondary-100 mb-4">
                Our investment-related calculators and content are for educational purposes only:
              </p>
              <ul className="list-disc list-inside text-secondary-100 space-y-2 mb-4">
                <li>Past performance does not guarantee future results</li>
                <li>Investment values can go up or down</li>
                <li>All investments carry some level of risk</li>
                <li>Diversification does not guarantee profits or prevent losses</li>
                <li>Market timing strategies may not be effective</li>
              </ul>
              <p className="text-secondary-100 mb-6">
                We do not recommend specific investments, investment strategies, or investment timing.
              </p>

              <h2 className="text-2xl font-bold text-secondary-500 mt-8 mb-4">
                Tax Disclaimer
              </h2>
              <p className="text-secondary-100 mb-4">
                Tax-related calculators and information are general in nature:
              </p>
              <ul className="list-disc list-inside text-secondary-100 space-y-2 mb-4">
                <li>Tax laws and regulations change frequently</li>
                <li>Individual tax situations vary significantly</li>
                <li>State and local tax laws may differ</li>
                <li>Tax calculations may not include all deductions or credits</li>
                <li>Professional tax advice should be sought for complex situations</li>
              </ul>
              <p className="text-secondary-100 mb-6">
                We are not responsible for any tax consequences or errors in tax calculations.
              </p>

              <h2 className="text-2xl font-bold text-secondary-500 mt-8 mb-4">
                Loan and Mortgage Disclaimer
              </h2>
              <p className="text-secondary-100 mb-4">
                Loan calculators provide estimates only:
              </p>
              <ul className="list-disc list-inside text-secondary-100 space-y-2 mb-4">
                <li>Actual loan terms may differ from estimates</li>
                <li>Interest rates and fees vary by lender</li>
                <li>Credit scores and financial history affect loan approval</li>
                <li>Additional costs may apply (insurance, taxes, etc.)</li>
                <li>Loan approval is not guaranteed</li>
              </ul>
              <p className="text-secondary-100 mb-6">
                Always consult with lenders for actual loan terms and conditions.
              </p>

              <h2 className="text-2xl font-bold text-secondary-500 mt-8 mb-4">
                Educational Content Disclaimer
              </h2>
              <p className="text-secondary-100 mb-4">
                Our educational content is intended to:
              </p>
              <ul className="list-disc list-inside text-secondary-100 space-y-2 mb-4">
                <li>Provide general financial literacy information</li>
                <li>Explain basic financial concepts and principles</li>
                <li>Illustrate common financial scenarios</li>
                <li>Help users understand financial calculations</li>
                <li>Promote financial education and awareness</li>
              </ul>
              <p className="text-secondary-100 mb-6">
                This content should not replace professional financial education or advice.
              </p>

              <h2 className="text-2xl font-bold text-secondary-500 mt-8 mb-4">
                Third-Party Information Disclaimer
              </h2>
              <p className="text-secondary-100 mb-4">
                We may reference or link to third-party sources:
              </p>
              <ul className="list-disc list-inside text-secondary-100 space-y-2 mb-4">
                <li>We do not endorse third-party content or services</li>
                <li>Third-party information may not be accurate or current</li>
                <li>We are not responsible for third-party content</li>
                <li>External links are provided for convenience only</li>
                <li>Users should verify third-party information independently</li>
              </ul>

              <h2 className="text-2xl font-bold text-secondary-500 mt-8 mb-4">
                Limitation of Liability
              </h2>
              <p className="text-secondary-100 mb-4">
                To the maximum extent permitted by law, CalcPortal Pro shall not be liable for:
              </p>
              <ul className="list-disc list-inside text-secondary-100 space-y-2 mb-4">
                <li>Financial losses or damages of any kind</li>
                <li>Investment losses or missed opportunities</li>
                <li>Tax penalties or interest charges</li>
                <li>Loan denials or unfavorable terms</li>
                <li>Decisions made based on our calculators or content</li>
                <li>Indirect, incidental, or consequential damages</li>
              </ul>

              <h2 className="text-2xl font-bold text-secondary-500 mt-8 mb-4">
                Professional Advice Recommendation
              </h2>
              <p className="text-secondary-100 mb-4">
                We strongly recommend consulting with qualified professionals for:
              </p>
              <ul className="list-disc list-inside text-secondary-100 space-y-2 mb-4">
                <li><strong>Financial Advisors:</strong> For investment and financial planning advice</li>
                <li><strong>Accountants:</strong> For tax planning and preparation</li>
                <li><strong>Lawyers:</strong> For legal and estate planning matters</li>
                <li><strong>Insurance Agents:</strong> For insurance needs and coverage</li>
                <li><strong>Lenders:</strong> For loan applications and terms</li>
              </ul>

              <h2 className="text-2xl font-bold text-secondary-500 mt-8 mb-4">
                User Responsibility
              </h2>
              <p className="text-secondary-100 mb-6">
                By using our services, you acknowledge that:
              </p>
              <ul className="list-disc list-inside text-secondary-100 space-y-2 mb-6">
                <li>You are responsible for your own financial decisions</li>
                <li>You will verify all calculations and information independently</li>
                <li>You will seek professional advice when appropriate</li>
                <li>You understand the limitations of our tools and content</li>
                <li>You will not rely solely on our services for important decisions</li>
              </ul>

              <h2 className="text-2xl font-bold text-secondary-500 mt-8 mb-4">
                Updates and Changes
              </h2>
              <p className="text-secondary-100 mb-6">
                This disclaimer may be updated periodically to reflect:
              </p>
              <ul className="list-disc list-inside text-secondary-100 space-y-2 mb-6">
                <li>Changes in our services or offerings</li>
                <li>Updates to legal requirements</li>
                <li>New disclaimers or limitations</li>
                <li>User feedback and concerns</li>
              </ul>
              <p className="text-secondary-100 mb-6">
                Continued use of our services after changes constitutes acceptance of the updated disclaimer.
              </p>

              <h2 className="text-2xl font-bold text-secondary-500 mt-8 mb-4">
                Contact Information
              </h2>
              <p className="text-secondary-100 mb-4">
                If you have questions about this disclaimer or our services, please contact us:
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
            <h2 className="text-2xl font-bold text-secondary-500 mb-6">Disclaimer Summary</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="space-y-4">
                <h3 className="font-semibold text-secondary-500 mb-3">What Our Services Are:</h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Info size={16} className="text-blue-500" />
                    <span className="text-secondary-100 text-sm">Educational tools and calculators</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Info size={16} className="text-blue-500" />
                    <span className="text-secondary-100 text-sm">General financial information</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Info size={16} className="text-blue-500" />
                    <span className="text-secondary-100 text-sm">Illustrative examples</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold text-secondary-500 mb-3">What Our Services Are NOT:</h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <AlertTriangle size={16} className="text-red-500" />
                    <span className="text-secondary-100 text-sm">Financial advice</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <AlertTriangle size={16} className="text-red-500" />
                    <span className="text-secondary-100 text-sm">Investment recommendations</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <AlertTriangle size={16} className="text-red-500" />
                    <span className="text-secondary-100 text-sm">Tax advice</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
              <div className="flex items-start space-x-3">
                <Shield size={20} className="text-yellow-600 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-yellow-800 mb-1">Your Protection</h4>
                  <p className="text-yellow-700 text-sm">
                    This disclaimer is designed to protect both you and us by clearly stating the limitations 
                    and intended use of our services. Always verify information independently and seek professional 
                    advice for important financial decisions.
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

'use client';

import Link from 'next/link';
import { Calculator, Mail, Phone } from 'lucide-react';
import { usePathname } from 'next/navigation';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const pathname = usePathname();
  const baseUrl = "https://calcportalpro.com";
  const currentUrl = `${baseUrl}${pathname}`;

  const footerLinks = {
    calculators: [
      { name: 'Grade Calculator', href: '/calculators/grade' },
      { name: 'GPA Calculator', href: '/calculators/gpa' },
      { name: 'Loan Calculator', href: '/calculators/loan' },
      { name: 'Mortgage Calculator', href: '/calculators/mortgage' },
      { name: 'Tax Calculator', href: '/calculators/tax' },
      { name: 'Retirement Calculator', href: '/calculators/retirement' },
    ],
    resources: [{ name: 'Blog', href: '/blog' }],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Contact', href: '/contact' },
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Disclaimer', href: '/disclaimer' },
    ],
  };

  return (
    <footer className="bg-secondary-500 text-white" aria-label="Site footer">
      <div className="max-w-screen-xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand + Share */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-primary-500 rounded-lg flex items-center justify-center">
                <Calculator size={24} className="text-white" />
              </div>
              <span className="text-2xl font-bold">CalcPortal Pro</span>
            </Link>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Smarter financial tools for better money decisions. Free calculators and educational resources to help you take control of your finances.
            </p>

            {/* Share This Page */}
            {/* ... keep your share icons here unchanged ... */}
          </div>

          {/* Calculators */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Calculators</h3>
            <ul className="space-y-3">
              {footerLinks.calculators.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-primary-400 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-primary-400 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company + Follow */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-3 mb-6">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-primary-400 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Follow Us + Contact (unchanged) */}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-600 mt-12 pt-8">
          <div className="max-w-screen-xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">
              © {currentYear} CalcPortal Pro. All rights reserved.
            </p>
            <p className="text-gray-300 text-sm mt-2 md:mt-0">
              Made with ❤️ for better financial decisions
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

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
    <footer className="bg-secondary-500 text-white">
      <div className="container-max py-16">
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
            <div>
              <h4 className="text-sm font-semibold text-gray-200 mb-2">Share This Page</h4>
              <div className="flex space-x-4">
                {/* Facebook Share */}
                <div className="relative group">
                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Share on Facebook"
                    className="text-gray-300 hover:text-[#1877F2] transition-colors duration-200"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22.675 0h-21.35C.597 0 0 .597 0 1.333v21.333C0 23.403.597 24 1.325 24h11.49v-9.294H9.692V11.01h3.123V8.413c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.463.099 2.794.143v3.24h-1.918c-1.504 0-1.796.715-1.796 1.763v2.309h3.587l-.467 3.696h-3.12V24h6.116c.728 0 1.325-.597 1.325-1.334V1.333C24 .597 23.403 0 22.675 0z"/>
                    </svg>
                  </a>
                  <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 text-xs bg-black text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
                    Share on Facebook
                  </span>
                </div>

                {/* X Share */}
                <div className="relative group">
                  <a
                    href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=Check%20out%20this%20tool%20from%20CalcPortal%20Pro!`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Share on X"
                    className="text-gray-300 hover:text-black transition-colors duration-200"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26L22.5 21.75h-6.525l-5.103-6.682-5.85 6.682H1.714l7.73-8.822L1.5 2.25H8.25l4.713 6.231L18.244 2.25z"/>
                    </svg>
                  </a>
                  <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 text-xs bg-black text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
                    Share on X
                  </span>
                </div>

                {/* LinkedIn Share */}
                <div className="relative group">
                  <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Share on LinkedIn"
                    className="text-gray-300 hover:text-[#0A66C2] transition-colors duration-200"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5V5c0-2.761-2.238-5-5-5zM7.119 20.452H3.56V9h3.559v11.452zM5.34 7.433c-1.144 0-2.068-.926-2.068-2.065s.924-2.064 2.068-2.064c1.143 0 2.067.925 2.067 2.064s-.924 2.065-2.067 2.065zM20.449 20.452h-3.555v-5.569c0-1.328-.026-3.037-1.85-3.037-1.853 0-2.137 1.445-2.137 2.939v5.667h-3.554V9h3.414v1.561h.048c.475-.9 1.637-1.85 3.368-1.85 3.602 0 4.267 2.37 4.267 5.455v6.286z"/>
                    </svg>
                  </a>
                  <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 text-xs bg-black text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
                    Share on LinkedIn
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Calculators */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Calculators</h3>
            <ul className="space-y-3">
              {footerLinks.calculators.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-300 hover:text-primary-400 transition-colors duration-200">
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
                  <Link href={link.href} className="text-gray-300 hover:text-primary-400 transition-colors duration-200">
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
                  <Link href={link.href} className="text-gray-300 hover:text-primary-400 transition-colors duration-200">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Follow Us */}
            <div>
              <h4 className="text-sm font-semibold text-gray-200 mb-2">Follow Us</h4>
              <div className="flex space-x-4">
                {/* Facebook Follow */}
                <div className="relative group">
                  <a
                    href="https://www.facebook.com/people/Calcportal-Pro/61580278657548/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Follow on Facebook"
                    className="text-gray-300 hover:text-[#1877F2] transition-colors duration-200"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22.675 0h-21.35C.597 0 0 .597 0 1.333v21.333C0 23.403.597 24 1.325 24h11.49v-9.294H9.692V11.01h3.123V8.413c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.463.099 2.794.143v3.24h-1.918c-1.504 0-1.796.715-1.796 1.763v2.309h3.587l-.467 3.696h-3.12V24h6.116c.728 0 1.325-.597 1.325-1.334V1.333C24 .597 23.403 0 22.675 0z"/>
                    </svg>
                  </a>
                  <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 text-xs bg-black text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
                    Follow on Facebook
                  </span>
                </div>

                {/* X Follow */}
                <div className="relative group">
                  <a
                    href="https://x.com/calcportalpro"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Follow on X"
                    className="text-gray-300 hover:text-black transition-colors duration-200"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26L22.5 21.75h-6.525l-5.103-6.682-5.85 6.682H1.714l7.73-8.822L1.5 2.25H8.25l4.713 6.231L18.244 2.25z"/>
                    </svg>
                  </a>
                  <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 text-xs bg-black text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
                    Follow on X
                  </span>
                </div>

                {/* LinkedIn Follow */}
                <div className="relative group">
                  <a
                    href="https://www.linkedin.com/in/calcportalpro/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Follow on LinkedIn"
                    className="text-gray-300 hover:text-[#0A66C2] transition-colors duration-200"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5V5c0-2.761-2.238-5-5-5zM7.119 20.452H3.56V9h3.559v11.452zM5.34 7.433c-1.144 0-2.068-.926-2.068-2.065s.924-2.064 2.068-2.064c1.143 0 2.067.925 2.067 2.064s-.924 2.065-2.067 2.065zM20.449 20.452h-3.555v-5.569c0-1.328-.026-3.037-1.85-3.037-1.853 0-2.137 1.445-2.137 2.939v5.667h-3.554V9h3.414v1.561h.048c.475-.9 1.637-1.85 3.368-1.85 3.602 0 4.267 2.37 4.267 5.455v6.286z"/>
                    </svg>
                  </a>
                  <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 text-xs bg-black text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
                    Follow on LinkedIn
                  </span>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div className="space-y-3 mt-6">
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail size={16} />
                <span>contact@calcportalpro.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone size={16} />
                <span>+1 (555) 123-4567</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-600 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
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

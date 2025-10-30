'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/calculators', label: 'Calculators' },
    { href: '/blog', label: 'Blog' },
    { href: '/about', label: 'About' },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50" aria-label="Site header">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link href="/" className="text-xl font-bold text-primary-600">
            CalcPortal<span className="text-gray-900">Pro</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-700 hover:text-primary-600 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Button */}
          <button
            type="button"
            onClick={toggleMenu}
            className="md:hidden text-gray-700 hover:text-primary-600"
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {open && (
          <nav className="md:hidden mt-2 space-y-2 pb-4 border-t border-gray-200">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-2 py-2 text-gray-700 hover:text-primary-600 transition-colors"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}

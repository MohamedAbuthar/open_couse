'use client'
import React, { useState } from 'react';
import { Github, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header: React.FC = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (path: string) => {
    return pathname === path;
  };

  const navigationItems = [
    { href: '/home', label: 'Home' },
    { href: '/product', label: 'Products' },
    // { href: '/data', label: 'Data' },
    // { href: '/Education', label: 'Education' },
    // { href: '/research', label: 'Research' },
    { href: '/career', label: 'Career' },
    { href: '/events', label: 'Events' },
    { href: '/aboutas', label: 'About' },
  ];

  const handleMobileLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-50">
      <div className="max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex items-center justify-between h-16">
          {/* Logo Section */}
          <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
              <img 
                src="/OpenCause final-04.png" 
                alt="OpenCause Foundation" 
                className="h-70 sm:h-54 w-auto"
              />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 absolute left-1/2 transform -translate-x-1/2">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`font-medium text-[15px] transition-colors whitespace-nowrap ${
                  isActive(item.href)
                    ? 'text-red-500'
                    : 'text-gray-700 hover:text-gray-900'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right Section - Desktop */}
          <div className="hidden sm:flex items-center gap-2 sm:gap-3">
            <button
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              onClick={() => window.open('https://github.com/your-username/your-repo', '_blank')}
              title="View on GitHub"
              aria-label="GitHub Repository"
            >
              <Github className="w-5 h-5 text-gray-700" />
            </button>
            <Link
              href="/contribute"
              className="bg-red-500 hover:bg-red-600 text-white font-semibold px-4 sm:px-6 py-2 sm:py-2.5 rounded-md transition-colors text-sm sm:text-[15px]"
            >
              Contribute
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-gray-200 bg-white">
          <nav className="px-4 py-4 space-y-1">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={handleMobileLinkClick}
                className={`block px-4 py-3 rounded-lg font-medium text-[15px] transition-colors ${
                  isActive(item.href)
                    ? 'text-red-500 bg-red-50'
                    : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          
          {/* Mobile Actions */}
          <div className="px-4 pb-4 pt-2 flex flex-col gap-3 sm:hidden border-t border-gray-200">
            <button
              className="flex items-center justify-center gap-2 p-3 hover:bg-gray-100 rounded-lg transition-colors border border-gray-200"
              onClick={() => {
                window.open('https://github.com/your-username/your-repo', '_blank');
                setIsMobileMenuOpen(false);
              }}
              aria-label="GitHub Repository"
            >
              <Github className="w-5 h-5 text-gray-700" />
              <span className="font-medium text-gray-700">View on GitHub</span>
            </button>
            <Link
              href="/contribute"
              onClick={handleMobileLinkClick}
              className="bg-red-500 hover:bg-red-600 text-white font-semibold px-6 py-3 rounded-md transition-colors text-center"
            >
              Contribute
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
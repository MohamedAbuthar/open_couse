'use client'
import React from 'react';
import { Github } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header: React.FC = () => {
  const pathname = usePathname();

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
    { href: '/about', label: 'About' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-50">
      <div className="max-w-[2000px] mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-16">
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-2.5 hover:opacity-80 transition-opacity">
            <div className="bg-black rounded-md p-2 flex items-center justify-center w-9 h-9">
              <span className="text-white font-bold text-base">OC</span>
            </div>
            <span className="text-xl font-semibold text-gray-900">OpenCause</span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8 absolute left-1/2 transform -translate-x-1/2">
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

          {/* Right Section */}
          <div className="flex items-center gap-3">
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
              className="bg-red-500 hover:bg-red-600 text-white font-semibold px-6 py-2.5 rounded-md transition-colors text-[15px]"
            >
              Contribute
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
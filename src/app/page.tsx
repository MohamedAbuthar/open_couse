import React from 'react';
import { Button } from '@/component/ui/button';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white">
      {/* Newsletter and Get in Touch Section */}
      <div className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Newsletter Section */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Newsletter</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Monthly digest of the latest updates about open source projects, events, and educational programs. Subscribe to stay connected.
              </p>
              <div className="flex gap-3">
                <Button className="bg-red-500 hover:bg-red-600 text-white">
                  Subscribe
                </Button>
                <Button variant="outline" className="text-gray-900 border-gray-300">
                  RSS Feed
                </Button>
              </div>
            </div>

            {/* Get in Touch Section */}
            <div className="lg:border-l lg:border-gray-200 lg:pl-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Get in Touch</h2>
              <p className="text-gray-600 mb-6">
                Write to us at{' '}
                <a href="mailto:hello@opencause.org" className="text-red-500 hover:text-red-600">
                  hello@opencause.org
                </a>
              </p>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5 text-gray-700" />
                </a>
                <a
                  href="#"
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5 text-gray-700" />
                </a>
                <a
                  href="#"
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5 text-gray-700" />
                </a>
                <a
                  href="#"
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5 text-gray-700" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Links Section */}
      <div className="bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            {/* About Us */}
            <div>
              <h3 className="font-semibold text-white mb-4">About Us</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                    Our Story
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                    Team
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                    Partners
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            {/* Programs */}
            <div>
              <h3 className="font-semibold text-white mb-4">Programs</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                    Open Source Products
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                    Open Data
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                    Education
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                    Research
                  </a>
                </li>
              </ul>
            </div>

            {/* Community */}
            <div>
              <h3 className="font-semibold text-white mb-4">Community</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                    Events
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                    Career
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                    Contribute
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                    Get Involved
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="font-semibold text-white mb-4">Legal</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                    Code of Conduct
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                    Licenses
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="pt-8 border-t border-gray-800">
            <p className="text-center text-gray-400 text-sm">
              © 2025 OpenCause Foundation. CC-BY-SA. All code licensed under MIT.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
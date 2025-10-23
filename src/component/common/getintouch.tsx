'use client';

import React, { useState } from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import { Button } from '@/component/ui/button';
import Header from './headersection';
import Footer from './footersection';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    category: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
  };

  return (
    <>
      <Header/>

      <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
        {/* Header Section */}
        <div className="text-center pt-16 pb-12 px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Get in <span className="text-red-600">Touch</span>
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Have a project idea, partnership opportunity, or question? We&apos;d love to hear from you.
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column - Contact Info Cards */}
            <div className="lg:col-span-1 space-y-6">
              {/* Email Card */}
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center mb-4">
                  <Mail className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Email Us</h3>
                <p className="text-gray-600">connect@opencausefoundation.org</p>
              </div>

              {/* Visit Card */}
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Visit Us</h3>
                <p className="text-gray-600">
                  97G/4C/1,1st Floor, PSS Jayam Towers, TeachersColony, Tuticorin, Tamilnadu, India, 628008
                </p>
              </div>

              {/* Call Card */}
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center mb-4">
                  <Phone className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Call Us</h3>
                <p className="text-gray-600">+91 7904210874</p>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="lg:col-span-2 bg-white rounded-2xl p-8 md:p-10 shadow-sm border border-gray-100">
              <h2 className="text-3xl font-bold mb-8">Send us a Message</h2>
              
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name Field */}
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Name <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black-600 focus:border-transparent"
                    />
                  </div>

                  {/* Organization Field */}
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Organization
                    </label>
                    <input
                      type="text"
                      name="organization"
                      placeholder="Company or NGO (optional)"
                      value={formData.organization}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Email Field */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Email <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black-600 focus:border-transparent"
                  />
                </div>

                {/* Category Field */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Category <span className="text-red-600">*</span>
                  </label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black-600 focus:border-transparent appearance-none bg-white bg-[url('data:image/svg+xml;charset=UTF-8,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 24 24%27 fill=%27none%27 stroke=%27currentColor%27 stroke-width=%272%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3e%3cpolyline points=%276 9 12 15 18 9%27%3e%3c/polyline%3e%3c/svg%3e')] bg-[length:1.25rem] bg-[right_0.75rem_center] bg-no-repeat"
                  >
                    <option value="">Select a category</option>
                    <option value="project">Project Inquiry</option>
                    <option value="partnership">Partnership</option>
                    <option value="general">General Question</option>
                    <option value="support">Support</option>
                  </select>
                </div>

                {/* Message Field */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Message <span className="text-red-600">*</span>
                  </label>
                  <textarea
                    name="message"
                    placeholder="Tell us about your inquiry..."
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black-600 focus:border-transparent resize-none"
                  />
                </div>

                {/* Submit Button - Using shadcn Button */}
                <Button 
                  onClick={handleSubmit}
                  className="w-full h-12 text-base font-semibold bg-red-600 hover:bg-red-700"
                >
                  Send Message
                </Button>

                {/* Privacy Policy Text */}
                <p className="text-sm text-gray-500 text-center">
                  By submitting this form, you agree to our privacy policy. We&apos;ll respond within 2-3 business days.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}
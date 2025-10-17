import React from 'react';
import { MessageSquare, Heart, BarChart3, Clipboard, Sprout, Trees, Building2, GraduationCap, Users, Globe } from 'lucide-react';
import { Button } from '@/component/ui/button';
import Header from '../common/headersection';
import Footer from '../common/footersection';

interface ProductCardProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  category: string;
  description: string;
  tags: string[];
  isActive: boolean;
}

const ProductCard = ({ icon: Icon, title, category, description, tags, isActive }: ProductCardProps) => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <div className="bg-red-50 rounded-lg p-3">
          <Icon className="w-6 h-6 text-red-600" />
        </div>
        {isActive && (
          <span className="bg-red-600 text-white text-xs font-medium px-3 py-1 rounded-full">
            Active
          </span>
        )}
      </div>
      
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm mb-4">{category}</p>
      <p className="text-gray-700 text-sm mb-6 leading-relaxed">{description}</p>
      
      <div className="flex flex-wrap gap-2 mb-6">
        {tags.map((tag: string, index: number) => (
          <span key={index} className="bg-white border border-gray-200 rounded px-3 py-1 text-xs font-medium text-gray-700">
            {tag}
          </span>
        ))}
      </div>
      
      <div className="flex gap-3">
        <Button className="bg-red-600 hover:bg-red-700">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 16 16">
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
          </svg>
          View Code
        </Button>
        <Button variant="outline" className="border-gray-300">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
          Demo
        </Button>
      </div>
    </div>
  );
};

interface Product {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  category: string;
  description: string;
  tags: string[];
  isActive: boolean;
}

export default function ProductsPage() {
  const products: Product[] = [
    {
      icon: MessageSquare,
      title: 'WhatsApp-Based AI Chatbot & LMIS',
      category: 'Healthcare & Education',
      description: 'AI chatbot and Learning Management System for training Frontline Health Workers via WhatsApp with multilingual support, quizzes, and real-time analytics.',
      tags: ['WhatsApp API', 'AI/NLP', 'React', 'Node.js'],
      isActive: true
    },
    {
      icon: Heart,
      title: 'CoDA Center Management System',
      category: 'Counselling & Digital Access',
      description: 'Comprehensive system for managing counseling and digital centers across villages with session logging, beneficiary tracking, and impact analytics.',
      tags: ['React', 'PostgreSQL', 'Node.js'],
      isActive: true
    },
    {
      icon: BarChart3,
      title: 'CSR Project Monitoring Dashboard',
      category: 'Impact Analytics',
      description: 'Centralized platform for tracking CSR projects with KPI monitoring, budget utilization, geo-tagged visualization, and comprehensive impact reporting.',
      tags: ['React', 'PostgreSQL', 'Power BI'],
      isActive: true
    },
    {
      icon: Clipboard,
      title: 'Data Collection & Field Survey App',
      category: 'Field Operations',
      description: 'Mobile-first data collection platform with offline capability, GPS tagging, photo proof, and dynamic form builder for field surveys.',
      tags: ['React Native', 'PostgreSQL', 'Metabase'],
      isActive: true
    },
    {
      icon: Sprout,
      title: 'Farmer & Land Data Collection System',
      category: 'Agriculture & Carbon Farming',
      description: 'GPS-based land mapping system for agriculture CSR initiatives with crop tracking, farmer verification, and carbon credit integration.',
      tags: ['React', 'GPS API', 'PostgreSQL'],
      isActive: true
    },
    {
      icon: Trees,
      title: 'Tree Plantation & Survival Tracker',
      category: 'Environmental',
      description: 'Geo-tagged plantation monitoring system with species tracking, survival analytics, and district-wise environmental impact heatmaps.',
      tags: ['React', 'GPS API', 'Analytics'],
      isActive: true
    },
    {
      icon: Building2,
      title: 'Health Camp & Beneficiary Management',
      category: 'Healthcare',
      description: 'Complete medical camp management system with patient registration, doctor assignment, medicine tracking, and follow-up management.',
      tags: ['React', 'PostgreSQL', 'Node.js'],
      isActive: true
    },
    {
      icon: GraduationCap,
      title: 'Skill Development & Training Portal',
      category: 'Capacity Building',
      description: 'Vocational training platform with LMS integration, certification management, batch attendance, and trainer performance dashboards.',
      tags: ['React', 'LMS', 'PostgreSQL'],
      isActive: true
    },
    {
      icon: Users,
      title: 'Volunteer & NGO Partner Management',
      category: 'Partner Coordination',
      description: 'Comprehensive system for managing volunteers and NGO partners with enrollment tracking, activity monitoring, and impact documentation.',
      tags: ['React', 'PostgreSQL', 'Analytics'],
      isActive: true
    },
    {
      icon: Globe,
      title: 'OpenCause Platform',
      category: 'Digital Public Goods',
      description: 'Open-source CSR tech ecosystem with pre-built modules, open APIs for NGOs and Foundations, and AI-driven insights for sustainable impact.',
      tags: ['React', 'Node.js', 'AI/ML', 'Open APIs'],
      isActive: true
    }
  ];

  return (
    <>
      <Header/>
      <div className="min-h-screen bg-gray-50">
        {/* Header Section */}
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
            <p className="text-sm text-gray-600 mb-2">Open Source Software</p>
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              Our <span className="text-red-600">Products</span>
            </h1>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Building open-source software that empowers communities, organizations,
              and individuals to create positive social impact.
            </p>
          </div>
        </div>

        {/* Products Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {products.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="bg-white border-t border-gray-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Want to Contribute?</h2>
            <p className="text-gray-600 text-lg mb-8">
              All our products are open source and welcome contributions from the community.
            </p>
            <div className="flex gap-4 justify-center">
              <Button className="bg-red-600 hover:bg-red-700 h-11 px-8">
                View on GitHub
              </Button>
              <Button variant="outline" className="border-gray-300 h-11 px-8">
                Get in Touch
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}
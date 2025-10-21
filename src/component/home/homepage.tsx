'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import { ArrowRight, Code, Users, Leaf, Eye, Github, ExternalLink, Brain, Zap, Cpu, Bot } from 'lucide-react';
import Header from '../common/headersection';
import Footer from '../common/footersection';

// shadcn button component
type ButtonVariant = 'default' | 'outline';
type ButtonSize = 'default' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
}

const Button = ({ 
  children, 
  variant = 'default', 
  size = 'default', 
  className = '',
  ...props 
}: ButtonProps) => {
  const baseStyles = "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50";
  
  const variants: Record<ButtonVariant, string> = {
    default: "bg-red-600 text-white hover:bg-red-700",
    outline: "border border-gray-300 bg-white hover:bg-gray-50",
  };
  
  const sizes: Record<ButtonSize, string> = {
    default: "h-11 px-6 py-2",
    lg: "h-12 px-8 text-base",
  };
  
  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

// shadcn card components
interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

const Card = ({ children, className = '', ...props }: CardProps) => (
  <div className={`bg-white rounded-xl border border-gray-200 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${className}`} {...props}>
    {children}
  </div>
);

const CardContent = ({ children, className = '', ...props }: CardProps) => (
  <div className={`p-6 ${className}`} {...props}>
    {children}
  </div>
);

export default function OpenCauseLanding() {
  const router = useRouter();

  const handleExploreEvents = () => {
    router.push('/events');
  };

  const handleViewProducts = () => {
    router.push('/product');
  };

  return (
    <>
    <Header/>
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white pt-16 sm:pt-20 pb-20 sm:pb-28 md:pb-32">
        <div className="absolute top-10 right-10 sm:right-20 w-24 h-24 sm:w-32 sm:h-32 bg-green-100 rounded-full opacity-60 blur-3xl" />
        <div className="absolute bottom-10 sm:bottom-20 left-5 sm:left-10 w-32 h-32 sm:w-40 sm:h-40 bg-green-100 rounded-full opacity-60 blur-3xl" />
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          {/* Badge */}
          <div className="flex justify-center mb-6 sm:mb-8">
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-white border border-gray-200 rounded-full text-xs sm:text-sm">
              <Leaf className="w-3 h-3 sm:w-4 sm:h-4 text-red-600" />
              <span className="text-gray-700">Open Source · Ethical · Impactful</span>
            </div>
          </div>

          {/* Main Heading */}
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 px-2">
              Building an Open World with{' '}
              <span className="text-red-600">Ed Tech Art Love</span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 sm:mb-12 leading-relaxed px-4">
              OpenCause Foundation creates open-source software, data, and educational
              resources that empower communities through technology, research, and
              creative collaboration.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
              <Button size="lg" onClick={handleExploreEvents} className="w-full sm:w-auto">
                Explore Events <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg" onClick={handleViewProducts} className="w-full sm:w-auto">
                View Products
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 max-w-6xl mx-auto mt-12 sm:mt-16 md:mt-20">
            {[
              { number: '25+', label: 'Open Projects' },
              { number: '10K+', label: 'Communities Served' },
              { number: '15+', label: 'CSR Partners' },
              { number: '100+', label: 'Active Contributors' },
            ].map((stat, idx) => (
              <Card key={idx}>
                <CardContent className="text-center py-3 sm:py-4">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-red-600 mb-1 sm:mb-2">{stat.number}</div>
                  <div className="text-xs sm:text-sm md:text-base text-gray-600">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">About OpenCause Foundation</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 px-4">
              We believe in building an open world through Education, Technology, Art, and Love. Our
              mission is to create and share open-source solutions that empower communities and drive
              positive change.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: <Code className="w-6 h-6" />,
                title: 'Open Source First',
                description: 'Everything we build is open source. From software to educational content, we believe in transparency and community collaboration.',
              },
              {
                icon: <Users className="w-6 h-6" />,
                title: 'Community Driven',
                description: "We're powered by contributors, volunteers, and supporters who share our vision of an open and accessible world.",
              },
              {
                icon: <Zap className="w-6 h-6" />,
                title: 'Innovation Focus',
                description: 'We invest in research and development to create cutting-edge solutions that address real-world challenges.',
              },
              {
                icon: <Leaf className="w-6 h-6" />,
                title: 'Impact Oriented',
                description: 'Every project we undertake aims to create meaningful, lasting impact in education, technology, art, and social good.',
              },
            ].map((item, idx) => (
              <Card key={idx} className="hover:border-red-200 hover:shadow-md">
                <CardContent className="p-6 sm:p-8">
                  <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center text-red-600 mb-4 transition-colors duration-300 group-hover:bg-red-100">
                    {item.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainable Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <Card className="max-w-5xl mx-auto">
            <CardContent className="p-6 sm:p-8 md:p-12 bg-gray-100">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">Sustainable by Design</h2>
              <p className="text-gray-600 mb-6 sm:mb-8 text-sm sm:text-base md:text-lg">
                OpenCause Foundation operates on a sustainable model that ensures long-term impact without
                compromising our open-source values. We generate revenue through:
              </p>

              <div className="space-y-3 sm:space-y-4">
                {[
                  {
                    title: 'Implementation Support:',
                    description: 'Helping organizations deploy and customize our open-source solutions',
                  },
                  {
                    title: 'Training Programs:',
                    description: 'Professional development and certification programs for individuals and teams',
                  },
                  {
                    title: 'R&D Partnerships:',
                    description: 'Collaborative research projects with academic institutions and organizations',
                  },
                  {
                    title: 'Community Donations:',
                    description: 'Support from individuals and organizations who believe in our mission',
                  },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-3">
                    <div className="w-1.5 h-1.5 bg-red-600 rounded-full mt-2.5 flex-shrink-0" />
                    <p className="text-sm sm:text-base text-gray-700">
                      <span className="font-semibold">{item.title}</span> {item.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-6 sm:mt-8 p-4 sm:p-6 bg-gray-100">
                <p className="text-sm sm:text-base text-gray-700">
                  <span className="font-semibold">100% of our earnings are reinvested</span> into creating more open-source tools, educational content, and
                  community programs. We maintain complete financial transparency and operate with community
                  governance.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* What We Build Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
              What We <span className="text-red-600">Build</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 px-4">
              Cutting-edge open-source technologies designed to solve real-world
              challenges in communities worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: <Brain className="w-6 h-6 sm:w-8 sm:h-8" />,
                title: 'AI & Data Intelligence',
                description: 'Machine learning models, predictive analytics, and AI-powered tools for social impact measurement and decision-making.',
              },
              {
                icon: <Code className="w-6 h-6 sm:w-8 sm:h-8" />,
                title: 'Software & Digital Platforms',
                description: 'Web and mobile applications, learning management systems, and digital platforms built for accessibility and scale.',
              },
              {
                icon: <Cpu className="w-6 h-6 sm:w-8 sm:h-8" />,
                title: 'IoT & Hardware Systems',
                description: 'Connected sensors, environmental monitoring devices, and edge computing solutions for real-time data collection.',
              },
              {
                icon: <Bot className="w-6 h-6 sm:w-8 sm:h-8" />,
                title: 'Robotics & Automation',
                description: 'Autonomous systems for agriculture, disaster response, and sustainable manufacturing with open-source designs.',
              },
            ].map((item, idx) => (
              <Card key={idx} className="group hover:border-red-300 hover:shadow-xl cursor-pointer">
                <CardContent className="p-6 sm:p-8">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-red-600 rounded-xl flex items-center justify-center text-white mb-4 sm:mb-6 transition-all duration-300 group-hover:bg-red-700 group-hover:scale-110">
                    {item.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 sm:mb-3 transition-colors duration-300 group-hover:text-red-600">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed transition-colors duration-300 group-hover:text-gray-700">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
              Featured <span className="text-red-600">Projects</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 px-4">
              Explore our open-source projects making real-world impact across
              communities globally.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-6xl mx-auto">
            {[
              {
                tags: ['AI', 'Education', 'Accessibility'],
                title: 'CommonsLMS-AI',
                description: 'AI-powered learning management system designed for nonprofits with automated content recommendations and accessibility features.',
              },
              {
                tags: ['IoT', 'Environment', 'Hardware'],
                title: 'AquaSense IoT',
                description: 'Low-cost water quality monitoring sensors for rural communities with real-time alerts and cloud analytics.',
              },
              {
                tags: ['AI', 'IoT', 'Environment'],
                title: 'ImpactLens',
                description: 'Computer vision system for monitoring agricultural yield, deforestation, and environmental changes using satellite imagery.',
              },
              {
                tags: ['Robotics', 'Agriculture', 'Sustainability'],
                title: 'RoboFarm Assist',
                description: 'Autonomous farming robot for sustainable agriculture with precision planting, weeding, and crop monitoring capabilities.',
              },
              {
                tags: ['Data', 'Analytics', 'ESG'],
                title: 'DataHub ESG',
                description: 'Open-source platform for tracking and visualizing environmental, social, and governance metrics for social enterprises.',
              },
              {
                tags: ['AI', 'Civic Tech', 'NLP'],
                title: 'CivicVoice AI',
                description: 'Natural language processing tool for analyzing community feedback and sentiment from surveys and public consultations.',
              },
            ].map((project, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex gap-2 mb-3 sm:mb-4 flex-wrap">
                    {project.tags.map((tag, tagIdx) => (
                      <span key={tagIdx} className="px-2 sm:px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">{project.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">{project.description}</p>
                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                    <Button variant="outline" size="default" className="flex-1 text-xs sm:text-sm">
                      <Github className="w-4 h-4" /> Code
                    </Button>
                    <Button variant="outline" size="default" className="flex-1 text-xs sm:text-sm">
                      <ExternalLink className="w-4 h-4" /> Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8 sm:mt-12 px-4">
            <Button variant="outline" size="lg" className="w-full sm:w-auto">
              View All Projects on GitHub <Github className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Why Open Source Matters Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-red-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
              Why <span className="text-red-600">Open Source</span> Matters
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 px-4">
              Open-source isn&apos;t just a development model—it&apos;s a philosophy of shared
              knowledge and collective progress.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12 max-w-5xl mx-auto">
            {[
              {
                icon: <Eye className="w-6 h-6 sm:w-8 sm:h-8" />,
                title: 'Transparent',
                description: 'Every line of code is open for review, ensuring accountability and trust in the tools serving communities.',
              },
              {
                icon: <Users className="w-6 h-6 sm:w-8 sm:h-8" />,
                title: 'Accessible',
                description: "Free to use, modify, and distribute. Technology shouldn't be locked behind paywalls when addressing social challenges.",
              },
              {
                icon: <Leaf className="w-6 h-6 sm:w-8 sm:h-8" />,
                title: 'Sustainable',
                description: 'Built by communities, for communities. Open collaboration ensures long-term maintenance and continuous improvement.',
              },
            ].map((item, idx) => (
              <div key={idx} className="text-center group cursor-pointer">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-red-600 rounded-2xl flex items-center justify-center text-white mb-4 sm:mb-6 mx-auto transition-all duration-300 group-hover:bg-red-700 group-hover:scale-110">
                  {item.icon}
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 transition-colors duration-300 group-hover:text-red-600">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed transition-colors duration-300 group-hover:text-gray-700 px-4">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto mt-12 sm:mt-16 p-6 sm:p-8 bg-white rounded-xl transition-all duration-300 hover:shadow-lg">
            <p className="text-base sm:text-lg italic text-gray-700 text-center">
              &quot;When technology is open, innovation knows no boundaries. When
              innovation is accessible, impact knows no limits.&quot;
            </p>
            <p className="text-sm sm:text-base text-gray-500 text-center mt-4">— OpenCause Foundation Philosophy</p>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-red-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-red-600 rounded-2xl flex items-center justify-center text-white mb-4 sm:mb-6 mx-auto">
              <svg className="w-7 h-7 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
              Stay Updated on Our <span className="text-red-600">Impact Journey</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-6 sm:mb-8 px-4">
              Get monthly updates on new projects, success stories, fellowship
              opportunities, and how open-source technology is creating real-world change.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto px-4">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 bg-white transition-colors duration-300 hover:border-red-300 focus:border-red-500 focus:outline-none text-sm sm:text-base"
              />
              <Button size="lg" className="w-full sm:w-auto">Subscribe</Button>
            </div>

            <p className="text-xs sm:text-sm text-gray-500 mt-4">
              We respect your privacy. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>
    </div>
    <Footer/>
    </>
  );
}
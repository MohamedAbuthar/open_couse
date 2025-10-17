'use client';

import React from 'react';
import { Eye, Heart, Users, Target } from 'lucide-react';
import Header from '../common/headersection';
import Footer from '../common/footersection';

const Card = ({ className = '', ...props }: React.ComponentProps<"div">) => (
  <div
    data-slot="card"
    className={`bg-white text-gray-900 flex flex-col gap-6 rounded-xl border border-gray-200 py-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-105 hover:border-red-600 cursor-pointer ${className}`}
    {...props}
  />
);

const CardHeader = ({ className = '', ...props }: React.ComponentProps<"div">) => (
  <div
    data-slot="card-header"
    className={`@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6 ${className}`}
    {...props}
  />
);

const CardTitle = ({ className = '', ...props }: React.ComponentProps<"div">) => (
  <div
    data-slot="card-title"
    className={`leading-none font-semibold text-xl ${className}`}
    {...props}
  />
);

const CardDescription = ({ className = '', ...props }: React.ComponentProps<"div">) => (
  <div
    data-slot="card-description"
    className={`text-gray-600 text-sm leading-relaxed ${className}`}
    {...props}
  />
);

const CardAction = ({ className = '', ...props }: React.ComponentProps<"div">) => (
  <div
    data-slot="card-action"
    className={`col-start-2 row-span-2 row-start-1 self-start justify-self-end ${className}`}
    {...props}
  />
);

const CardContent = ({ className = '', ...props }: React.ComponentProps<"div">) => (
  <div
    data-slot="card-content"
    className={`px-6 ${className}`}
    {...props}
  />
);

const CardFooter = ({ className = '', ...props }: React.ComponentProps<"div">) => (
  <div
    data-slot="card-footer"
    className={`flex items-center px-6 [.border-t]:pt-6 ${className}`}
    {...props}
  />
);

export default function AboutOpenCause() {
  const values = [
    {
      icon: Eye,
      title: 'Open',
      description: 'We believe in transparent development, open-source code, and shared knowledge for collective progress.'
    },
    {
      icon: Heart,
      title: 'Ethical',
      description: 'Technology should serve humanity responsibly, respecting privacy, inclusivity, and environmental sustainability.'
    },
    {
      icon: Users,
      title: 'Inclusive',
      description: 'Our tools and programs are designed to be accessible to all, regardless of technical background or resources.'
    },
    {
      icon: Target,
      title: 'Impactful',
      description: 'We measure success by real-world outcomes—lives improved, communities empowered, environments protected.'
    }
  ];

  return (
    <>
    <Header />
    <div className="min-h-screen bg-gray-50">
      {/* About Section */}
      <section className="py-20 px-6 text-center">
        <h1 className="text-5xl font-bold mb-6">
          About <span className="text-red-600">OpenCause</span>
        </h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          We &apos; re a Section 8 nonprofit democratizing technology for sustainable social impact through open-source innovation.
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          <Card className="">
            <CardHeader className="">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-600 mb-4">
                <Target className="h-6 w-6 text-white" />
              </div>
              <CardTitle className="">Our Mission</CardTitle>
            </CardHeader>
            <CardContent className="">
              <CardDescription className="">
                To democratize technology for sustainable social impact by building open-source tools that empower communities, train changemakers, and bridge the gap between innovation and inclusion.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="">
            <CardHeader className="">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gray-200 mb-4">
                <Eye className="h-6 w-6 text-gray-400" />
              </div>
              <CardTitle className="">Our Vision</CardTitle>
            </CardHeader>
            <CardContent className="">
              <CardDescription className="">
                A world where open technology bridges the gap between innovation and inclusion—where anyone can access, learn, and contribute to solutions that create lasting positive change.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Our Core <span className="text-red-600">Values</span>
            </h2>
            <p className="text-gray-600">
              These principles guide every decision we make and every project we build.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card className="items-center text-center" key={index}>
                  <div className="flex flex-col items-center px-6 gap-2">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red-600 mb-2">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl">{value.title}</CardTitle>
                  </div>
                  <CardContent className="">
                    <CardDescription className="text-center">
                      {value.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            Our <span className="text-red-600">Story</span>
          </h2>
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p>
              OpenCause Foundation was born from a simple observation: cutting-edge technology often remains locked behind commercial barriers, inaccessible to the communities that need it most.
            </p>
            <p>
              We saw nonprofits struggling with outdated tools, rural communities lacking access to IoT solutions, and talented youth unable to break into tech careers focused on social good. We knew there had to be a better way.
            </p>
            <p>
              Today, we &apos; re building that better way—one open-source project, one trained fellow, one partnership at a time. Our team of engineers, researchers, and social innovators works alongside NGOs, CSR teams, and local communities to co-create solutions that actually work.
            </p>
            <p className="font-bold text-lg">
              We believe the future of technology is open, collaborative, and built for everyone—not just those who can afford it.
            </p>
          </div>
        </div>
      </section>

      {/* Built by Community */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-8">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-red-600">
              <Users className="h-8 w-8 text-white" />
            </div>
          </div>
          <h2 className="text-4xl font-bold mb-6">
            Built by <span className="text-red-600">Community</span>
          </h2>
          <p className="text-gray-600 text-lg">
            OpenCause is powered by a diverse team of technologists, social workers, researchers, and volunteers from around the world—united by a shared vision of technology that serves the common good.
          </p>
        </div>
      </section>
    </div>
    <Footer />
    </>
  );
}
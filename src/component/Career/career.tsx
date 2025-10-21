'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import { Heart, Briefcase, BookOpen, Users } from 'lucide-react';
import Header from '../common/headersection';
import Footer from '../common/footersection';

interface CardProps extends React.ComponentProps<"div"> {
  className?: string;
}

interface CardHeaderProps extends React.ComponentProps<"div"> {
  className?: string;
}

interface CardTitleProps extends React.ComponentProps<"div"> {
  className?: string;
}

interface CardDescriptionProps extends React.ComponentProps<"div"> {
  className?: string;
}

interface CardActionProps extends React.ComponentProps<"div"> {
  className?: string;
}

interface CardContentProps extends React.ComponentProps<"div"> {
  className?: string;
}

interface CardFooterProps extends React.ComponentProps<"div"> {
  className?: string;
}

function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
}

function Card({ className, ...props }: CardProps) {
  return (
    <div
      data-slot="card"
      className={cn(
        "bg-white text-gray-900 flex flex-col gap-6 rounded-xl border border-gray-200 py-6 shadow-sm",
        className
      )}
      {...props}
    />
  )
}

function CardHeader({ className, ...props }: CardHeaderProps) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        "grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 [.border-b]:pb-6",
        className
      )}
      {...props}
    />
  )
}

function CardTitle({ className, ...props }: CardTitleProps) {
  return (
    <div
      data-slot="card-title"
      className={cn("leading-none font-semibold text-lg", className)}
      {...props}
    />
  )
}

function CardDescription({ className, ...props }: CardDescriptionProps) {
  return (
    <div
      data-slot="card-description"
      className={cn("text-gray-600 text-sm", className)}
      {...props}
    />
  )
}

function CardAction({ className, ...props }: CardActionProps) {
  return (
    <div
      data-slot="card-action"
      className={cn(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
        className
      )}
      {...props}
    />
  )
}

function CardContent({ className, ...props }: CardContentProps) {
  return (
    <div
      data-slot="card-content"
      className={cn("px-6", className)}
      {...props}
    />
  )
}

function CardFooter({ className, ...props }: CardFooterProps) {
  return (
    <div
      data-slot="card-footer"
      className={cn("flex items-center px-6 [.border-t]:pt-6", className)}
      {...props}
    />
  )
}

export default function CareerPage() {
  const router = useRouter();

  const handleApplyClick = () => {
    router.push('/contact');
  };

  const benefits = [
    {
      icon: Heart,
      title: "Purpose-Driven",
      description: "Work on projects that create real social and environmental impact."
    },
    {
      icon: Briefcase,
      title: "Flexible Work",
      description: "Remote-first culture with flexible hours and work arrangements."
    },
    {
      icon: BookOpen,
      title: "Learn & Grow",
      description: "Continuous learning opportunities and skill development support."
    },
    {
      icon: Users,
      title: "Great Community",
      description: "Collaborate with talented, passionate people from diverse backgrounds."
    }
  ];

  const positions = [
    {
      title: "Open Source Developer",
      type: "Open",
      employment: "Full-time • Remote",
      description: "Build and maintain open-source software products that create social impact.",
      skills: ["React", "Node.js", "TypeScript", "PostgreSQL"]
    },
    {
      title: "Research Fellow",
      type: "Open",
      employment: "Fellowship • Hybrid",
      description: "Conduct research on technology applications in education and social development.",
      skills: ["Research Methods", "Data Analysis", "Technical Writing"]
    },
    {
      title: "Community Manager",
      type: "Open",
      employment: "Part-time • Remote",
      description: "Engage and grow our community of contributors, volunteers, and partners.",
      skills: ["Communication", "Event Management", "Community Building"]
    },
    {
      title: "Data Scientist",
      type: "Filled",
      employment: "Contract • Remote",
      description: "Analyze social impact data and develop insights for our programs.",
      skills: ["Python", "Machine Learning", "Data Visualization", "SQL"]
    }
  ];

  return (
    <>
    <Header />
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm font-medium text-gray-600 mb-4 border border-gray-200 rounded-full inline-block px-4 py-1 mt-5">Join Our Team</p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Build Your <span className="text-red-600">Career</span> with Purpose
          </h1>
          <p className="text-lg text-gray-600">
            Join a mission-driven team creating open technology for social good. Work on meaningful projects while growing your skills.
          </p>
        </div>
      </section>

      {/* Why Join Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why Join OpenCause?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card key={index} className="border-gray-200">
                  <CardContent className="pt-4">
                    <Icon className="w-12 h-12 text-red-600 mb-4" strokeWidth={1.5} />
                    <CardTitle className="mb-3">{benefit.title}</CardTitle>
                    <CardDescription>{benefit.description}</CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">Open Positions</h2>
          <div className="space-y-6">
            {positions.map((position, index) => (
              <Card key={index} className="border-gray-200">
                <div className="px-6 py-4">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-bold text-gray-900">{position.title}</h3>
                        <span className={`text-xs font-bold px-3 py-1 rounded ${
                          position.type === "Open" 
                            ? "bg-red-600 text-white" 
                            : "bg-gray-300 text-gray-700"
                        }`}>
                          {position.type}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600">{position.employment}</p>
                    </div>
                    <button 
                      onClick={handleApplyClick}
                      className={`px-6 py-2.5 rounded-lg font-semibold transition-colors whitespace-nowrap ml-4 ${
                        position.type === "Open"
                          ? "bg-red-600 text-white hover:bg-red-700"
                          : "text-gray-600 cursor-not-allowed"
                      }`}
                      disabled={position.type !== "Open"}>
                      {position.type === "Open" ? "Apply Now" : ""}
                    </button>
                  </div>
                  <p className="text-gray-700 mb-4">{position.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {position.skills.map((skill, idx) => (
                      <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-900 text-sm rounded-full font-medium border border-gray-200">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Volunteer Opportunities</h2>
          <p className="text-lg text-gray-600 mb-8">
            Not ready for a full-time commitment? Join us as a volunteer contributor and make an impact in your spare time.
          </p>
          <button className="px-8 py-3 border-2 border-gray-100 text-gray-900 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
          onClick={() => router.push('/contact')}>
            Become a Volunteer
          </button>
        </div>
      </section>
    </div>
    <Footer  />
    </>
  );
}
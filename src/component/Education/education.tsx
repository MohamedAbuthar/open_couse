'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import { GraduationCap, Video, BookOpen, FileText } from 'lucide-react';
import Header from '../common/headersection';
import Footer from '../common/footersection';

// Reusable Card Components
function Card({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card"
      className={`bg-white text-gray-900 flex flex-col gap-6 rounded-xl border border-gray-200 py-6 shadow-sm ${className || ''}`}
      {...props}
    />
  )
}

function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-header"
      className={`@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] ${className || ''}`}
      {...props}
    />
  )
}

function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-title"
      className={`leading-none font-semibold text-2xl ${className || ''}`}
      {...props}
    />
  )
}

function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-description"
      className={`text-gray-500 text-sm ${className || ''}`}
      {...props}
    />
  )
}

function CardAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-action"
      className={`col-start-2 row-span-2 row-start-1 self-start justify-self-end ${className || ''}`}
      {...props}
    />
  )
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-content"
      className={`px-6 ${className || ''}`}
      {...props}
    />
  )
}

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-footer"
      className={`flex items-center px-6 gap-4 ${className || ''}`}
      {...props}
    />
  )
}

// Course Data
const courses = [
  {
    id: 1,
    icon: GraduationCap,
    title: 'Introduction to Open Source',
    category: 'Course',
    description: 'Complete beginner-friendly course on contributing to open source projects.',
    level: 'Beginner',
    resources: ['Video', 'Text', 'Exercises'],
    duration: '4 weeks',
  },
  {
    id: 2,
    icon: Video,
    title: 'Data Science for Social Good',
    category: 'Workshop Series',
    description: 'Learn to apply data science techniques to solve social and environmental challenges.',
    level: 'Intermediate',
    resources: ['Video', 'Code Labs'],
    duration: '6 weeks',
  },
  {
    id: 3,
    icon: BookOpen,
    title: 'Building Community Tech',
    category: 'Guide',
    description: 'Comprehensive guide to creating technology solutions for community needs.',
    level: 'All Levels',
    resources: ['Text', 'Case Studies'],
    duration: 'Self-paced',
  },
  {
    id: 4,
    icon: FileText,
    title: 'Research Methodology for Impact',
    category: 'Course',
    description: 'Methods and frameworks for conducting research in the social sector.',
    level: 'Advanced',
    resources: ['Video', 'Readings', 'Projects'],
    duration: '8 weeks',
  },
];

export default function LearnAndGrow() {
  const router = useRouter();

  const handleBecomeInstructor = () => {
    router.push('/contact');
  };

  return (
    <>
    <Header />


    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <div className="text-center pt-16 pb-20 px-4">
        <p className="text-gray-600 text-sm font-medium mb-4 border border-gray-200 rounded-full inline-block px-4 py-1">Educational Materials</p>
        <h1 className="text-6xl font-bold mb-6">
          Learn & <span className="text-red-600">Grow</span>
        </h1>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
          Free, open educational resources designed to build skills in technology, research, and social innovation.
        </p>
      </div>

      {/* Courses Grid */}
      <div className="max-w-7xl mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {courses.map((course) => {
            const IconComponent = course.icon;
            return (
              <Card key={course.id}>
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="bg-red-100 p-4 rounded-lg flex-shrink-0">
                      <IconComponent className="w-6 h-6 text-red-600" />
                    </div>
                  </div>
                  <CardAction>
                    <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {course.level}
                    </span>
                  </CardAction>
                </CardHeader>

                <CardContent className="!px-6 !py-0">
                  <CardTitle>{course.title}</CardTitle>
                  <CardDescription className="mt-2">{course.category}</CardDescription>
                  <p className="text-gray-700 mt-4">{course.description}</p>
                </CardContent>

                <CardFooter className="!px-6 !py-0 justify-between flex-wrap gap-4">
                  <div className="flex gap-2">
                    {course.resources.map((resource, idx) => (
                      <span key={idx} className="text-sm font-medium text-gray-700 bg-gray-100 px-3 py-1 rounded-full">
                        {resource}
                      </span>
                    ))}
                  </div>
                  <span className="text-sm text-gray-500">{course.duration}</span>
                </CardFooter>

                <div className="px-6">
                  <button className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition">
                    Start Learning
                  </button>
                </div>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Why Our Materials Section */}
      <div className="bg-gray-50 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Why Our Materials?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="!px-6">
                <CardTitle className="text-xl">100% Free</CardTitle>
                <p className="text-gray-700 mt-4">
                  All our educational content is freely available under open licenses.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="!px-6">
                <CardTitle className="text-xl">Practical Focus</CardTitle>
                <p className="text-gray-700 mt-4">
                  Learn by doing with hands-on projects and real-world case studies.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="!px-6">
                <CardTitle className="text-xl">Community Support</CardTitle>
                <p className="text-gray-700 mt-4">
                  Join our learning community for mentorship and peer collaboration.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Want to Teach Section */}
      <div className="py-20 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">Want to Teach?</h2>
          <p className="text-gray-600 text-lg mb-8">
            Share your expertise by creating educational content for our community.
          </p>
          <button onClick={handleBecomeInstructor} className="bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition">
            Become an Instructor
          </button>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
}
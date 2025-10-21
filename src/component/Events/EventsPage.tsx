'use client';
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/component/ui/card';
import { Button } from '@/component/ui/button';
import { Calendar, MapPin, Users, ExternalLink } from 'lucide-react';
import HeaderSection from '@/component/common/headersection';
import FooterSection from '@/component/common/footersection';
import { useRouter } from 'next/navigation';

export default function CommunityEventsPage() {
    const router = useRouter();

  const upcomingEvents = [
    {
      type: "Meetup",
      status: "Open",
      title: "OpenCause Meetup - Bangalore",
      date: "25 Jan 2025 · 10:00 AM - 1:00 PM",
      location: "To Be Announced, Bangalore",
      attendees: "50+ expected",
      description: "Monthly community meetup to discuss open source projects and collaboration opportunities.",
      statusColor: "bg-red-600 text-white",
      typeColor: "bg-red-600 text-white"
    },
    {
      type: "Workshop",
      status: "Open",
      title: "Tech for Good Workshop",
      date: "15 Feb 2025 · 2:00 PM - 5:00 PM",
      location: "TBD, Mumbai",
      attendees: "30 expected",
      description: "Hands-on workshop on building technology solutions for social challenges.",
      statusColor: "bg-red-600 text-white",
      typeColor: "bg-red-600 text-white"
    },
    {
      type: "Hackathon",
      status: "Registration Opens Soon",
      title: "OpenData Hackathon",
      date: "10 Mar 2025 · 9:00 AM - 6:00 PM",
      location: "Tech Hub Delhi, Delhi",
      attendees: "100+ expected",
      description: "48-hour hackathon to build solutions using open data for social impact.",
      statusColor: "bg-white text-black border border-gray-300",
      typeColor: "bg-red-600 text-white"
    },
    {
      type: "Conference",
      status: "Call for Papers Open",
      title: "Research Symposium 2025",
      date: "20 Apr 2025 · Full Day",
      location: "Online + Bangalore, Hybrid",
      attendees: "200+ expected",
      description: "Annual symposium showcasing research in Ed Tech, Art, and Social Innovation.",
      statusColor: "bg-white text-black border border-gray-300",
      typeColor: "bg-red-600 text-white"
    }
  ];

  const pastEvents = [
    {
      title: "OpenCause Annual Meet 2024",
      date: "Dec 2024",
      location: "Bangalore",
      attendees: "150+"
    },
    {
      title: "Open Source Bootcamp",
      date: "Nov 2024",
      location: "Online",
      attendees: "80+"
    },
    {
      title: "Community Hack Day",
      date: "Oct 2024",
      location: "Mumbai",
      attendees: "60+"
    }
  ];

  return (
    <>
      {/* Header */}
      <HeaderSection />

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <div className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-block mb-4">
              <span className="text-xs sm:text-sm font-medium text-black bg-white px-3 py-1 rounded-full border">
                Community Events
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
              Connect & <span className="text-red-600">Collaborate</span>
            </h1>
            <p className="text-gray-600 text-base sm:text-lg max-w-4xl mx-auto leading-relaxed">
              Join our meetups, workshops, and hackathons to connect with like-minded individuals and build impactful solutions together.
            </p>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 sm:mb-12 gap-4">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">Upcoming Events</h2>
              <Button variant="outline"
              onClick={() => router.push('/contact')}>Submit Event</Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {upcomingEvents.map((event, index) => (
                <Card key={index} className="bg-white border border-gray-200 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <span className={`${event.typeColor} px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold`}>
                        {event.type}
                      </span>
                      <span className={`${event.statusColor} px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold`}>
                        {event.status}
                      </span>
                    </div>
                    <CardTitle className="text-lg sm:text-xl font-bold mb-4">{event.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 mb-4">
                      <div className="flex items-start gap-3 text-gray-600">
                        <Calendar className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm">{event.date}</span>
                      </div>
                      <div className="flex items-start gap-3 text-gray-600">
                        <MapPin className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm">{event.location}</span>
                      </div>
                      <div className="flex items-start gap-3 text-gray-600">
                        <Users className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm">{event.attendees}</span>
                      </div>
                    </div>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-4">
                      {event.description}
                    </p>
                    {event.status === "Open" && (
                      <Button className="w-full bg-red-600 hover:bg-red-700 text-white"
                      onClick={() => router.push('/contact')}>
                        Register Now
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </Button>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Past Events Section */}
        <div className="bg-gray-50 py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 sm:mb-12">Past Events</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
              {pastEvents.map((event, index) => (
                <Card key={index} className="bg-white border border-gray-200">
                  <CardHeader>
                    <CardTitle className="text-lg sm:text-xl font-bold mb-2">{event.title}</CardTitle>
                    <p className="text-gray-500 text-xs sm:text-sm">{event.date}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between text-gray-600 text-xs sm:text-sm">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4" />
                        <span>{event.attendees}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Host an Event Section */}
        <div className="bg-white py-12 sm:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">Host an Event</h2>
            <p className="text-gray-600 text-base sm:text-lg max-w-3xl mx-auto mb-8">
              Organize a meetup or workshop in your city. We &apos;ll help you with resources and promotion.
            </p>
            <Button className="bg-red-600 hover:bg-red-700 text-white px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base"
            onClick={() => router.push('/contact')}>
              Get Started
            </Button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <FooterSection />
    </>
  );
}
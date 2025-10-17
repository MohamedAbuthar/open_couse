import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/component/ui/card';
import { Button } from '@/component/ui/button';
import { FileText, Database, BookOpen, Github } from 'lucide-react';
import HeaderSection from '@/component/common/headersection';
import FooterSection from '@/component/common/footersection';

export default function ResearchInnovationPage() {
  const focusAreas = [
    {
      title: "AI Ethics & Fairness",
      description: "Developing frameworks for responsible AI deployment in social programs, addressing bias, and ensuring algorithmic transparency."
    },
    {
      title: "IoT for Sustainability",
      description: "Research on low-power sensors, edge computing, and distributed networks for environmental monitoring in resource-constrained settings."
    },
    {
      title: "Open Robotics",
      description: "Advancing affordable, accessible robotics designs for agriculture, disaster response, and assistive technologies."
    },
    {
      title: "Civic Data Systems",
      description: "Building open data standards, impact measurement frameworks, and tools for transparent governance and accountability."
    }
  ];

  const publications = [
    {
      title: "Measuring Social Impact with Open Data: A Framework",
      author: "OpenCause Research Team",
      year: "2024",
      type: "Whitepaper",
      typeColor: "bg-red-50 text-red-600"
    },
    {
      title: "Low-Cost IoT Sensors for Rural Water Quality Monitoring",
      author: "A. Kumar, S. Patel, et al.",
      year: "2024",
      type: "Research Paper",
      typeColor: "bg-red-50 text-red-600"
    },
    {
      title: "Ethical Considerations in AI for Nonprofit Applications",
      author: "OpenCause Foundation & Partners",
      year: "2023",
      type: "Report",
      typeColor: "bg-red-50 text-red-600"
    }
  ];

  const datasetStats = [
    {
      value: "15+",
      label: "Public Datasets"
    },
    {
      value: "500K+",
      label: "Data Points"
    },
    {
      value: "CC BY 4.0",
      label: "Open License"
    }
  ];

  return (
    <>
      {/* Header */}
      <HeaderSection />

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-b from-[#fff5f5] to-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl font-bold mb-6">
              Research & <span className="text-red-600">Innovation</span>
            </h1>
            <p className="text-gray-600 text-lg max-w-4xl mx-auto leading-relaxed">
              Advancing open knowledge through rigorous research, collaborative studies, and freely available frameworks for social impact technology.
            </p>
          </div>

          {/* Research Focus Areas Section - Same Background */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">
                Research <span className="text-red-600">Focus Areas</span>
              </h2>
              <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                Our research bridges academic rigor with real-world application, ensuring findings directly benefit communities.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-20">
              {focusAreas.map((area, index) => (
                <Card key={index} className="bg-white border border-gray-200 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold">{area.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 leading-relaxed">{area.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Publications & Reports Section */}
        <div className="bg-gray-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">
                Publications & <span className="text-red-600">Reports</span>
              </h2>
              <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                All our research is openly published and freely accessible under Creative Commons licenses.
              </p>
            </div>

            <div className="max-w-5xl mx-auto space-y-4">
              {publications.map((pub, index) => (
                <Card key={index} className="bg-white border border-gray-200 hover:border-red-400 transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex gap-4 flex-1">
                        <FileText className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                        <div className="flex-1">
                          <h3 className="text-lg font-bold mb-2">{pub.title}</h3>
                          <p className="text-gray-600 text-sm mb-3">
                            {pub.author} · {pub.year}
                          </p>
                          <span className={`inline-block ${pub.typeColor} px-3 py-1 rounded-full text-xs font-medium `}>
                            {pub.type}
                          </span>
                        </div>
                      </div>
                      <Button variant="outline" className="ml-4 flex-shrink-0">
                        Download
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button variant="outline" className="inline-flex items-center gap-2">
                <Github className="w-4 h-4" />
                View All Publications
              </Button>
            </div>
          </div>
        </div>

        {/* Open Datasets Section */}
        <div className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <Database className="w-16 h-16 text-red-600 mx-auto mb-6" />
              <h2 className="text-4xl font-bold mb-4">
                Open <span className="text-red-600">Datasets</span>
              </h2>
              <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                Access and contribute to our collection of anonymized, ethical datasets for social impact research.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {datasetStats.map((stat, index) => (
                <Card key={index} className="bg-white border border-gray-200 text-center">
                  <CardContent className="pt-8 pb-8">
                    <div className="text-4xl font-bold text-red-600 mb-2">{stat.value}</div>
                    <div className="text-gray-600">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Contribute to Research Section */}
        <div className="bg-gray-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <BookOpen className="w-16 h-16 text-red-600 mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-4">
              Contribute to <span className="text-red-600">Research</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-8">
              We welcome research collaborations, guest contributions, and peer review from academic and industry partners. Submit your findings or propose joint studies.
            </p>
            <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 text-base">
              Submit Research Proposal
            </Button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <FooterSection />
    </>
  );
}
import React from 'react';
import { Database, Table, FileText, Download } from 'lucide-react';
import HeaderSection from '@/component/common/headersection';
import FooterSection from '@/component/common/footersection';
import { Button } from '../ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../ui/card';

export default function OpenDataPage() {
  const datasets = [
    {
      icon: <Database className="w-6 h-6" />,
      title: "Indian NGO Directory",
      updated: "Jan 2025",
      description: "Comprehensive database of registered nonprofits across India with their focus areas and impact metrics.",
      formats: ["CSV", "JSON", "API"],
      count: "15K records",
      license: "CC BY 4.0",
      iconBg: "bg-red-50",
      iconColor: "text-red-600"
    },
    {
      icon: <Table className="w-6 h-6" />,
      title: "Educational Resources Index",
      updated: "Dec 2024",
      description: "Curated collection of open educational resources categorized by subject and learning level.",
      formats: ["CSV", "JSON"],
      count: "25K resources",
      license: "CC BY 4.0",
      iconBg: "bg-red-50",
      iconColor: "text-red-600"
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Social Impact Metrics",
      updated: "Nov 2024",
      description: "Standardized metrics and indicators for measuring social and environmental impact.",
      formats: ["JSON", "API"],
      count: "500+ metrics",
      license: "CC0 1.0",
      iconBg: "bg-red-50",
      iconColor: "text-red-600"
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Open Skills Framework",
      updated: "Oct 2024",
      description: "Taxonomy of skills and competencies for social sector professionals and volunteers.",
      formats: ["CSV", "JSON", "RDF"],
      count: "2K skills",
      license: "CC BY 4.0",
      iconBg: "bg-red-50",
      iconColor: "text-red-600"
    }
  ];

  const guidelines = [
    {
      title: "Attribution",
      description: "Give appropriate credit when using our datasets in your work or publications."
    },
    {
      title: "Share Alike",
      description: "If you modify or build upon our data, share your contributions openly."
    },
    {
      title: "Report Issues",
      description: "Help us improve data quality by reporting errors or suggesting updates."
    }
  ];

  return (
    <>
      {/* Header */}
      <HeaderSection />
      
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
            <div className="inline-block mb-4">
              <span className="text-sm font-medium text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                Open Data
              </span>
            </div>
            <h1 className="text-5xl font-bold mb-4">
              Open <span className="text-red-600">Data</span>
            </h1>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Access and contribute to our collection of open datasets that support research, innovation, and evidence-based decision making in the social sector.
            </p>
          </div>
        </div>

        {/* Datasets Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {datasets.map((dataset, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className={`${dataset.iconBg} ${dataset.iconColor} p-3 rounded-lg`}>
                      {dataset.icon}
                    </div>
                    <span className="bg-red-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                      {dataset.license}
                    </span>
                  </div>
                  <CardTitle className="text-xl mb-2">{dataset.title}</CardTitle>
                  <CardDescription className="text-sm text-gray-500">
                    Updated: {dataset.updated}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                    {dataset.description}
                  </p>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex gap-2">
                      {dataset.formats.map((format, idx) => (
                        <span
                          key={idx}
                          className="text-xs font-medium text-gray-700 bg-gray-100 px-3 py-1 rounded"
                        >
                          {format}
                        </span>
                      ))}
                    </div>
                    <span className="text-sm text-gray-500">{dataset.count}</span>
                  </div>
                  <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
                    <Download className="w-4 h-4 mr-2" />
                    Download Dataset
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

           {/* Guidelines Section */}
          <div className="mt-16 mb-16">
            <h2 className="text-4xl font-bold text-center mb-12">Data Usage Guidelines</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {guidelines.map((guideline, index) => (
                <Card key={index} className="bg-white border border-gray-200">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold mb-4 text-left">{guideline.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-base leading-relaxed text-left">
                      {guideline.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Contribute Your Data Section */}
      <div className="bg-white-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Contribute Your Data</h2>
          <p className="text-gray-600 text-lg mb-8">
            Have a dataset that could benefit the community? Share it with us.
          </p>
          <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 text-base">
            Submit Dataset
          </Button>
        </div>
      </div>

      {/* Footer */}
      <FooterSection />
    </>
  );
}
import React from 'react';
import BlogCard from '../components/BlogCard';
import { blogPosts } from '../data/blogPosts';
import VisualPageHeader from '../components/VisualPageHeader';

const Blog = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <VisualPageHeader
        title="Project Updates"
        subtitle="Community updates, shared learning, and progress on building the modern manufacturing stack."
        illustrationType="factory"
        accentColor="gray"
        videoSrc={process.env.PUBLIC_URL + '/videos/factory-header2.mp4'}
      />

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Project Overview */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Project Documentation</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Follow our journey as we research, prototype, and integrate various industrial automation technologies. 
            We document our findings, challenges, and solutions to share knowledge with the engineering community.
          </p>
        </div>

        {/* Featured Post */}
        {blogPosts.length > 0 && (
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Latest Update</h2>
            <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
              <BlogCard post={blogPosts[0]} featured={true} />
            </div>
          </div>
        )}

        {/* All Posts */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">All Updates</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post, index) => (
              <BlogCard key={index} post={post} />
            ))}
          </div>
        </div>

        {/* Project Categories */}
        <div className="mt-16 bg-white rounded-3xl p-12 shadow-lg mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Documentation Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔧</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Hardware</h3>
              <p className="text-gray-600 text-sm">PLC setup, wiring, and physical integration</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💻</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Software</h3>
              <p className="text-gray-600 text-sm">Programming, configuration, and development</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔗</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Integration</h3>
              <p className="text-gray-600 text-sm">System connectivity and data flow</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Analytics</h3>
              <p className="text-gray-600 text-sm">Data analysis and performance insights</p>
            </div>
          </div>
        </div>

        {/* GitHub Integration */}
        <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-3xl p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Open Source Project</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Our project is open source! Follow our progress on GitHub and contribute to the development.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://github.com/sim-factory-lab"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-300 transform hover:scale-105"
            >
              View on GitHub
            </a>
            <a
              href="https://github.com/sim-factory-lab/issues"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:scale-105"
            >
              Report Issues
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog; 
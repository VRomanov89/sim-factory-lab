import React from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { blogPosts } from '../data/blogPosts';
import PageHeader from '../components/PageHeader';

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Update Not Found</h1>
          <p className="text-gray-600 mb-8">The project update you're looking for doesn't exist.</p>
          <Link
            to="/blog"
            className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-colors duration-300"
          >
            Back to Updates
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <PageHeader
        title={post.title}
        subtitle={post.excerpt}
        backgroundType="gradient"
        showFloatingElements={false}
      />

      {/* Main content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Article */}
        <article className="bg-white rounded-3xl shadow-lg p-12 mb-12">
          {/* Meta information */}
          <div className="flex items-center justify-between mb-8 pb-8 border-b border-gray-200">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 font-bold text-lg">
                  {post.author.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <div>
                <p className="font-semibold text-gray-900">{post.author}</p>
                <p className="text-gray-600 text-sm">{post.date}</p>
              </div>
            </div>
            <div className="flex space-x-2">
              {post.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </div>
        </article>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Link
            to="/blog"
            className="flex items-center text-blue-600 hover:text-blue-700 transition-colors duration-300"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Updates
          </Link>
          
          <div className="flex space-x-4">
            <button className="flex items-center text-gray-600 hover:text-blue-600 transition-colors duration-300">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
              </svg>
              Share
            </button>
            <a
              href={`https://github.com/sim-factory-lab/issues/new?title=Comment on: ${post.title}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-600 hover:text-blue-600 transition-colors duration-300"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              Discuss
            </a>
          </div>
        </div>

        {/* Related Updates */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Related Updates</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts
              .filter(p => p.slug !== slug)
              .slice(0, 2)
              .map((relatedPost, index) => (
                <Link
                  key={index}
                  to={`/blog/${relatedPost.slug}`}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 hover:text-blue-600 transition-colors duration-300">
                    {relatedPost.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{relatedPost.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{relatedPost.date}</span>
                    <span className="text-blue-600 text-sm font-medium">Read more →</span>
                  </div>
                </Link>
              ))}
          </div>
        </div>

        {/* GitHub Integration */}
        <div className="mt-16 bg-gray-100 rounded-3xl p-8 text-center">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Contribute to Our Project</h3>
          <p className="text-gray-600 mb-6">
            Found an issue or have a suggestion? Our project is open source and we welcome contributions!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://github.com/sim-factory-lab"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-900 text-white px-6 py-3 rounded-xl font-semibold hover:bg-gray-800 transition-colors duration-300"
            >
              View Repository
            </a>
            <a
              href="https://github.com/sim-factory-lab/issues"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-gray-900 text-gray-900 px-6 py-3 rounded-xl font-semibold hover:bg-gray-900 hover:text-white transition-all duration-300"
            >
              Report Issue
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost; 